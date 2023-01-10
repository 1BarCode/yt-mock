import Head from "next/head";
import styles from "./PrimaryLayout.module.css";

export type Props = {
    children: React.ReactNode;
};

const PrimaryLayout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>Primary Layout</title>
            </Head>
            <main>{children}</main>
        </>
    );
};

export default PrimaryLayout;
