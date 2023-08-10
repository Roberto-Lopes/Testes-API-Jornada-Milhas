import * as POSTDepoimento from '../../requests/depoimentos/POSTDepoimento.request';
import * as GETDepoimento from '../../requests/depoimentos/GETDepoimento.request';
import * as DELETEDepoimento from '../../requests/depoimentos/DELETEDepoimento.request';

describe('Testes método DELETE', () => {
    it('Ao tentar deletar um depoimento informando um id que não possúi cadastro a api deve retornar código 404 e a mensagem "Nenhum resultado foi encontrado"', () => {
        POSTDepoimento.addDepoimento();
        GETDepoimento.buscaTodosDepoimentos().then((response) =>{
            const ultimoDepoimento = response.body[response.body.length - 1];
            const idInvalido = ultimoDepoimento.id + 1;
            DELETEDepoimento.deletarDepoimento(idInvalido).then((resDeleteDepoimento) =>{
                expect(resDeleteDepoimento.status).to.eq(404);
                expect(resDeleteDepoimento.body).to.have.property('mensagem').and.to.include('Nenhum resultado foi encontrado');
            })
        })
    })

    it('Ao tentar deletar um depoimento informando um id que possúi cadastro a api deve retornar código 204', () => {
        POSTDepoimento.addDepoimento();
        GETDepoimento.buscaTodosDepoimentos().then((response) =>{
            const ultimoDepoimento = response.body[response.body.length - 1];
            const idValido = ultimoDepoimento.id;
            DELETEDepoimento.deletarDepoimento(idValido).then((resDeleteDepoimento) =>{
                expect(resDeleteDepoimento.status).to.eq(204);
            })
        })
    })
})