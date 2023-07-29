import * as POSTDestino from '../../requests/destinos/POSTDestino.request';

describe('Testes método POST', () => {
    it('Ao adicionar um destino com sucesso a api deve retornar código 201', () =>{
        POSTDestino.addDestino().should((response) =>{
            expect(response.status).to.eq(201);
        })
    })

    it('Ao adicionar um destino sem o campo "nome" a api deve retornar código 400 ', () =>{
        POSTDestino.addDestinoNomeVazio().should((response) =>{
            expect(response.status).to.eq(400);
        })
    })
    
    it('Ao adicionar um destino sem o campo "preço" a api deve retornar código 400', () =>{
        POSTDestino.addDestinoPreçoVazio().should((response) =>{
            expect(response.status).to.eq(400);
        })
    })

    it('Ao adicionar um destino com o campo "nome" com menos de 5 caracteres a api deve retornar código 400 com a seguinte mensagem "O nome do destino deve possuir no mínimo 5 caracteres"', () =>{
        POSTDestino.addDestinoNomeMenorQueMinimo().should((response) =>{
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('errors').and.to.have.property('Nome').and.to.include('O nome do destino deve possuir no mínimo 5 caracteres');
        })
    })

    it('Ao Adicionar um destino com o campo "nome" com mais de 255 caracteres a api deve retornar código 400 com a seguinte mensagem "O nome do destino deve possuir no máximo 255 caracteres"', () =>{
        POSTDestino.addDestinoNomeMaiorQueMaximo().should((response) =>{
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('errors').and.to.have.property('Nome').and.to.include('O nome do destino deve possuir no máximo 255 caracteres');
        })
    })
})