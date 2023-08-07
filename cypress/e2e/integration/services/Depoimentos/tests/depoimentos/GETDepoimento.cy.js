import * as POSTDepoimento from '../../requests/depoimentos/POSTDepoimento.request';
import * as GETDepoimento from '../../requests/depoimentos/GETDepoimento.request';

describe('Testes método GET', () => {
    it('Ao buscar todos os depoimentos sem uso de filtros a api deve retornar código 200 e uma lista de destinos', () => {
        GETDepoimento.buscaTodosDepoimentos().should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
        })
    })

    it('Ao buscar depoimentos com um nome solicitado a api deve retornar código 200 e uma lista de destinos que contenham esse nome', () => {
        for(let i = 0; i < 3; i++){
            POSTDepoimento.addDepoimento();
        }
        GETDepoimento.buscaDepoimentoPorNome("Teste").should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            for(let i = 0; i < Object.keys(response.body).length; i++){
                expect(response.body[i]).to.have.property('nome').and.to.include('Teste');
            }
        })
    })

    it('Ao buscar depoimentos com um nome específico a api deve retornar código 404 e a mensagem "Nenhum resultado foi encontrado" caso caso nenhum destino seja encontrado', () =>{
        POSTDepoimento.addDepoimento();
        GETDepoimento.buscaDepoimentoPorNome('Inválido').should((response) =>{
            expect(response.status).to.eq(404);
            expect(response.body).to.have.property('mensagem').and.to.include('Nenhum resultado foi encontrado');
        })
    })

    it('Ao buscar um depoimento por id a api deve retornar código 404 e a mensagem "Nenhum resultado foi encontrado" caso nenhum destino seja encontrado com o id informado', () => {
        POSTDepoimento.addDepoimento();
        GETDepoimento.buscaTodosDepoimentos().then((response) =>{
            const ultimoDepoimento = response.body[response.body.length - 1];
            const idInvalido = ultimoDepoimento.id + 1;
            GETDepoimento.buscaDepoimentoPorId(idInvalido).then((resBuscaPorId) =>{
                expect(resBuscaPorId.status).to.eq(404);
                expect(resBuscaPorId.body).to.have.property('mensagem').and.to.include('Nenhum resultado foi encontrado');
            })
        })
    })

    it('Ao buscar um depoimento por id a api deve retornar código 200 e um JSON com as informações daquele destino caso um destino seja encontrado com o id informado', () => {
        POSTDepoimento.addDepoimento();
        GETDepoimento.buscaTodosDepoimentos().then((response) =>{
            const ultimoDepoimento = response.body[response.body.length - 1];
            const idValido = ultimoDepoimento.id;
            GETDepoimento.buscaDepoimentoPorId(idValido).then((resBuscaPorId) =>{
                expect(resBuscaPorId.status).to.eq(200);
                expect(resBuscaPorId.body).to.have.property('nome').and.to.include('Teste');
            })
        })
    })
})