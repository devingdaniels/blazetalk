import * as dotenv from 'dotenv';
dotenv.config();

export const envs = {
  PORT: process.env.PORT || 8500,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce',
  JWT_SECRET: process.env.JWT_SECRET,
};
