import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
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
            <div className="bg-black-900 text-white">
                {/* Header */}
                <Header />
                <div className="flex">
                    <div
                        className={`w-16 h-[calc(100vh-56px)] border-2 border-white flex flex-col`}
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
                    <main className="min-h-[calc(100vh-56px)] flex flex-col">
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
