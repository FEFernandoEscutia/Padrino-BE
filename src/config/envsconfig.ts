import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  DB_PORT: number;
  DB_HOST: string;
  DB_NAME: string;
  DB_PASSWORD: string;
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_API_KEY: number;
  CLOUDINARY_API_SECRET: string;
  JWT_SECRET: string;
  DB_USERNAME: string;
}

const envSchema = joi
  .object({
    DB_PORT: joi.number().required(),
    PORT: joi.number().required(),
    DB_HOST: joi.string().required(),
    DB_NAME: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    CLOUDINARY_CLOUD_NAME: joi.string().required(),
    CLOUDINARY_API_KEY: joi.string().required(),
    CLOUDINARY_API_SECRET: joi.string().required(),
    JWT_SECRET: joi.string().required(),
    DB_USERNAME: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  dbPort: envVars.DB_PORT,
  port: envVars.PORT,
  host: envVars.DB_HOST,
  dbName: envVars.DB_NAME,
  dbPassword: envVars.DB_PASSWORD,
  cloudynaryName: envVars.CLOUDINARY_CLOUD_NAME,
  cloudynaryApiKey: envVars.CLOUDINARY_API_KEY,
  cloudinaryApiSecret: envVars.CLOUDINARY_API_SECRET,
  JwtSecret: envVars.JWT_SECRET,
  dbUsername: envVars.DB_USERNAME,
};
