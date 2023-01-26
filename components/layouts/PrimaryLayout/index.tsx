import Head from "next/head";

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

                <main>{children}</main>
                <div className="m-auto" />
                {/* Footer */}
            </div>
        </>
    );
};

export default PrimaryLayout;
