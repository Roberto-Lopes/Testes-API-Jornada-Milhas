function buscaTodosDepoimentos() {
    return cy.request({
        method: 'GET',
        url: 'Depoimentos',
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

function buscaDepoimentosHome(){
    return cy.request({
        method: 'GET',
        url: 'Depoimentos/home',
        failOnStatusCode: false
    })
}

export {
    buscaDepoimentoPorId,
    buscaTodosDepoimentos,
    buscaDepoimentosHome
}