import * as DELETEDestino from '../../requests/destinos/DELETEDestino.request';
import * as GETDestino from '../../requests/destinos/GETDestino.request';
import * as POSTDestino from '../../requests/destinos/POSTDestino.request';

describe('Testes método DELETE', () =>{
    it('Ao tentar deletar um destino informando um id que não possúi cadastro a api deve retornar código 404 e a mensagem "Nenhum resultado foi encontrado"', () =>{
        POSTDestino.addDestino();
        GETDestino.buscaTodosDestinos().then((response) =>{
            const ultimoDestino = response.body[response.body.length - 1];
            const idInvalido = ultimoDestino.id + 1;
            DELETEDestino.deletarDestino(idInvalido).then((resDeletePorId) =>{
                expect(resDeletePorId.status).to.eq(404);
                expect(resDeletePorId.body).to.have.property('mensagem').and.to.include('Nenhum resultado foi encontrado');
            })
        })
    })

    it('Ao tentar deletar um destino informando um id que possúi cadastro a api deve retornar código 204', () =>{
        POSTDestino.addDestino();
        GETDestino.buscaTodosDestinos().then((response) =>{
            const ultimoDestino = response.body[response.body.length - 1];
            const idValido = ultimoDestino.id;
            DELETEDestino.deletarDestino(idValido).then((resDeletePorId) =>{
                expect(resDeletePorId.status).to.eq(204);
            })
        })
    })
})