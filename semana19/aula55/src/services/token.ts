import * as jwt from "jsonwebtoken"
import {PayloadToken} from "../model/PayloadToken";

export function generateToken(
   payload: PayloadToken
): string {
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn: "1h"
      }
   )
}

export function getTokenData(
   token: string
): PayloadToken {
   return jwt.verify(
      token,
      process.env.JWT_KEY as string
   ) as PayloadToken
}