// api/apicall.ts

import axios from 'axios';
import apiToken from './apiToken'; 

export const postRequest = async ({ url, data }: { url: string; data: any }) => {
  const response = await apiToken.post(url, data);
  return response.data;
};

export const getRequest = async ({ url }: { url: string }) => {
  const response = await apiToken.get(url);
  return response.data;
};
