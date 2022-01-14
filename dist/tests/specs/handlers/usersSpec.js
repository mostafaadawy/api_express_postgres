"use strict";
// import supertest from "supertest"
// import {UStore, U } from "../../../models/user"
// import {crud} from "../../../helpers/traites"
// import app from "../../../server"
// let keyToken = ""
// const Store = new UStore()
// const req = supertest(app)
// describe("Testing Users' APIs Endpoints", () => {
//   beforeAll(async () => {
//     await Store.create({id:0,firstName: "firstname",lastName: "lastname",hashedPassword: "pass"})
//    })
//    afterAll(async () => {
//      await crud("DELETE FROM users;\nALTER SEQUENCE users_id_seq RESTART WITH 1;",[],"test")
//    })
//   describe("Auth EndPoint", () => {
//     it("get token for right credinatials", async () => {
//       const res = await req.post("/login").set("Content-type", "application/json")
//       .send({firstname: "firstname", lastname: "lastname", password: "pass"})
//       expect(res.status).toBe(200)
//       const {token} = res.body.data
//       keyToken =token
//       expect(token.length).toBeGreaterThan(0)
//     })
//     it("get nothing for wrong credinatials", async () => {
//       const res = await req.post("/login").set("Content-type", "application/json")
//       .send({firstname: "firstname", lastname: "lastname", password: "fake"})
//       expect(res.status).toBe(200)
//       const {token} = res.body.data
//       expect(token).toBe(null)
//     })
//     it("create user", async () => {
//       const res = await req.post("/users").set("Content-type", "application/json")
//         .set("Authorization", `Bearer ${keyToken}`)
//         .send({ firstname: "ufname", lastname: "ulname", password: "test" } as unknown as U)
//       expect(res.status).toBe(200)
//     })
//     it("get all users", async () => {
//       const res = await req.get("/users").set("Content-type", "application/json")
//         .set("Authorization", `Bearer ${keyToken}`)
//       expect(res.status).toBe(200)
//       expect(res.body.data.length).toBe(2)
//     })
//     it("get certain user from its id", async () => {
//       const res = await req.get(`/users/1`).set("Content-type", "application/json")
//         .set("Authorization", `Bearer ${keyToken}`)
//       expect(res.status).toBe(200)
//       expect(res.body.data.firstname).toBe("firstname")
//     })
//     it("update user info endpoint", async () => {
//       const res = await req.patch(`/api/users/2`).set("Content-type", "application/json")
//         .set("Authorization", `Bearer ${keyToken}`)
//         .send({firstname: "mostafa",lastname: "sayed", password: "test"})
//       expect(res.status).toBe(200)
//       expect(res.body.data.firstname).toBe("mostafa")
//     })
//     it("delete user api", async () => {
//       const res = await req.delete(`/api/users/2`).set("Content-type", "application/json")
//         .set("Authorization", `Bearer ${keyToken}`)
//       expect(res.status).toBe(200)
//       expect(res.body.data.firstname).toBe("mostafa")
//     })
//   })
// })
