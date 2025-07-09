import { useState } from 'react';

interface ContentItem {
  id: string;
  page: string;
  section: string;
  key: string;
  value: string;
  type: 'text' | 'textarea' | 'image' | 'url';
  updatedAt?: string;
}

interface UseContentReturn {
  content: ContentItem[];
  loading: boolean;
  error: string | null;
  getContent: (page: string, section: string, key: string) => string;
  refreshContent: () => void;
}

export const useContent = (): UseContentReturn => {
  // No content, no loading, no error
  const [content] = useState<ContentItem[]>([]);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  // Always return empty string for getContent
  const getContent = () => '';
  const refreshContent = () => {};

  return { content, loading, error, getContent, refreshContent };
};

export default useContent;
