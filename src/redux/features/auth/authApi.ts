import { IUserApiData } from "../../../types/globalTypes";
import api from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<IUserApiData, IUserApiData>({
      query: (user) => ({
        url: `/auth/signup`,
        method: "POST",
        body: user,
      }),
    }),

    loginUser: builder.mutation<
      IUserApiData,
      { email: string; password: string }
    >({
      query: ({ email, password }) => ({
        url: `/auth/login`,
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = authApi;
