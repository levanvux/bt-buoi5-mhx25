import styles from "./ContactCard.module.css";

export default function ContactCard({ name, city }) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>{city}</p>
      <button>Edit</button>
    </div>
  );
}
