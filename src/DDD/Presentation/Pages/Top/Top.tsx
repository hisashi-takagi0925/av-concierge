import styles from "./Top.module.scss";
import { Image, Text, Group } from "@mantine/core";
import ImagePicker from "../../Components/Parts/ImagePicker/ImagePicker";

const imagePicker = (
  <div className={styles.imagePicker}>
    <ImagePicker />
  </div>
);

const Top = () => <div className={styles.container}>{imagePicker}</div>;

export default Top;
