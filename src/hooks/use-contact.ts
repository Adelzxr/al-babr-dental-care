import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { NewContactMessage, ContactMessage } from '@/types/database';

// Fetch all contact messages
export const useContactMessages = () => {
  return useQuery({
    queryKey: ['contact-messages'],
    queryFn: async (): Promise<ContactMessage[]> => {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      return (data as ContactMessage[]) || [];
    },
  });
};

// Create a new contact message
export const useCreateContactMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (message: NewContactMessage): Promise<ContactMessage> => {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert(message as Record<string, unknown>)
        .select()
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data as ContactMessage;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-messages'] });
    },
  });
};

// Mark message as read
export const useMarkMessageAsRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string): Promise<ContactMessage> => {
      const { data, error } = await supabase
        .from('contact_messages')
        .update({ is_read: true } as Record<string, unknown>)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data as ContactMessage;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-messages'] });
    },
  });
};

// Delete a contact message
export const useDeleteContactMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string): Promise<void> => {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-messages'] });
    },
  });
};
