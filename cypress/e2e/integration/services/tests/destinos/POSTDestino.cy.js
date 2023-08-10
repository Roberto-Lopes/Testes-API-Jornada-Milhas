import * as POSTDestino from '../../requests/destinos/POSTDestino.request';

describe('Testes método POST', () => {
    it('Ao adicionar um destino com sucesso a api deve retornar código 201', () =>{
        POSTDestino.addDestino().should((response) =>{
            expect(response.status).to.eq(201);
        })
    })

    it('Ao adicionar um destino sem o campo "Nome" a api deve retornar código 400 com a seguinte mensagem "O nome do destino é obrigatório"', () =>{
        POSTDestino.addDestinoNomeVazio().should((response) =>{
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('errors').and.to.have.property('Nome').and.to.include('O nome do destino é obrigatório');
        })
    })
    
    it('Ao Adicionar um destino com o campo "Foto_1" vazio a api deve retornar código 400 com a seguinte mensagem "São necessárias 2 fotos para o destino"', () => {
        POSTDestino.addDestinoFoto1Vazio().should((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('errors').and.to.have.property('Foto_1').and.to.include('São necessárias 2 fotos para o destino');
        })
    })

    it('Ao Adicionar um destino com o campo "Foto_2" vazio a api deve retornar código 400 com a seguinte mensagem "São necessárias 2 fotos para o destino"', () => {
        POSTDestino.addDestinoFoto2Vazio().should((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('errors').and.to.have.property('Foto_2').and.to.include('São necessárias 2 fotos para o destino');
        })
    })

    it('Ao Adicionar um destino com o campo "Meta" vazio a api deve retornar código 400 com a seguinte mensagem "O destino deve possuir uma meta"', () =>{
        POSTDestino.addDestinoMetaVazio().should((response) =>{
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('errors').and.to.have.property('Meta').and.to.include('O destino deve possuir uma meta');
        })
    })

    it('Ao adicionar um destino com o campo "Nome" com menos de 5 caracteres a api deve retornar código 400 com a seguinte mensagem "O nome do destino deve possuir no mínimo 5 caracteres"', () =>{
        POSTDestino.addDestinoNomeMenorQueMinimo().should((response) =>{
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('errors').and.to.have.property('Nome').and.to.include('O nome do destino deve possuir no mínimo 5 caracteres');
        })
    })

    it('Ao Adicionar um destino com o campo "Nome" com mais de 255 caracteres a api deve retornar código 400 com a seguinte mensagem "O nome do destino deve possuir no máximo 255 caracteres"', () =>{
        POSTDestino.addDestinoNomeMaiorQueMaximo().should((response) =>{
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('errors').and.to.have.property('Nome').and.to.include('O nome do destino deve possuir no máximo 255 caracteres');
        })
    })

    it('Ao Adicionar um destino com o campo "meta" com mais de 160 caracteres a api deve retornar código 400 com a seguinte mensagem "A meta do destino deve possuir no máximo 160 caracteres"', () =>{
        POSTDestino.addDestinoMetaMaiorQueMaximo().should((response) =>{
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('errors').and.to.have.property('Meta').and.to.include('A meta deve possuir no máximo 160 caracteres');
        })
    })
})