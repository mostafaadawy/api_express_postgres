import { Request, Response, Application } from "express"
import { U, UStore } from "../models/user"
import { hashingKey, generateToken } from "../helpers/traites"
import authToken from "../middlewares/auth"
const modelInst = new UStore()

const index = async (req: Request, res: Response) => {
  try {
    const Us = await modelInst.index()
    res.json(Us)
  } catch (e) {
    res.status(500).json("server error")
  }
}
const show = async (req: Request, res: Response) => {
  try {
    const user_id = parseInt(req.params.id)
    if (!user_id) return res.send("Wrong or Missed User id").status(400)
    const u = await modelInst.show(parseInt(req.params.id))
    res.json(u)
  } catch (e) {
    res.status(500).json("server error")
  }
}

const create = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, password } = req.body
    if (!firstname || !lastname || !password) return res.send("Wrong or Missed parameters").status(400)
    const r = await modelInst.create({
      id: 0,
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      hashedPassword: hashingKey(req.body.password)
    })
    res.json(r)
  } catch (e) {
    console.log(e)
    res.status(500).json("server error")
  }
}
const update = async (req: Request, res: Response) => {
  try {
    const { id, firstname, lastname, password } = req.body
    if (!id || !firstname || !lastname || !password) return res.send("Wrong or Missed parameters").status(400)
    const r = await modelInst.update({
      id: req.body.id,
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      hashedPassword: hashingKey(req.body.password)
    })
    res.json(r)
  } catch (e) {
    res.status(500).json("server error")
  }
}
const destroy = async (req: Request, res: Response) => {
  try {
    const user_id = parseInt(req.body.id)
    if (!user_id) return res.send("Wrong or Missed User id").status(400)
    const r = await modelInst.delete(parseInt(req.body.id))
    res.json(r)
  } catch (e) {
    res.status(500).json("server error")
  }
}
const authen = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, password } = req.body
    if (!firstname || !lastname || !password) return res.send("Wrong or Missed parameters").status(400)
    const r = await modelInst.authen(req.body.firstname, req.body.lastname, req.body.password)
    if (r === null || r === undefined) {
      res.status(401)
      res.json("wrong credintials")
    } else {
      res.json(generateToken(r.id, r.firstName, r.lastName))
    }
  } catch (e) {
    console.error(e)
    res.status(500).json("server error")
  }
}
const URoutes = (app: Application) => {
  app.get("/users", authToken, index)
  app.get("/users/:id", authToken, show)
  app.put("/users", authToken, update)
  app.post("/users", create)
  app.delete("/users", authToken, destroy)
  app.post("/login", authen)
}

export default URoutes
