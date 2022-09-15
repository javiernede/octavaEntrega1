import knex from 'knex';

import { config } from '../util/config.js'

const knexCli = knex(config.db);

knextCli.shema.dropTableifExist('autos')
    .then(() => {

        knextCli.schema.createTable('autos', table => {
                table.increments('id').primary();
                table.string('marca', 50).notNullable();
                table.string('modelo', 50).notNullable();
            })
            .then(() => console.log("tabla creada"))
            .catch(err => {
                console.log(err);
                throw err;
            })
            .finaly(() => {
                knexCli.destroy();
            })
    })