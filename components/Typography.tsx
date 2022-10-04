import { FunctionComponent } from "react";
import styles from './Typography.module.css'

interface Props {
    text: string;
}

export const Typography: FunctionComponent<Props> = ({text}) => (
    <span className={styles.typography}>{text}</span>
);
