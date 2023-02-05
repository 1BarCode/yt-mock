import { VideoLibraryOutlined } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import RestoreRoundedIcon from "@mui/icons-material/RestoreRounded";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
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
                    {/* Sidebar */}
                    <div className={`w-[75px] px-1 h-[calc(100vh-56px)]`}>
                        {/* Container */}
                        <div className="mt-3 w-full my-3 flex flex-col items-center">
                            {/* Individual Link */}
                            <Link
                                href={"/"}
                                className="w-full h-[74px] flex justify-center items-center hover:bg-black-300 hover:rounded-lg"
                            >
                                <div className="flex flex-col items-center">
                                    <HomeIcon />
                                    <span className="text-xs font-light mt-2">
                                        Home
                                    </span>
                                </div>
                            </Link>
                            <Link
                                href={"/"}
                                className="w-full h-[74px] flex justify-center items-center hover:bg-black-300 hover:rounded-lg"
                            >
                                <div className="flex flex-col items-center">
                                    <SubscriptionsOutlinedIcon />
                                    <span className="text-xs font-extralight mt-2">
                                        Subscription
                                    </span>
                                </div>
                            </Link>
                            <Link
                                href={"/"}
                                className="w-full h-[74px] flex justify-center items-center hover:bg-black-300 hover:rounded-lg"
                            >
                                <div className="flex flex-col items-center">
                                    <VideoLibraryOutlined />
                                    <span className="text-xs font-light mt-2">
                                        Library
                                    </span>
                                </div>
                            </Link>
                            <Link
                                href={"/"}
                                className="w-full h-[74px] flex justify-center items-center hover:bg-black-300 hover:rounded-lg"
                            >
                                <div className="flex flex-col items-center">
                                    <RestoreRoundedIcon />
                                    <span className="text-xs font-light mt-2">
                                        History
                                    </span>
                                </div>
                            </Link>
                        </div>
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
