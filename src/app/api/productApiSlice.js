import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/api/product`,
      transformResponse: (res) => res.data,
      providesTags: ["Product"],
    }),
    getProductById: builder.query({
      query: (id) => `/api/product/${id}`,
      transformResponse: (res) => res.data,
      providesTags: ["Product"],
    }),
    postProduct: builder.mutation({
      query: (body) => ({ url: `/api/product`, method: "POST", body }),
      invalidatesTags: (result, err, arg) => [{ type: "Product", id: arg.id }],
    }),
    updateProduct: builder.mutation({
      query: (body) => ({ url: `/api/product/${body?.id}`, method: "PATCH", body }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({ url: `/api/product/${id}`, method: "DELETE" }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  usePostProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApiSlice;
