import { ReactElement } from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import { NextPageWithLayout } from "./_app";

const SignIn: NextPageWithLayout = () => {
    return (
        <section>
            <div className="w-[448px] h-[500px] border-[1px] border-gray-300 rounded-lg flex flex-col items-center">
                <div className="pt-12 px-10 pb-9 w-full">
                    <div className="text-center">
                        <div>Google</div>
                        <h1 className="pt-4">
                            <span className="font-normal text-2xl">
                                Choose an account
                            </span>
                        </h1>
                    </div>
                    <ul className="w-full pt-6">
                        {/* Each Account */}
                        <li className="hover:bg-purple-50 hover:cursor-pointer ">
                            <div className="py-3 flex border-b-[1px] border-gray-300 items-center">
                                <div className="flex justify-center items-center rounded-full bg-blue-400 text-white w-7 h-7">
                                    <span>J</span>
                                </div>
                                <div className="flex flex-col ml-2">
                                    <span className="text-sm font-medium">
                                        John Wick
                                    </span>
                                    <span className="text-xs">
                                        johnwick@gmail.com
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

SignIn.getLayout = function getLayout(page: ReactElement) {
    return <AuthLayout>{page}</AuthLayout>;
};

export default SignIn;
