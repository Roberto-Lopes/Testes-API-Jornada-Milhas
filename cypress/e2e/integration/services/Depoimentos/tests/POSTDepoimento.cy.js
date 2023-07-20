import * as POSTDepoimento from '../requests/POSTDepoimento.request'

describe('Post Depoimento', () =>{
    it('Adicionar um novo depoimento', () =>{
        POSTDepoimento.addDepoimento().should((response) =>{
            expect(response.status).to.eq(201)
        })
    })
})