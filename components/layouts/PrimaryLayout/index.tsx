import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import { useWindowSize } from "usehooks-ts";
import Header from "../Header";

export type Props = {
    children: React.ReactNode;
};

const PrimaryLayout: React.FC<Props> = ({ children }) => {
    // const { isServer } = useSsr();
    // const useIsMounted()
    const { height } = useWindowSize();

    const leftSideBarHeight = `${height - 56}px`;

    // console.log(height);
    // console.log("leftSideBarHeight", leftSideBarHeight);
    // h-[${leftSideBarHeight}]

    // if (isServer) return null;

    return (
        <>
            <Head>
                <title>YouTube Mock</title>
            </Head>
            <div className="bg-black-900 text-white">
                {/* Header */}
                <Header />
                <div className="flex">
                    <div
                        className={`w-16 h-[${leftSideBarHeight}] border-2 border-white flex flex-col`}
                        style={{ height: `${leftSideBarHeight}` }}
                    >
                        <Link href={"/"}>
                            {" "}
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                        <Link href={"/"}>
                            {" "}
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                        <Link href={"/"}>
                            {" "}
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                        <Link href={"/"}>
                            {" "}
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                    </div>
                    <main className="min-h-screen flex flex-col">
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
