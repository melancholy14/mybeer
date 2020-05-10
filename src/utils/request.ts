import axios, { Method } from 'axios';

export const API = 'https://public-us.opendatasoft.com/api/v2/';
export const SEARCH_API =
  'https://data.opendatasoft.com/api/records/1.0/search/?dataset=open-beer-database%40public-us';

type Headers = {};

type Params = {};

type Request = {
  url?: string;
  method?: Method;
  headers?: Headers;
  params?: Params;
  requestType?: 'search';
};

export default async function request({
  url,
  method = 'GET',
  params,
  requestType,
}: Request) {
  const requestUrl = requestType === 'search' ? SEARCH_API : `${API}/${url}`;

  try {
    const response = await axios(requestUrl, {
      method,
      responseType: 'json',
      params,
    });

    return response.data;
  } catch (error) {
    console.log(error);

    throw error;
  }
}
