import kinex from 'kinex'
import { config } from '../util/config.js'

export class ContenedorSQL {
    constructor(tableName) {
        this.kinexCli = kinex(config.db)
        this.tableName = tableName;
    }

    listarAll() {
        return 'listarAll'
    }

    listar(id) {

    }

    async insertar(ob) {
        await this.kinexCli(this.tableName).insert(ob)
    } catch (error) {
        throw error;
    }

    actualizar(id, ob) {

    }

    eliminar(id) {

    }
}