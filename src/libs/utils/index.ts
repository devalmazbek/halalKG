import { format } from 'date-fns';

export function formatDate(isoDate: string): string {
  return format(new Date(isoDate), 'dd.MM.yyyy');
}