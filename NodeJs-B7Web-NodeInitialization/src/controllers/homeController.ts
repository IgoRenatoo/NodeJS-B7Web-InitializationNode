import { displayItem } from './../models/product';
import { Request , Response } from "express";
import { sequelize } from './../instances/mysql';

export const mainHome = async (req: Request, res: Response) => {
  try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso!')
  } catch (error) {
    console.log(`Houve um error: ${error}`)
  }
  let produtos = displayItem.getAll();
  res.render('./pages/home', {
    produtos    
  });
};