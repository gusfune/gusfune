import { BlitzApiRequest, BlitzApiResponse } from "blitz"

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req: BlitzApiRequest, res: BlitzApiResponse) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify("OK"))
}
