import { IReview, Inputs } from "../../../types/globalTypes";
import api from "../../api/apiSlice";

type IGetAllBookParams = {
  author?: string;
  searchTerm?: string;
  genre?: string;
  title?: string;
  publishedAt?: string;
};

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRecentBook: builder.query({
      query: () => ({
        url: `/books`,
      }),
    }),
    getSingleBook: builder.query({
      query: (id: string) => ({
        url: `/books/${id}`,
      }),
    }),
    getAllBooks: builder.query({
      query: (params: IGetAllBookParams) => {
        let queryString = `/books`;
        let added = false;

        if (params.searchTerm) {
          queryString += `?searchTerm=${params.searchTerm}`;
          added = true;
        }
        if (params.publishedAt && added === true) {
          queryString += `&publishedAt${params.publishedAt}`;
        } else if (params.publishedAt && added === false) {
          queryString += `?publishedAt=${params.publishedAt}`;
          added = true;
        }
        if (params.title && added === true) {
          queryString += `&title${params.title}`;
        } else if (params.title && added === false) {
          queryString += `?title${params.title}`;
          added = true;
        }
        if (params.author && added === true) {
          queryString += `&author${params.author}`;
        } else if (params.title && added === false) {
          queryString += `?author${params.author}`;
          added = true;
        }
        if (params.genre && added === true) {
          queryString += `&genre${params.genre}`;
        } else if (params.title && added === false) {
          queryString += `?author${params.genre}`;
          added = true;
        }
        return queryString;
      },
    }),
    createBook: builder.mutation({
      query: (book: Inputs) => ({
        url: `/books/add-book/${book}`,
        method: "POST",
        body: book,
      }),
    }),
    editBook: builder.mutation({
      query: ({ id, ...body }: { id: string; body: Inputs }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: body,
      }),
    }),
    deleteBook: builder.mutation({
      query: ({ id }: { id: string }) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
    addReview: builder.mutation({
      query: ({ id, review }: { id: string; review: IReview }) => ({
        url: `/books/addReview/${id}`,
        method: "POST",
        body: review,
      }),
    }),
  }),
});
export const {
  useGetRecentBookQuery,
  useGetSingleBookQuery,
  useGetAllBooksQuery,
  useCreateBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
  useAddReviewMutation,
} = bookApi;
