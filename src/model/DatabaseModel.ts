import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export class DatabaseModel {
    
    private _config: object;
    private _pool: pg.Pool;
    private _client: pg.Client;

    constructor() {
        this._config = {
            user: 'postgres',
            host: 'localhost',
            database: 'zoologico',
            password: 'SeriousCrane803',
            port: 5432,
            max: 10,
            idleTimoutMillis: 10000
        }
        this._pool = new pg.Pool(this._config);
        this._client = new pg.Client(this._config);
    }

    public async testeConexao() {
        try {
            await this._client.connect();
            console.log('Database connected!');
            this._client.end();
            return true;
        } catch (error) {
            console.log('Error to connect database X( ');
            console.log(error);
            this._client.end();
            return false;
        }
    }

    public get pool() {
        return this._pool;
    }
}