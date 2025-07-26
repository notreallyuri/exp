import type { FastifyInstance } from "fastify";
import { z } from "zod";

async function userRoutes(app: FastifyInstance) {
  app.get("/users", async (request, reply) => {});

  app.post(
    "/users",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            email: { type: "string", format: "email" },
          },
        },
      },
    },
    async (request, reply) => {
      try {
      } catch (err) {
        if (err instanceof z.ZodError) {
          reply
            .status(400)
            .send({ error: "Invalid input", details: err.message });
        } else {
          reply.status(500).send({ error: "Internal server error" });
        }
      }
    }
  );

  app.get("/users/:id", async (request, reply) => {});

  app.put("/users/:id", async (request, reply) => {});

  app.delete("/users/:id", async (request, reply) => {});
}
