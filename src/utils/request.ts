import axios, { Method } from 'axios';

export const API = 'https://public-us.opendatasoft.com/api/v2/';

export default async function request(url: string, method: Method = 'GET') {
  const requestUrl = `${API}/${url}`;

  try {
    const response = await axios(requestUrl, {
      method,
      responseType: 'json',
    });

    return response.data;
  } catch (error) {
    console.log(error);

    throw error;
  }
}
