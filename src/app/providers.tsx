"use client";

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Создаем клиент запросов с оптимальными настройками для производительности
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 минута
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
} 