export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          admin_response: string | null
          company: string | null
          created_at: string
          email: string
          first_name: string
          id: string
          inquiry_type: string | null
          last_name: string
          message: string
          phone: string | null
          responded_by: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          admin_response?: string | null
          company?: string | null
          created_at?: string
          email: string
          first_name: string
          id?: string
          inquiry_type?: string | null
          last_name: string
          message: string
          phone?: string | null
          responded_by?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          admin_response?: string | null
          company?: string | null
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          inquiry_type?: string | null
          last_name?: string
          message?: string
          phone?: string | null
          responded_by?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      demo_requests: {
        Row: {
          company: string | null
          company_size: string | null
          created_at: string
          current_payment_provider: string | null
          email: string
          first_name: string
          id: string
          industry: string | null
          job_title: string | null
          last_name: string
          message: string | null
          monthly_volume: string | null
          phone: string | null
          preferred_demo_date: string | null
          preferred_demo_time: string | null
          responded_by: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          company?: string | null
          company_size?: string | null
          created_at?: string
          current_payment_provider?: string | null
          email: string
          first_name: string
          id?: string
          industry?: string | null
          job_title?: string | null
          last_name: string
          message?: string | null
          monthly_volume?: string | null
          phone?: string | null
          preferred_demo_date?: string | null
          preferred_demo_time?: string | null
          responded_by?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          company?: string | null
          company_size?: string | null
          created_at?: string
          current_payment_provider?: string | null
          email?: string
          first_name?: string
          id?: string
          industry?: string | null
          job_title?: string | null
          last_name?: string
          message?: string | null
          monthly_volume?: string | null
          phone?: string | null
          preferred_demo_date?: string | null
          preferred_demo_time?: string | null
          responded_by?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      newsletter_subscriptions: {
        Row: {
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          status: string | null
          subscribed_at: string
          subscription_type: string | null
          unsubscribed_at: string | null
        }
        Insert: {
          email: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          status?: string | null
          subscribed_at?: string
          subscription_type?: string | null
          unsubscribed_at?: string | null
        }
        Update: {
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          status?: string | null
          subscribed_at?: string
          subscription_type?: string | null
          unsubscribed_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
          role: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      quote_requests: {
        Row: {
          average_transaction_amount: string | null
          business_type: string | null
          company: string
          created_at: string
          current_provider: string | null
          email: string
          first_name: string
          id: string
          integration_type: string | null
          last_name: string
          monthly_transaction_volume: string | null
          phone: string | null
          quote_amount: number | null
          quote_valid_until: string | null
          responded_by: string | null
          specific_requirements: string | null
          status: string | null
          timeline: string | null
          updated_at: string
        }
        Insert: {
          average_transaction_amount?: string | null
          business_type?: string | null
          company: string
          created_at?: string
          current_provider?: string | null
          email: string
          first_name: string
          id?: string
          integration_type?: string | null
          last_name: string
          monthly_transaction_volume?: string | null
          phone?: string | null
          quote_amount?: number | null
          quote_valid_until?: string | null
          responded_by?: string | null
          specific_requirements?: string | null
          status?: string | null
          timeline?: string | null
          updated_at?: string
        }
        Update: {
          average_transaction_amount?: string | null
          business_type?: string | null
          company?: string
          created_at?: string
          current_provider?: string | null
          email?: string
          first_name?: string
          id?: string
          integration_type?: string | null
          last_name?: string
          monthly_transaction_volume?: string | null
          phone?: string | null
          quote_amount?: number | null
          quote_valid_until?: string | null
          responded_by?: string | null
          specific_requirements?: string | null
          status?: string | null
          timeline?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      trial_requests: {
        Row: {
          business_type: string | null
          company: string
          created_at: string
          email: string
          expected_monthly_volume: string | null
          first_name: string
          id: string
          integration_timeline: string | null
          job_title: string | null
          last_name: string
          message: string | null
          phone: string | null
          responded_by: string | null
          status: string | null
          trial_end_date: string | null
          trial_start_date: string | null
          updated_at: string
        }
        Insert: {
          business_type?: string | null
          company: string
          created_at?: string
          email: string
          expected_monthly_volume?: string | null
          first_name: string
          id?: string
          integration_timeline?: string | null
          job_title?: string | null
          last_name: string
          message?: string | null
          phone?: string | null
          responded_by?: string | null
          status?: string | null
          trial_end_date?: string | null
          trial_start_date?: string | null
          updated_at?: string
        }
        Update: {
          business_type?: string | null
          company?: string
          created_at?: string
          email?: string
          expected_monthly_volume?: string | null
          first_name?: string
          id?: string
          integration_timeline?: string | null
          job_title?: string | null
          last_name?: string
          message?: string | null
          phone?: string | null
          responded_by?: string | null
          status?: string | null
          trial_end_date?: string | null
          trial_start_date?: string | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
