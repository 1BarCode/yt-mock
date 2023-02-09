import Head from "next/head";
import Drawer from "../Drawer";
import Header from "../Header";

export type Props = {
    children: React.ReactNode;
};

const PrimaryLayout: React.FC<Props> = ({ children }) => {
    const headerHeight = "56px";

    return (
        <>
            <Head>
                <title>YouTube Mock</title>
            </Head>
            <div className="bg-black-900 text-white">
                {/* Header */}
                <Header />
                <div className="flex">
                    {/* Sidebar */}
                    <Drawer />

                    <main
                        className={`min-h-[calc(100vh-${headerHeight}))] flex flex-col`}
                    >
                        {children}
                    </main>
                </div>
                {/* <div className="m-auto" /> */}
                {/* Footer */}
            </div>
        </>
    );
};

export default PrimaryLayout;
