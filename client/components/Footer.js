import styles from "../src/styles/Footer.module.css"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContent}>
        <article className={styles.published}>
          <p>
            <span>©{year} </span>Bob Merullo
          </p>
        </article>
      </section>
    </footer>
  )
}

export default Footer
