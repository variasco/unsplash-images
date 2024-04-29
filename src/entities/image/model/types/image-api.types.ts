export interface ImagesResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

export interface Image {
  id: string;
  color: string;
  description: string;
  urls: {
    full: string;
    small: string;
  };
}
