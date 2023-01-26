import Head from "next/head";
import Header from "../Header";

export type Props = {
    children: React.ReactNode;
};

const PrimaryLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>YouTube Mock</title>
            </Head>
            <div className="min-h-screen flex flex-col items-center">
                {/* Header */}
                <Header />
                <main>{children}</main>
                <div className="m-auto" />
                {/* Footer */}
            </div>
        </>
    );
};

export default PrimaryLayout;
