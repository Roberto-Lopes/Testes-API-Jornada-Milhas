const payloadDepoimento = require('../../payloads/depoimentos/update-Depoimentos/update-Depoimento.json');

function atualizaDepoimento(_IdDepoimento){
    return cy.request({
        method: 'PUT',
        url: `Depoimentos/${_IdDepoimento}`,
        failOnStatusCode: false,
        body: payloadDepoimento
    })
}

export {
    atualizaDepoimento,
}