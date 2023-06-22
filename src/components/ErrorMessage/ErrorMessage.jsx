import styles from "./ErrorMessage.module.scss";

export default function ErrorMessage() {
  return (
    <div className={styles.contentWrapper}>
      <p className={styles.message}>Something went wrong. Please try again later</p>
    </div>
  );
}
