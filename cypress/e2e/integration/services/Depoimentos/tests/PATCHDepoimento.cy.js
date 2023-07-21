import * as PATCHDepoimento from '../requests/PATCHDepoimento.request';
import * as GETDepoimento from '../requests/GETDepoimento.request';

describe('Patch Depoimento', () => {
    it('Atualiza depoimento parcialmente', () => {
        GETDepoimento.buscaTodosDepoimentos().then((response) => {
            PATCHDepoimento.atualizaDepoimentoParcial(response.body[0].id).then((resPatchDepoimento) => {
                expect(resPatchDepoimento.status).to.eq(204);
            })
        })
    })
})