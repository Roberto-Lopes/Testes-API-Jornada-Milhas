import * as PATCHDepoimento from '../../requests/depoimentos/PATCHDepoimento.request';
import * as GETDepoimento from '../../requests/depoimentos/GETDepoimento.request';

describe('Testes método PATCH', () => {
    it('Atualiza depoimento parcialmente', () => {
        GETDepoimento.buscaTodosDepoimentos().then((response) => {
            PATCHDepoimento.atualizaDepoimentoParcial(response.body[0].id).then((resPatchDepoimento) => {
                expect(resPatchDepoimento.status).to.eq(204);
            })
        })
    })
})