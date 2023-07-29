import * as GETDestino from '../../requests/destinos/GETDestino.request';
import * as POSTDestino from '../../requests/destinos/POSTDestino.request';

describe('Testes método GET', () =>{
    it('Ao buscar todos os destinos sem uso de filtros a api deve retornar código 200 e uma lista de destinos', () =>{
        POSTDestino.addDestino();
        GETDestino.buscaTodosDestinos().should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
        })
    })

    it('Ao buscar destinos com um nome solicitado a api deve retornar código 200 e uma lista de destinos que contenham esse nome', () =>{
        for(let i = 0; i < 3; i++){
            POSTDestino.addDestino();
        }
        GETDestino.buscaDestinoPorNome("teste").should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array')
            for(let i = 0; i<Object.keys(response.body).length; i++){
                expect(response.body[i]).to.have.property('nome').and.to.include('teste');
            }
            
        })
    })

    it('Ao buscar destinos com um nome específico a api deve retornar código 404 e a mensagem "Nenhum resultado foi encontrado" caso caso nenhum destino seja encontrado', () =>{
        POSTDestino.addDestino();
        GETDestino.buscaDestinoPorNome("Inválido").should((response) =>{
            expect(response.status).to.eq(404);
            expect(response.body).to.have.property('mensagem').and.to.include('Nenhum resultado foi encontrado');
        })
    })

    it('Ao buscar um destino por id a api deve retornar código 404 e a mensagem "Nenhum resultado foi encontrado" caso nenhum destino seja encontrado com o id informado', () =>{ 
        POSTDestino.addDestino();
        GETDestino.buscaTodosDestinos().then((response) => {
            const ultimoDestino = response.body[response.body.length - 1];
            const idInvalido = ultimoDestino.id + 1;
            GETDestino.buscaDestinoPorId(idInvalido).then((resBuscaPorId) =>{
                expect(resBuscaPorId.status).to.eq(404);
                expect(resBuscaPorId.body).to.have.property('mensagem').and.to.include('Nenhum resultado foi encontrado');
            })
        })
    })

    it('Ao buscar um destino por id a api deve retornar código 200 e um JSON com as informações daquele destino caso um destino seja encontrado com o id informado', () =>{
        POSTDestino.addDestino();
        GETDestino.buscaTodosDestinos().then((response) => {
            const destinoCadastrado = response.body[response.body.length - 1];
            const idValido = destinoCadastrado.id;
            GETDestino.buscaDestinoPorId(idValido).then((resBuscaPorId) =>{
                expect(resBuscaPorId.status).to.eq(200);
                expect(resBuscaPorId.body).to.have.property('nome').and.to.include('Destino para teste');
            })
        })
    })


})