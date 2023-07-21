import * as PUTDepoimento from '../requests/PUTDepoimento.request';
import * as GETDepoimento from '../requests/GETDepoimento.request';

describe('Put Depoimento', () =>{
    it("Atualiza todos os campos de um depoimento", () =>{
        GETDepoimento.buscaTodosDepoimentos().then((response) => {
            PUTDepoimento.atualizaDepoimento(response.body[0].id).then((resPutDepoimento) => {
                expect(resPutDepoimento.status).to.eq(204);
            })
        })
    })

    it('Retornar código 404 ao não encontrar um depoimento por id', () =>{
        PUTDepoimento.atualizaDepoimento(999).should((response) => {
            expect(response.status).to.eq(404);
        })
    })
})