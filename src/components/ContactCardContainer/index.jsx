import styles from "./ContactCardContainer.module.css";
import ContactCard from "../ContactCard";

export default function ContactCardContainer() {
  return (
    <div className={styles.cardContainer}>
      <ContactCard name="Jett" city="Ascent" />
      <ContactCard name="Brimstone" city="Bind" />
      <ContactCard name="Chamber" city="Corrode" />
      <ContactCard name="Deadlock" city="Haven" />
      <ContactCard name="Reyna" city="Icebox" />
    </div>
  );
}
