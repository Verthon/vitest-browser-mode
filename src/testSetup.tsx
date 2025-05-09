import { act, PropsWithChildren } from "react";
import {
	QueryClient,
	QueryClientProvider,
	QueryClientConfig,
} from "@tanstack/react-query";
import { router } from "./bootstrap";

export const createTestWrapper =
	({ queryConfig }: { queryConfig?: QueryClientConfig } = {}) =>
	({ children }: PropsWithChildren<{}>) => {
		const client = new QueryClient({
			defaultOptions: { queries: { retry: false } },
			...queryConfig,
		});
		return (
			<QueryClientProvider client={client}>{children}</QueryClientProvider>
		);
	};

export const createTestRouterHelper = () => {
  return {
    router,
    navigateTo: async (path: string, params: Record<string, any> = {}) => {
      await act(async () => {
        await router.navigate({ to: path, ...params });
      });
    }
  };
};