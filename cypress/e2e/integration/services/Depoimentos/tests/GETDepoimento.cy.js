import * as GETDepoimento from '../requests/GETDepoimento.request';

describe('Get Depoimentos', () =>{
    it('Listar todos os depoimentos', () => {
        GETDepoimento.buscaTodosDepoimentos().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        })
    })

    it('Listar depoimento por Id', () => {
        GETDepoimento.buscaTodosDepoimentos().then((response) => {
            GETDepoimento.buscaDepoimentoPorId(response.body[0].id).then((resBuscaPorId) => {
                expect(resBuscaPorId.status).to.eq(200);
            })
        })
    })

    it('Listar depoimentos da página home', () => {
        GETDepoimento.buscaDepoimentosHome().should((response) => {
            const listaDepoimentos = Object.keys(response.body).length;
            expect(response.status).to.eq(200);
            expect(listaDepoimentos).to.eq(3);
        })
    })
})