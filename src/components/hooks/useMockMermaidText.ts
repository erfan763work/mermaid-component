// src/hooks/useUsers.js
import { useQuery } from 'react-query';
import { fetchMermaidTexts } from '../utils';

export const useMermaidTexts = () => {
  return useQuery({
    queryKey: ['mermaidTexts'],
    queryFn: fetchMermaidTexts,
  });
};
