import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import URoutes from "./handlers/user"
import logger from "./middlewares/logger"
const app: express.Application = express()
const address: string = "localhost:3000"

app.use(bodyParser.json())
app.use(express.json())
app.use(logger)
app.get("/", function (req: Request, res: Response) {
  res.send("Welcome to the second project !")
})
URoutes(app)
app.listen(3000, function () {
  console.log(`starting app on: ${address}`)
})
export default app