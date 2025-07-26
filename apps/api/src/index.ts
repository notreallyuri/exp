import cookies from "@fastify/cookie";
import cors from "@fastify/cors";
import { fastify } from "fastify";

const app = fastify();

app.register(cors);
app.register(cookies);
