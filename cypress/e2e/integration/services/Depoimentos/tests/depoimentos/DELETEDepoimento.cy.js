import * as DELETEDepoimento from '../requests/depoimentos/DELETEDepoimento.request';
import * as GETDepoimento from '../requests/depoimentos/GETDepoimento.request';

describe('Testes metodo DELETE', () => {
    it('Deleta o primeiro depoimento', () => {
        GETDepoimento.buscaTodosDepoimentos().then((response) => {
            DELETEDepoimento.deletarDepoimento(response.body[0].id).then((resDeleteDepoimento) => {
                expect(resDeleteDepoimento.status).to.eq(204);
            })
        })
    })

    it('Retornar 404 ao não encontrar um depoimento por id', () => {
        DELETEDepoimento.deletarDepoimento(999).should((response) => {
            expect(response.status).to.eq(404);
        })
    })
})