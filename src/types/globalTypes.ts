export interface IData {
  _id: number;
  title: string;
  des: string;
}

export type BookGenre =
  | "Fiction"
  | "Non-Fiction"
  | "Science Fiction"
  | "Fantasy"
  | "Mystery"
  | "Romance"
  | "Thriller"
  | "Horror"
  | "Adventure"
  | "Historical Fiction"
  | "Biography"
  | "Self-Help"
  | "Poetry"
  | "Cookbook"
  | "Graphic Novel"
  | "Young Adult";

export type IReview = {
  rating: number;
  reviewText: string;
  reviewer: string;
};

export type IBook = {
  _id: string;
  title: string;
  description?: string;
  image?: string;
  reviews?: IReview[];
  author: string;
  publishedAt: string;
  genre: BookGenre;
};

export type Inputs = {
  title: string;
  description?: string;
  image?: string;
  author: string;
  publishedAt: string;
  genre: string;
};
