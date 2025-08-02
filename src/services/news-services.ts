import {apiClient} from "@/services/api";
import axios from "axios";
import {NewsType} from "@/types/news";


const baseURL = process.env.NEXT_PUBLIC_BASE_API;

export const getNews = async ():Promise<NewsType[]> => {
  const response = await axios.get(`${baseURL}/news`);
  return response.data;
}
