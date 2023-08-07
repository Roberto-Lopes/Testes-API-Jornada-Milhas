import * as POSTDepoimento from '../../requests/depoimentos/POSTDepoimento.request';
import * as GETDepoimento from '../../requests/depoimentos/GETDepoimento.request';
import * as PATCHDepoimento from '../../requests/depoimentos/PATCHDepoimento.request';

describe('Testes método PATCH', () => {
    it('Ao tentar atualizar parcialmente um depoimento informando um id que possúi cadastro o sistema deve retornar código 204', () => {
        POSTDepoimento.addDepoimento();
        GETDepoimento.buscaTodosDepoimentos().then((response) =>{
            const ultimoDepoimento = response.body[response.body.length - 1];
            const idValido = ultimoDepoimento.id;
            PATCHDepoimento.atualizaDepoimentoParcial(idValido).then((resPatchDepoimento) =>{
                expect(resPatchDepoimento.status).to.eq(204);
            })
        })
    })

    it('Ao tentar atualizar parcialmente um depoimento informando um id que não possúi cadastro a api deve retornar código 404 e a mensagem "Nenhum resultado foi encontrado"', () => {
        POSTDepoimento.addDepoimento();
        GETDepoimento.buscaTodosDepoimentos().then((response) =>{
            const ultimoDepoimento = response.body[response.body.length - 1];
            const idInvalido = ultimoDepoimento.id + 1;
            PATCHDepoimento.atualizaDepoimentoParcial(idInvalido).then((resPatchDepoimento) =>{
                expect(resPatchDepoimento.status).to.eq(404);
                expect(resPatchDepoimento.body).to.have.property('mensagem').and.to.include('Nenhum resultado foi encontrado');
            })
        })
    })

    it('Ao tentar atualizar parcialmente um destino informando um campo que não existe a api deve retornar código 400', () => {
        POSTDepoimento.addDepoimento();
        GETDepoimento.buscaTodosDepoimentos().then((response) =>{
            const ultimoDepoimento = response.body[response.body.length - 1];
            const idValido = ultimoDepoimento.id;
            PATCHDepoimento.atuliazaDepoimentoParcialCampoInvalido(idValido).then((resPatchDepoimento) =>{
                expect(resPatchDepoimento.status).to.eq(400);
            })
        })
    })
})