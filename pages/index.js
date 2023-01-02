import { Button, DatePicker } from "antd";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <Button
        type="primary"
      >
        PRESS ME
      </Button>
      <DatePicker placeholder="select date" />
    </>
  );
}
