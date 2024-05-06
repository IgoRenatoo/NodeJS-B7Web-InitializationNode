import { Request , Response } from "express";
import { displayItem } from '../models/product';


export const home = (req: Request, res: Response) => {
  let produtos = displayItem.getAll();
  res.render('./pages/home', {
    produtos
    
  });
};