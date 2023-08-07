import * as GETDepoimento from '../../requests/depoimentos/GETDepoimento.request';
import * as POSTDepoimento from '../../requests/depoimentos/POSTDepoimento.request';
import * as PUTDepoimento from '../../requests/depoimentos/PUTDepoimento.request';

describe('Testes método PUT', () => {
    it('Ao tentar atualizar um depoimento informando um id que não possúi cadastro a api deve retornar código 404 e a mensagem "Nenhum resultado foi encontrado"', () => {
        POSTDepoimento.addDepoimento();
        GETDepoimento.buscaTodosDepoimentos().then((response) =>{
            const ultimoDepoimento = response.body[response.body.length - 1];
            const idInvalido = ultimoDepoimento.id + 1;
            PUTDepoimento.atualizaDepoimento(idInvalido).then((resPutDepoimento) =>{
                expect(resPutDepoimento.status).to.eq(404);
                expect(resPutDepoimento.body).to.have.property('mensagem').and.to.include('Nenhum resultado foi encontrado');
            })
        })
    })

    it('Ao tentar atualizar um depoimento informando um id que possúi cadastro o sistema deve retornar código 204', () => {
        POSTDepoimento.addDepoimento();
        GETDepoimento.buscaTodosDepoimentos().then((response) =>{
            const ultimoDepoimento = response.body[response.body.length - 1];
            const idValido = ultimoDepoimento.id;
            PUTDepoimento.atualizaDepoimento(idValido).then((resPutDepoimento) =>{
                expect(resPutDepoimento.status).to.eq(204);
            })
        })
    })
})