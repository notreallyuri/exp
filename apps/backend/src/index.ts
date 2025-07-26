import { fastify } from "fastify";
import cors from "@fastify/cors";
import cookies from "@fastify/cookie";

const app = fastify();

app.register(cors);
app.register(cookies);