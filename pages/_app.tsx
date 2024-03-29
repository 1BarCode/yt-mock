import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchProvider from "../lib/context/SearchProvider";
import "../styles/globals.css";
config.autoAddCss = false;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (_page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

// const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//                useErrorBoundary: true,
//             // suspense: true,
//         },
//     },
// });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const [queryClient] = useState(() => new QueryClient());

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <QueryClientProvider client={queryClient}>
            <SearchProvider>
                {getLayout(<Component {...pageProps} />)}
            </SearchProvider>
        </QueryClientProvider>
    );
}
