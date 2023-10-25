import { challenges } from "data/challenges"

export default function handler(req, res) {
  res.status(200).json(challenges)
}
