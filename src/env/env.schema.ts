import { z } from 'zod';

export const EnvModuleValidationSchema = z.object({
  PORT: z.coerce.number().default(7899),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),

  JWT_SECRET: z.string().min(10),
  AUTH_ACCESS_TOKEN_EXPIRATION: z.string().min(2),
  AUTH_REFRESH_TOKEN_EXPIRATION: z.string().min(2),
});

export type EnvDTO = z.infer<typeof EnvModuleValidationSchema>;
