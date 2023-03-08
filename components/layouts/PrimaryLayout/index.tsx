import classNames from "classnames";
import Head from "next/head";
import Drawer from "../Drawer";
import Header from "../Header";

export type Props = {
    children: React.ReactNode;
    drawer: boolean;
    backgroundColor?: string;
};

const PrimaryLayout: React.FC<Props> = ({
    children,
    drawer,
    backgroundColor = "",
}) => {
    // const headerHeight = "56px";

    const mainClassNames = classNames({
        // [`min-h-[calc(100vh-${headerHeight}))] flex flex-col w-full`]: true,
        [`min-h-screen flex flex-col w-full`]: true,
        [backgroundColor]: backgroundColor,
    });

    return (
        <>
            <Head>
                <title>YouTube Mock</title>
            </Head>
            <div className="bg-black-900 text-white">
                <Header />
                <div className="flex">
                    {drawer && <Drawer />}

                    <main className={mainClassNames}>{children}</main>
                </div>
                {/* <div className="m-auto" /> */}
                {/* Footer */}
            </div>
        </>
    );
};

export default PrimaryLayout;
