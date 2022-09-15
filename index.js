import { ContenedorSQL, contenedorSQL } from "./src/batch/container/contenedorSQL.js"

const ApiAutos = new ContenedorSQL('autos')

const apiBicicletas = new ContenedorSQL('bicicletas')

async function main() {
    console.log(ApiAutos.listarAll())

    const listaAutos = [
        { marca: 'TOYOTA', modelo: 'RAV4' },
        { marca: 'TOYOTA', modelo: 'RAV4' },
        { marca: 'TOYOTA', modelo: 'RAV4' },
        { marca: 'TOYOTA', modelo: 'RAV4' }

    ]
    let res;
    res = await apiAutos.insertar(listaAutos);
    console.log('inserto en tabla');
}

main();