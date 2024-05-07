import { Request, Response } from "express";

export const mainContact = (req: Request, res: Response) => {
  let name: string = "";
  if (req.body.name){
    name = req.body.name as string;
  }
  res.render('./pages/contact',{
    name
  });
};
