import {useState, useEffect} from 'react';
import {useParams} from "next/navigation";

import {getDetailNewsItem} from "@/services/news-services";

export const useDetailNews = () => {
  const params = useParams();
  const id = typeof params?.id === 'string' ? params.id : null;

  const [item, setItem] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<Error | unknown>(null);

  const getNewsItem = async (id: string | null) => {
    if (!id) return;
    try {
      setLoading(true);
      const data = await getDetailNewsItem(id);
      setItem(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getNewsItem(id);
  }, [id]);

  return {item, isLoading, error};

}