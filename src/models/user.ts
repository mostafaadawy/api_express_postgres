import { crud } from "../helpers/traites"
import { isSameKey } from "../helpers/traites"
export type U = {
  id: number
  firstName: string
  lastName: string
  hashedPassword: string
}
export class UStore {
  async index(): Promise<U[]|null> {
    return (await crud("SELECT id, firstName, lastName FROM users", [], "cant find")) as U[]
  }
  async show(id: number): Promise<U|null> {
    const r = (await crud("SELECT id, firstName, lastName FROM users WHERE id=($1)", [id], "cant show")) as U[]
    if (r[0] === undefined) return null
    return r[0]
  }
  async create(u: U): Promise<U|null> {
    const r = (await crud(
      "INSERT INTO users (firstName, lastName, hashedPassword) VALUES($1, $2, $3) RETURNING id, firstName, lastName",
      [u.firstName, u.lastName, u.hashedPassword],
      "cant create"
    )) as U[]
    if (r[0] === undefined) return null
    return r[0]
  }
  async update(u: U): Promise<U|null> {
    const r = (await crud(
      "UPDATE users SET firstName=($2), lastName=($3), hashedPassword=($4) WHERE id=($1) RETURNING id, firstName, lastName",
      [u.id, u.firstName, u.lastName, u.hashedPassword],
      "cant update"
    )) as U[]
    if (r[0] === undefined) return null
    return r[0]
  }
  async delete(id: number): Promise<U|null>{
    const r = (await crud("DELETE FROM users WHERE id=($1) RETURNING *", [id], "cant delete")) as U[]
    if (r[0] === undefined) return null
    return r[0]
  }
  async authen(firstname: string, lastname: string, password: string): Promise<U | null> {
    const r = (await crud(
      "SELECT * FROM users WHERE firstName=($1) AND lastName=($2)",
      [firstname, lastname],
      "cant authenticate"
    )) as U[]
    if (r[0] === undefined) return null
    const objectResult = Object.assign(r[0])
    if (isSameKey(password, objectResult.hashedpassword)) return objectResult
    return null
  }
}
