import styles from "./Input.module.css";

export default function Input({ placeholder }) {
  return (
    <label className={styles.inputContainer}>
      {placeholder}:&nbsp;
      <input type="text" />
    </label>
  );
}
