import styles from "./BaseTemplate.module.css";

export type Props = {
    sampleTextProps: string;
};

const BaseTemplate = ({ sampleTextProps }: Props) => {
    return <div className={styles.container}>{sampleTextProps}</div>;
};

export default BaseTemplate;
