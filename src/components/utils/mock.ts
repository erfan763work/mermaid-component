import type { TMockMermaidText } from './type';

export const mockMermaidTexts: TMockMermaidText[] = [];

export const fetchMermaidTexts = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockMermaidTexts;
};
