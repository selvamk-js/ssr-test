import axios from "axios";
import { useQuery } from "react-query";
export const GetPhotos = "@photos";
export const getPhotos = async () => {
  const { data } = await axios.get(
    `http://jsonplaceholder.typicode.com/photos`
  );
  return data;
};

export function useGetPhotos() {
  return useQuery(GetPhotos, getPhotos, {
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: false,
    onError: (e) => {
      console.error(e);
    },
  });
}
