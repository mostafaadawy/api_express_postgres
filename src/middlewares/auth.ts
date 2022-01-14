import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

const authToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization
    if (authHeader === undefined) next(res.status(404).json("Token is Needed"))
    const bearer = authHeader?.split(" ")[0].toLowerCase()
    if (bearer !== "bearer") next(res.status(404).json("Defferent Token Type!"))
    const token = authHeader?.split(" ")[1]
    if (token === undefined) next(res.status(404).json("Authentication Token Needed!"))
    const decoded = verify(token as string, process.env.JWT_SECRET_KEY as string)
    if (!decoded) next(res.status(404).json("Authentication Failed!"))
    next()
  } catch (err) {
    next(res.status(404).json("Something Wrong in Authentication!"))
  }
}

export default authToken
