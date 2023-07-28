import * as POSTDepoimento from '../../requests/depoimentos/POSTDepoimento.request'

describe('Testes método POST', () =>{
    it('Adicionar um novo depoimento', () =>{
        POSTDepoimento.addDepoimento().should((response) =>{
            expect(response.status).to.eq(201)
        })
    })
})