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
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ5Umhac0Z1bndlUjAwMk8waVhmQkRuT0Yyb0YzIiwiZGF0ZSI6IjIwMjQtMTAtMTVUMTY6NTI6MDkuNDMyWiIsImlhdCI6MTcyOTAxMTEyOX0.VQ9jQvIWWeL4ZLgnu1szSjk8to3ytXyziYCGvZPX0X8';
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
