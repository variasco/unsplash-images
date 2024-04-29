import { ImagesResponse } from "../model/types/image-api.types";

const API_URL = "https://api.unsplash.com/search/photos";
const client_id = "Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs";

export default function fetchImages(
  query: string,
  page: number
): Promise<ImagesResponse> {
  return fetch(
    `${API_URL}?client_id=${client_id}&query=${query}&page=${page}`
  ).then((res) => res.json());
}
