import request from "supertest";
import app from "../app.js";

describe("POST /api/auth/login", () => {
  it("retourne 200 et un JSON avec user + token si login OK", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "bob@gmail.com", password: "bob456" });

    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/);

    // adapte selon ta réponse réelle
    expect(res.body).toHaveProperty("token");
    expect(res.body).toHaveProperty("user");
    expect(res.body.user).toHaveProperty("name");
  });

  it("retourne 401 si mauvais identifiants", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "bob@gmail.com", password: "wrong" });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("message");
  });
});
