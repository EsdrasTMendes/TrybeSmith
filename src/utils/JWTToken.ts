import { SignOptions, sign } from 'jsonwebtoken';
import IUser from '../interfaces/user.interface';

const SECRET = 'OSegredoMaisSecretoDoMundo';

const jwtConfig: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateJWTToken = (user: Omit<IUser, 'password'>) => sign(user, SECRET, jwtConfig);

export default { generateJWTToken };
