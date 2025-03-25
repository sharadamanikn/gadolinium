/* import { Hono } from "hono";
import {
  LogInWtihUsernameAndPasswordError,
  SignUpWithUsernameAndPasswordError,
} from "../controllers/authentication/authentication-types";
import { auth } from "hono/utils/basic-auth";
import { authenticationRoutes } from "./authentication-routes";
import { userRoutes } from "./users-routes";



export const allRoutes = new Hono();
import { prismaClient } from "../extras/prisma";
import jwt from "jsonwebtoken";
import { jwtSecretKey } from "../../environment";






allRoutes.use(async (context, next) => {
console.log("HTTP Method ", context.req.method);
console.log("URL ", context.req.url);
console.log("Headers ", context.req.header());

await next()
});

allRoutes.route("/authentication", authenticationRoutes);
allRoutes.route("/users", userRoutes);



allRoutes.get("/health", 
   //Inline middleware
//    async(context, next) => {
//     console.log("Health Check Middleware");
//      await next();
//   },
  async (c) => {
  console.log("Health checked"); 
   return c.json({ status: " ALLLL ok" });
});

*/


import { Hono } from "hono";
import { authenticationRoutes } from "./authentication-routes";
import { usersRoutes } from "./users-routes";
import { logger } from "hono/logger";

export const allRoutes = new Hono();

allRoutes.use(logger());

allRoutes.route("/authentication", authenticationRoutes);
allRoutes.route("/users", usersRoutes);

allRoutes.get("/health", (context) => {
  return context.json(
    {
      message: "All Ok",
    },
    200
  );
});

