import styles from "./BaseTemplate.module.css";

export type Props = {
    sampleTextProps: string;
};

const BaseTemplate: React.FC<Props> = ({ sampleTextProps }) => {
    return <div className={styles.container}>{sampleTextProps}</div>;
};

export default BaseTemplate;
