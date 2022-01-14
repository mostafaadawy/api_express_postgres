import {UStore, U } from "../../../models/user"
import {crud} from "../../../helpers/traites"

const Store = new UStore()

describe("Testing User Model", () => {
  describe("Are all of Methods Defined", () => {
    it("Is Authentication endpoint function defined", () => {
      expect(Store.authen).toBeDefined()
    })
    it("Is Getting all records endpoint function defined", () => {
      expect(Store.index).toBeDefined()
    })
    it("Is Create endpoint function defined", () => {
      expect(Store.create).toBeDefined()
    })
    it("Is Show endpoint function defined", () => {
      expect(Store.show).toBeDefined()
    })
    it("Is Update endpoint function defined", () => {
      expect(Store.update).toBeDefined()
    })
    it("Is Delete endpoint function defined", () => {
      expect(Store.delete).toBeDefined()
    })
  })
  describe("Test All user Model DB APIs", () => {
    beforeAll(async () => {
     await crud("INSERT INTO users (firstName, lastName, hashedPassword) VALUES('firstname','lastname','pass')",[],"cant")
    })
    afterAll(async () => {
      await crud("DELETE FROM users;\nALTER SEQUENCE users_id_seq RESTART WITH 1;",[],"test")
    })
    it("Authenticate method should return the authenticated user", async () => {
      const temp=(await Store.authen('firstname', 'lastname', 'pass')) as unknown as U[]
      const objectResult = Object.assign(temp[0])
      expect(objectResult.firstname).toBe("firstname")
    })
    it("Authenticate method should return null for wrong credentials", async () => {
      expect(await Store.authen("fake","fake","fake")).toBe(null)
    })
    it("Update method should return new user info", async () => {
      const temp=(await Store.update({id:1,firstName:"fname",lastName:"lname",hashedPassword:"test"})) as unknown as U[]
      const objectResult = Object.assign(temp[0])
      expect(objectResult.firstname).toBe("fname")
    })
    it("Update method should return null for wrong entry", async () => {
      expect(await Store.update({id:50,firstName:"fname",lastName:"lname",hashedPassword:"test"})).toBe(null)
    })
    it("Show method should return user info", async () => {
      const temp=(await Store.show(1)) as unknown as U[]
      const objectResult = Object.assign(temp[0])
      expect(objectResult.firstname).toBe("fname")
    })
    it("Show method should return null for wrong entry", async () => {
      expect(await Store.show(50)).toBe(null)
    })
    it("Update method should return new user info", async () => {
      const temp=(await Store.delete(1)) as unknown as U[]
      const objectResult = Object.assign(temp[0])
      expect(objectResult.firstname).toBe("fname")
    })
    it("Update method should return null for wrong entry", async () => {
      expect(await Store.delete(50)).toBe(null)
    })
  })
})
