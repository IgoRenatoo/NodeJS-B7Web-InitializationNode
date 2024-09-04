import { RequestHandler } from "express";

const notFoundRequest : RequestHandler = ( req , res ) => {
  res.status(404).render('pages/error');
}

export default notFoundRequest;