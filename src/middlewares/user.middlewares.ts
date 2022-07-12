import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const UsersValidations = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const middlewareUsers = (req: Request, res: Response, next: NextFunction) => {
  const { error } = UsersValidations.validate(req.body);
  if (error?.message.includes('length')) {
    return res.status(422).json({ message: error.details[0].message });
  }
  if (error?.message.includes('must')) {
    return res.status(422).json({ message: error.details[0].message });
  }
  if (error?.message.includes('required')) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export default { middlewareUsers };
