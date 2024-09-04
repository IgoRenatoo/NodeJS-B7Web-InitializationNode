import { Response , Request } from "express";

export const mainAbout = ( req : Request , res : Response ) => {
  res.render('pages/about')
};