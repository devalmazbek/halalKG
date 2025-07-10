// import apiClent from './api';
import axios from "axios";

export const getLastNews = async ():Promise<any> => {
  const response = await axios.get('https://dummyjson.com/users');
  return response.data.users;
}
