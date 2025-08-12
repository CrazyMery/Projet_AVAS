import { useEffect, useState } from 'react';

export interface InstagramPost {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  thumbnail_url: string;
}

export const usePosts = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = import.meta.env.VITE_IG_ACCESS_TOKEN;
    const igAccountId = import.meta.env.VITE_IG_ACCOUNT_ID;
    const url = `https://graph.facebook.com/v19.0/${igAccountId}/media?fields=id,caption,media_url,permalink,timestamp,thumbnail_url&access_token=${token}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.data) {
            console.log(data.data);
          setPosts(data.data);
        } else {
          setError('Failed to fetch Instagram posts.');
          console.error('Instagram API error:', data);
        }
      })
      .catch(err => {
        setError(err.message || 'Unknown error');
        console.error('Fetch error:', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { posts, isLoading, error };
};
