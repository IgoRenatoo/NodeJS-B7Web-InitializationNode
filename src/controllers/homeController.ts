import { displayItem } from './../models/product';
import { Request , Response } from "express";

export const home = (req: Request, res: Response) => {
  let produtos = displayItem.getAll();
  res.render('./pages/home', {
    produtos    
  });
};