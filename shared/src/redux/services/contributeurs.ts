import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Contributor } from '../../types/authorities/contributors'

export const CONTRIBUTEURS = (
  VITE_REF_API: string,
  VITE_REF_API_VERSION: string
) => {
  console.log(VITE_REF_API, VITE_REF_API_VERSION)
  return createApi({
    reducerPath: 'contributeurs',
    baseQuery: fetchBaseQuery({
      baseUrl: `${VITE_REF_API}${VITE_REF_API_VERSION}`,
    }),
    keepUnusedDataFor: 300,

    endpoints: (builder) => ({
      getContributorData: builder.query<Contributor, string>({
        // uuid || AUT_ID

        query: (id) => {
          console.log(id)
          return {
            url: `/btlf_aut_json?id=${id}`,
          }
        },

        transformResponse: (response: {
          response: Contributor
          status: number
        }): Contributor => {
          return response?.response
        },
      }),
    }),
  })
}

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetContributorData } = CONTRIBUTEURS
