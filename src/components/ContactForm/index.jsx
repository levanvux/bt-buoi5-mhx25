import styles from "./ContactForm.module.css";
import Input from "../Input";

export default function ContactForm() {
  return (
    <div className={styles.form}>
      <Input placeholder="Name" />
      <Input placeholder="City" />
      <button type="submit">Add contact</button>
    </div>
  );
}
