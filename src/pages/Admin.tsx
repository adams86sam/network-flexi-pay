import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Loader2, Mail, Phone, Building, MessageSquare, Send } from "lucide-react";

interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string | null;
  phone: string | null;
  inquiry_type: string | null;
  message: string;
  status: 'unread' | 'read' | 'responded';
  admin_response: string | null;
  created_at: string;
}

const Admin = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [response, setResponse] = useState("");
  const [responding, setResponding] = useState(false);
  
  const { toast } = useToast();
  const { user, profile, loading: authLoading } = useAuth();

  // Redirect if not admin
  if (!authLoading && (!user || profile?.role !== 'admin')) {
    return <Navigate to="/auth" replace />;
  }

  useEffect(() => {
    if (profile?.role === 'admin') {
      fetchSubmissions();
    }
  }, [profile]);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions((data || []).map(sub => ({
        ...sub,
        status: sub.status as 'unread' | 'read' | 'responded'
      })));
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast({
        title: "Error",
        description: "Failed to load contact submissions.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status: 'read' })
        .eq('id', id);

      if (error) throw error;
      
      setSubmissions(prev => prev.map(sub => 
        sub.id === id ? { ...sub, status: 'read' as const } : sub
      ));
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const handleResponse = async (id: string) => {
    if (!response.trim()) return;
    
    setResponding(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ 
          status: 'responded',
          admin_response: response,
          responded_by: user?.id
        })
        .eq('id', id);

      if (error) throw error;
      
      setSubmissions(prev => prev.map(sub => 
        sub.id === id ? { 
          ...sub, 
          status: 'responded' as const,
          admin_response: response 
        } : sub
      ));
      
      setResponse("");
      setSelectedSubmission(null);
      
      toast({
        title: "Response sent",
        description: "Admin response has been saved.",
      });
    } catch (error) {
      console.error('Error sending response:', error);
      toast({
        title: "Error",
        description: "Failed to save response.",
        variant: "destructive",
      });
    } finally {
      setResponding(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread': return 'destructive';
      case 'read': return 'secondary';
      case 'responded': return 'default';
      default: return 'secondary';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage contact form submissions</p>
          </div>
          <Button 
            variant="outline"
            onClick={fetchSubmissions}
            disabled={loading}
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Refresh"}
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Submissions List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Contact Submissions ({submissions.length})</h2>
            
            {submissions.length === 0 ? (
              <Card className="p-6 text-center">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">No contact submissions yet.</p>
              </Card>
            ) : (
              submissions.map((submission) => (
                <Card 
                  key={submission.id} 
                  className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedSubmission?.id === submission.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => {
                    setSelectedSubmission(submission);
                    if (submission.status === 'unread') {
                      markAsRead(submission.id);
                    }
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">
                      {submission.first_name} {submission.last_name}
                    </h3>
                    <Badge variant={getStatusColor(submission.status)}>
                      {submission.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {submission.email}
                    </div>
                    {submission.company && (
                      <div className="flex items-center gap-1">
                        <Building className="w-3 h-3" />
                        {submission.company}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {submission.message}
                  </p>
                  
                  <div className="text-xs text-muted-foreground mt-2">
                    {formatDate(submission.created_at)}
                  </div>
                </Card>
              ))
            )}
          </div>

          {/* Selected Submission Details */}
          <div className="space-y-4">
            {selectedSubmission ? (
              <>
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Submission Details</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">
                        Contact Information
                      </h3>
                      <p className="font-medium">
                        {selectedSubmission.first_name} {selectedSubmission.last_name}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Mail className="w-3 h-3" />
                        {selectedSubmission.email}
                      </div>
                      {selectedSubmission.phone && (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Phone className="w-3 h-3" />
                          {selectedSubmission.phone}
                        </div>
                      )}
                      {selectedSubmission.company && (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Building className="w-3 h-3" />
                          {selectedSubmission.company}
                        </div>
                      )}
                    </div>
                    
                    {selectedSubmission.inquiry_type && (
                      <div>
                        <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">
                          Inquiry Type
                        </h3>
                        <Badge variant="outline">{selectedSubmission.inquiry_type}</Badge>
                      </div>
                    )}
                    
                    <div>
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">
                        Message
                      </h3>
                      <p className="whitespace-pre-wrap">{selectedSubmission.message}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">
                        Submitted
                      </h3>
                      <p className="text-sm">{formatDate(selectedSubmission.created_at)}</p>
                    </div>
                  </div>
                </Card>

                {/* Response Section */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Admin Response</h3>
                  
                  {selectedSubmission.admin_response ? (
                    <div className="bg-muted p-4 rounded-md">
                      <p className="whitespace-pre-wrap">{selectedSubmission.admin_response}</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Textarea
                        placeholder="Write your response..."
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                        className="min-h-[100px]"
                      />
                      <Button 
                        onClick={() => handleResponse(selectedSubmission.id)}
                        disabled={!response.trim() || responding}
                        className="w-full"
                      >
                        {responding ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Saving Response...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Save Response
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </Card>
              </>
            ) : (
              <Card className="p-6 text-center">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">
                  Select a submission from the left to view details
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;