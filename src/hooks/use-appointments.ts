import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { NewAppointment, Appointment } from '@/types/database';

// Fetch all appointments
export const useAppointments = () => {
  return useQuery({
    queryKey: ['appointments'],
    queryFn: async (): Promise<Appointment[]> => {
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .order('appointment_date', { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return (data as Appointment[]) || [];
    },
  });
};

// Fetch appointments for a specific date
export const useAppointmentsByDate = (date: string) => {
  return useQuery({
    queryKey: ['appointments', 'date', date],
    queryFn: async (): Promise<Appointment[]> => {
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .eq('appointment_date', date)
        .order('appointment_time', { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return (data as Appointment[]) || [];
    },
    enabled: !!date,
  });
};

// Create a new appointment
export const useCreateAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (appointment: NewAppointment): Promise<Appointment> => {
      const { data, error } = await supabase
        .from('appointments')
        .insert(appointment as Record<string, unknown>)
        .select()
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data as Appointment;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
  });
};

// Update appointment status
export const useUpdateAppointmentStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      status,
    }: {
      id: string;
      status: Appointment['status'];
    }): Promise<Appointment> => {
      const { data, error } = await supabase
        .from('appointments')
        .update({ status } as Record<string, unknown>)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data as Appointment;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
  });
};

// Cancel an appointment
export const useCancelAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string): Promise<Appointment> => {
      const { data, error } = await supabase
        .from('appointments')
        .update({ status: 'cancelled' } as Record<string, unknown>)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data as Appointment;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
  });
};

// Check time slot availability
export const useCheckTimeSlotAvailability = () => {
  return useMutation({
    mutationFn: async ({
      date,
      time,
    }: {
      date: string;
      time: string;
    }): Promise<boolean> => {
      const { data, error } = await supabase
        .from('appointments')
        .select('id')
        .eq('appointment_date', date)
        .eq('appointment_time', time)
        .neq('status', 'cancelled');

      if (error) {
        throw new Error(error.message);
      }

      return !data || data.length === 0;
    },
  });
};

// Get booked time slots for a specific date
export const useBookedTimeSlots = (date: string) => {
  return useQuery({
    queryKey: ['appointments', 'booked-slots', date],
    queryFn: async (): Promise<string[]> => {
      const { data, error } = await supabase
        .from('appointments')
        .select('appointment_time')
        .eq('appointment_date', date)
        .neq('status', 'cancelled');

      if (error) {
        throw new Error(error.message);
      }

      return (data as { appointment_time: string }[])?.map((appointment) => appointment.appointment_time) || [];
    },
    enabled: !!date,
  });
};
