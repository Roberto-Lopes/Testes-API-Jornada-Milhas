function buscaTodosDepoimentos() {
    return cy.request({
        method: 'GET',
        url: 'Depoimentos?skip=0&take=1000000',
        failOnStatusCode: false
    })
}

function buscaDepoimentoPorId(_IdDepoimento){
    return cy.request({
        method: 'GET',
        url: `Depoimentos/${_IdDepoimento}`,
        failOnStatusCode: false
    })
}

function buscaDepoimentoPorNome(_nome){
    return cy.request({
        method: 'GET',
        url: `Depoimentos?nome=${_nome}`,
        failOnStatusCode: false
    })
}

function buscaDepoimentosHome(){
    return cy.request({
        method: 'GET',
        url: 'Depoimentos/home',
        failOnStatusCode: false
    })
}

export {
    buscaDepoimentoPorId,
    buscaDepoimentoPorNome,
    buscaTodosDepoimentos,
    buscaDepoimentosHome
}