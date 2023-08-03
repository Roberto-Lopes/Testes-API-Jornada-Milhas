function buscaTodosDestinos(){
    return cy.request({
        method: 'GET',
        url: 'Destinos?skip=0&take=1000000',
        failOnStatusCode: false
    })
}

function buscaDestinoPorNome(_nome){
    return cy.request({
        method: 'GET',
        url: `Destinos?nome=${_nome}`,
        failOnStatusCode: false
    })
}

function buscaDestinoPorId(_id){
    return cy.request({
        method: 'GET',
        url: `Destinos/${_id}`,
        failOnStatusCode: false
    })
}

export {
    buscaTodosDestinos,
    buscaDestinoPorNome,
    buscaDestinoPorId
}