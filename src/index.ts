// import jwt from "jsonwebtoken";
// import "dotenv/config";
// import {jwtsecretKey} from "../environment";
// // const payload: jwt.JwtPayload = {
// //   iss: "https://purpleshorts.co.in",
// //   sub: "sharadamanikn",
// // };

// // const jwtsecretKey = process.env.JWT_SECRET_KEY || process.exit(1);
// console.log("Secret Key", jwtsecretKey);


// // const secretKey = "HELLLLO";
// // const token = jwt.sign(payload, secretKey, {
// //   algorithm: "HS256",
// //   expiresIn: "7d",
// // });
// // console.log(token);
// // try {
// // const decoded = jwt.verify(token, secretKey);
// // console.log("Decoded Payload", decoded);
// // }
// // catch(e){
// //   console.log("Error",e);
// // }


import "dotenv/config";
import { allRoutes } from "./routes/routes";
import { serve } from "@hono/node-server";

serve(allRoutes, (info) => {
  console.log(`Server is running on port ${info.port}`);
});