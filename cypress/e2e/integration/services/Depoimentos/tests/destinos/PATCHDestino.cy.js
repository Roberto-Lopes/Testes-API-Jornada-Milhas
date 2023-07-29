import * as PATCHDestino from '../../requests/destinos/PATCHDestino.request';
import * as GETDestino from '../../requests/destinos/GETDestino.request';
import * as POSTDestino from '../../requests/destinos/POSTDestino.request;'

describe('Testes método PATCH', () =>{
    it('Ao tentar atualizar parcialmente um destino informando um id que possúi cadastro o sistema deve retornar código 204', () =>{
        POSTDestino.addDestino();
        GETDestino.buscaTodosDestinos().then((response) =>{
            const ultimoDestino = response.body[response.body.length - 1];
            const idValido = ultimoDestino.id;
            PATCHDestino.atualizaDestinoParcialmente(idValido).then((resPatchPorId) =>{
                expect(resPatchPorId.status).to.eq(204);
            })
        })
    })

    it('Ao tentar atualizar parcialmente um destino informando um id que não possúi cadastro a api deve retornar código 404 e a mensagem "Nenhum resultado foi encontrado"', () =>{
        POSTDestino.addDestino();
        GETDestino.buscaTodosDestinos().then((response) =>{
            const ultimoDestino = response.body[response.body.length - 1];
            const idInvalido = ultimoDestino.id + 1;
            PATCHDestino.atualizaDestinoParcialmente(idInvalido).then((resPatchPorId) =>{
                expect(resPatchPorId.status).to.eq(404);
                expect(resPatchPorId.body).to.have.property('mensagem').and.to.include('Nenhum resultado foi encontrado');
            })
        })
    })

    it('Ao tentar atualizar parcialmente um destino informando um campo que não existe a api deve retornar código 400', () =>{
        POSTDestino.addDestino();
        GETDestino.buscaTodosDestinos().then((response) =>{
            const ultimoDestino = response.body[response.body.length - 1];
            const idValido = ultimoDestino.id;
            PATCHDestino.atualizaDestinoParcialmenteCampoInvalido(idValido).then((resPatchPorId) => {
                expect(resPatchPorId.status).to.eq(400);
            })
        })
    })
})