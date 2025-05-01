import { JSX, PropsWithChildren } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  QueryClientConfig,
} from '@tanstack/react-query'

export type WrapperProps = {
  queryConfig?: QueryClientConfig
}

export const withQueryClient =
  ({ queryConfig }: WrapperProps = {}) =>
  // ✅ wrapper signature that testing-library expects
  ({ children }: PropsWithChildren<{}>): JSX.Element => {
    const client = new QueryClient({
      defaultOptions: { queries: { retry: false } },
      ...queryConfig,
    })
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
  }

/** Full providers.  Currently just query-client, but extendable. */
export const withProviders = (opts?: WrapperProps) => withQueryClient(opts)