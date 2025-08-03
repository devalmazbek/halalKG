import {apiClient} from "@/services/api";
import {NewsType} from "@/types/news";

export const getNews = async ():Promise<NewsType[]> => {
  const response = await apiClient.get(`/news`);
  return response.data;
}

export const getDetailNewsItem = async (id: string | null):Promise<NewsType> => {
  const response = await apiClient.get(`/news/${id}`);
  return response.data;
}
