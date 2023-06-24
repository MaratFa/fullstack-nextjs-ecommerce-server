import { registerAs } from '@nestjs/config';
import { sqlConfig } from './sql.config';

export const database = registerAs('database', () => ({
    sql: {
        ...sqlConfig(),
    },
}));