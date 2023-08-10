import * as POSTDepoimento from '../../requests/depoimentos/POSTDepoimento.request';

describe('Testes método POST', () => {
    it('Ao adicionar um depoimento com sucesso a api deve retornar código 201', () => {
        POSTDepoimento.addDepoimento().should((response) =>{
            expect(response.status).to.eq(201);
        })
    })

    it('Ao adicionar um depoimento sem o campo "nome" a api deve retornar código 400 com a seguinte mensagem "O nome do criador do depoimento é obrigatório"', () => {
        POSTDepoimento.addDepoimentoNomeVazio().should((response) =>{
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('errors').and.to.have.property('Nome').and.to.include('O nome do criador do depoimento é obrigatório');
        })
    })

    it('Ao adicionar um depoimento com o campo "nome" com menos de 10 caracteres a api deve retornar código 400 com a seguinte mensagem "O nome do criador deve possuir no mínimo 10 caracteres"', () =>{
        POSTDepoimento.addDepoimentoNomeMenorQueMinimo().should((response) =>{
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('errors').and.to.have.property('Nome').and.to.include('O nome do criador deve possuir no mínimo 10 caracteres');
        })
    })

    it('Ao Adicionar um depoimento com o campo "nome" com mais de 255 caracteres a api deve retornar código 400 com a seguinte mensagem "O nome do criador deve possuir no máximo 255 caracteres"', () => {
        POSTDepoimento.addDepoimentoNomeMaiorQueMaximo().should((response) =>{
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('errors').and.to.have.property('Nome').and.to.include('O nome do criador deve possuir no máximo 255 caracteres');
        })
    })

    it('Ao Adicionar um depoimento com o campo "depoimento" vazio a api deve retornar código 400 com a seguinte mensagem "O depoimento não pode estar em branco"', () => {
        POSTDepoimento.addDepoimentoDepoimentoVazio().should((response) =>{
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('errors').and.to.have.property('Depoimento').and.to.include('O depoimento não pode estar em branco');
        })
    })

    it('Ao adicionar um depoimento com o campo "depoimento" com menos de 10 caracteres a api deve retornar código 400 com a seguinte mensagem "O depoimento deve possuir no mínimo 10 caracteres"', () => {
        POSTDepoimento.addDepoimentoDepoimentoMenorQueMinimo().should((response) =>{
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('errors').and.to.have.property('Depoimento').and.to.include('O depoimento deve possuir no mínimo 10 caracteres');
        })
    })
})