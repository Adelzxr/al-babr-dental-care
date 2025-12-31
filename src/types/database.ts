export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      appointments: {
        Row: {
          id: string;
          created_at: string;
          patient_name: string;
          phone: string;
          email: string | null;
          appointment_date: string;
          appointment_time: string;
          message: string | null;
          status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
        };
        Insert: {
          id?: string;
          created_at?: string;
          patient_name: string;
          phone: string;
          email?: string | null;
          appointment_date: string;
          appointment_time: string;
          message?: string | null;
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
        };
        Update: {
          id?: string;
          created_at?: string;
          patient_name?: string;
          phone?: string;
          email?: string | null;
          appointment_date?: string;
          appointment_time?: string;
          message?: string | null;
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
        };
      };
      contact_messages: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          subject: string | null;
          message: string;
          is_read: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          subject?: string | null;
          message: string;
          is_read?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          email?: string;
          subject?: string | null;
          message?: string;
          is_read?: boolean;
        };
      };
      patients: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          phone: string;
          email: string | null;
          date_of_birth: string | null;
          notes: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          phone: string;
          email?: string | null;
          date_of_birth?: string | null;
          notes?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          phone?: string;
          email?: string | null;
          date_of_birth?: string | null;
          notes?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      appointment_status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    };
  };
}

// Helper types for easier usage
export type Appointment = Database['public']['Tables']['appointments']['Row'];
export type NewAppointment = Database['public']['Tables']['appointments']['Insert'];
export type UpdateAppointment = Database['public']['Tables']['appointments']['Update'];

export type ContactMessage = Database['public']['Tables']['contact_messages']['Row'];
export type NewContactMessage = Database['public']['Tables']['contact_messages']['Insert'];

export type Patient = Database['public']['Tables']['patients']['Row'];
export type NewPatient = Database['public']['Tables']['patients']['Insert'];
