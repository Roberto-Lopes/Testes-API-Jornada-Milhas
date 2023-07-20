import * as DELETEDepoimento from '../requests/DELETEDepoimento.request';
import * as GETDepoimento from '../requests/GETDepoimento.request';

describe('Delete Depoimento', () => {
    it('Deleta o primeiro depoimento', () => {
        GETDepoimento.buscaTodosDepoimentos().then((response) => {
            DELETEDepoimento.deletarDepoimento(response.body[0].id).then((resDeleteDepoimento) => {
                expect(resDeleteDepoimento.status).to.eq(204);
            })
        })
    })
})