import { parseApiUrl } from '../utils/parse-api-url.ts';
import toast from 'react-hot-toast';

export interface ApiRequestProps extends Omit<RequestInit, 'body'> {
  url: string;
  data?: unknown;
  params?: AnyObjectType;
  slug?: string;
}

export type AnyObjectType = Record<string, any>;

export const BASE_URL = process.env.NEXT_PUBLIC_PLATEGA_API_URL;

export const apiRequest = async ({
                                   url,
                                   params,
                                   headers,
                                   data,
                                   slug,
                                   ...options
                                 }: ApiRequestProps) => {
  try {
    const authToken = window.localStorage.getItem('authToken');
    const fullUrl = parseApiUrl(params, url, slug);

    const isFormData = data instanceof FormData;

    const body = isFormData ? data : JSON.stringify(data);

    const response = await fetch(fullUrl, {
      headers: {
        ...(authToken && {
          Authorization: `Bearer ${authToken}`,
        }),
        ...(!isFormData && { 'Content-Type': 'application/json' }),
        ...headers,
      },
      ...((data && { body }) as Record<string, unknown>),
      ...options,
    });

    const resJson = await response.json();

    if (!response) {
      const errorText = resJson.data ? String(resJson.data) : '';
      const errorMessage = `Ошибка HTTP:`;

      toast.error(errorMessage + errorText);

    }

    return resJson;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    const errorMessage = String(error);
    toast.error(errorMessage);

  }
};
