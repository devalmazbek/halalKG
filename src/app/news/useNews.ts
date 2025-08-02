import {useState, useEffect, useCallback} from "react";
import {getNews} from "@/services/news-services";
import {NewsType} from "@/types/news";

export const useNews = () => {
  const [news, setNews] = useState<NewsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getNews();
      setNews(data);
    } catch (error: any) {
      setError(error?.response?.data?.message || error?.message || 'Ошибка при загрузке новостей');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    news,
    isLoading,
    error,
  }
}