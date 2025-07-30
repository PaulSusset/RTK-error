import { CONTRIBUTEURS as sharedCONTRIBUTEURSSource } from '@redux/services/contributeurs'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const sharedCONTRIBUTEURS = sharedCONTRIBUTEURSSource(
  import.meta.env.VITE_API,
  import.meta.env.VITE_API_VERSION
)

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

export const { useGetContributorDataQuery } = {
  ...sharedCONTRIBUTEURS,
  ...CONTRIBUTEURS,
}
