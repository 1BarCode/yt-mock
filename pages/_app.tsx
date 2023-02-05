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
import { useIsMounted } from "usehooks-ts";
import "../styles/globals.css";
config.autoAddCss = false;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    // getLayout?: (page: ReactElement) => ReactNode;
    getLayout?: (_page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

// const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             // suspense: true,
//         },
//     },
// });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const isMounted = useIsMounted();
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        // suspense: true,
                    },
                },
            })
    );

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);

    if (!isMounted) return null;

    return (
        <QueryClientProvider client={queryClient}>
            {getLayout(<Component {...pageProps} />)}
        </QueryClientProvider>
    );
}
