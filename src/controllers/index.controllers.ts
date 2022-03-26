import { NextFunction, Request, Response } from "express";

export default class IndexController{
  public static Index = (req: Request, res: Response, next: NextFunction) => {
    res.render('layouts/layout.ejs')
  }
}