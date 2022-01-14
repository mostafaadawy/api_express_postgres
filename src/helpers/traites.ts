//@ts-ignore
import CLI from "../database"
import bcrypt from "bcrypt"
import { sign } from "jsonwebtoken"

const pepper_addational_key = process.env.PEPPER_KEY
const salt_No_rounds = process.env.SALT_ROUNDS_COUNT
export const crud = async (query_statement: string, data: any, errMsg: string) => {
  try {
    //@ts-ignore
    const dbConnIni = await CLI.connect()
    let result
    if (!data || data.length > 0) {
      result = await dbConnIni.query(query_statement, data)
    } else {
      result = await dbConnIni.query(query_statement)
    }
    dbConnIni.release()
    return result.rows
  } catch (e) {
    throw new Error(`${errMsg}, ${e}`)
  }
}
export const hashingKey = (password: string) => {
  return bcrypt.hashSync(password + pepper_addational_key, parseInt(String(salt_No_rounds)))
}
export const isSameKey = (password: string, password_digest: string): boolean => {
  return bcrypt.compareSync(password + pepper_addational_key, password_digest)
}
export const generateToken = (id: Number, firstname: string, lastname: String) => {
  return sign({ user: { id, firstname, lastname } }, process.env.JWT_SECRET_KEY as string)
}
