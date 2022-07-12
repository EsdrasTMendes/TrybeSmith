import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const ProductsValidations = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const middlewareProducts = (req: Request, res: Response, next: NextFunction) => {
  const { error } = ProductsValidations.validate(req.body);
  if (error?.message.includes('must')) {
    return res.status(422).json({ message: error.details[0].message });
  }
  if (error?.message.includes('required')) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export default {
  middlewareProducts,
};