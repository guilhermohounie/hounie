// SWR generic fetcher
export const fetcher = async (url: string) => {
  const res = await fetch(url);

  const json = await res.json();

  if (!res.ok) {
    const error = {
      status: res.status,
      message: json.error as string,
    };
    throw error;
  }

  return json;
};
