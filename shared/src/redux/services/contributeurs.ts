import {
  Api,
  createApi,
  EndpointBuilder,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { Contributor } from '../../types/authorities/contributors'

export const injectableEndpoints = {
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    getContributorData: builder.query<Contributor, string>({
      // uuid || AUT_ID

      query: (id) => {
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
}
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetContributorData } = CONTRIBUTEURS
