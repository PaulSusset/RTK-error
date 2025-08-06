import { injectableEndpoints } from '@redux/services/contributeurs'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const CONTRIBUTEURS = createApi({
  reducerPath: 'contributeurs',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API}${import.meta.env.VITE_API_VERSION}`,
  }),
  keepUnusedDataFor: 300,

  endpoints: (builder) => ({
    /* More app-specific endpoints */
  }),
})

const CONTRIBUTEURSwithShared = CONTRIBUTEURS.injectEndpoints({
  endpoints: injectableEndpoints.endpoints,
})

export const { useGetContributorDataQuery } = CONTRIBUTEURSwithShared
