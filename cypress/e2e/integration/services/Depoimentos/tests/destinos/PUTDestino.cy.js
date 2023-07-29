import * as PUTDestino from '../../requests/destinos/PUTDestino.request';
import * as GETDestino from '../../requests/destinos/GETDestino.request';
import * as POSTDestino from '../../requests/destinos/POSTDestino.request';

describe('Testes método PUT', () =>{
    it('Ao tentar atualizar um destino informando um id que não possúi cadastro a api deve retornar código 404 e a mensagem "Nenhum resultado foi encontrado"', () =>{
        POSTDestino.addDestino();
        GETDestino.buscaTodosDestinos().then((response) =>{
            const ultimoDestino = response.body[response.body.length - 1];
            const idInvalido = ultimoDestino.id + 1;
            PUTDestino.atualizaDestinoPorId(idInvalido).then((resPutPorId) => {
                expect(resPutPorId.status).to.eq(404);
                expect(resPutPorId.body).to.have.property('mensagem').and.to.include('Nenhum resultado foi encontrado');
            })
        })
    })

    it('Ao tentar atualizar um destino informando um id que possúi cadastro o sistema deve retornar código 204', () =>{
        POSTDestino.addDestino();
        GETDestino.buscaTodosDestinos().then((response) =>{
            const ultimoDestino = response.body[response.body.length - 1];
            const idValido = ultimoDestino.id;
            PUTDestino.atualizaDestinoPorId(idValido).then((resPutPorId) =>{
                expect(resPutPorId.status).to.eq(204);
            })
        })
    })
})