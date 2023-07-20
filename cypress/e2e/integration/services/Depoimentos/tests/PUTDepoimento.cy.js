import * as PUTDepoimento from '../requests/PUTDepoimento.request';

describe('Put Depoimento', () =>{
    it("Atualiza todos os campos de um depoimento", () =>{
        PUTDepoimento.atualizaDepoimento(1).should((response) => {
            expect(response.status).to.eq(204);
        })
    })
})