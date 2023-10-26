import React from "react"
import { useRouter } from "next/router"

const Challenge = () => {
  const router = useRouter()
  const slug = router.query.challengeTitle

  return <h1>This is the challenge {slug}</h1>
}

export default Challenge
