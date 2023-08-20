import { IBook, IUserApiData } from "../../../types/globalTypes";
import api from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<IUserApiData, IUserApiData>({
      // The query function receives user data and returns the fetch configuration
      query: (user) => ({
        url: "/auth/signup",
        method: "POST",
        body: user,
      }),
    }),
    loginUser: builder.mutation<
      IUserApiData,
      { email: string; password: string }
    >({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: { email, password },
      }),
    }),
    addToWishList: builder.mutation({
      query: ({ id, book }: { id: string; book: IBook }) => ({
        url: `/auth/add-to-wish/${id}`,
        method: "PATCH",
        body: { id, book },
      }),
    }),
    getSingleUser: builder.query({
      query: (id: string) => ({
        url: `/auth/user/${id}`,
      }),
    }),
    getWishList: builder.query({
      query: (id: string) => ({
        url: `/auth/wishList/${id}`,
      }),
    }),
    removeWishList: builder.query({
      query: ({ id, book }: { id: string; book: IBook }) => ({
        url: `/auth/remove-wish/${id}`,
        method: "PATCH",
        body: book,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useAddToWishListMutation,
  useGetSingleUserQuery,
  useGetWishListQuery,
  useRemoveWishListQuery,
} = authApi;
