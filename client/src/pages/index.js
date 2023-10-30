import { Inter } from "next/font/google"
import styles from "../styles/HomePage.module.css"
import { capitalizeWords, spacesToCamelCase } from "../../utils/unslugify"

const inter = Inter({ subsets: ["latin"] })

export default function Home({ challenges }) {
  return (
    <>
      <main>
        <section className={styles.challengeCont}>
          {challenges.map((challenge) => {
            const string = `${challenge.title}`
            const capitalString = capitalizeWords(string)
            const link = spacesToCamelCase(capitalString)
            return (
              <a
                key={challenge.id}
                className={styles.linkText}
                href={`http://localhost:3000/${link}`}
              >
                <article className={styles.challenge}>
                  <h3 className={styles.linkText}>{challenge.title}</h3>
                </article>
              </a>
            )
          })}
        </section>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/challenges")
  const data = await response.json()
  return {
    props: {
      challenges: data,
    },
  }
}
