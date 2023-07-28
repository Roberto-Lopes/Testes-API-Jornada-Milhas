const payloadDepoimento = require('../../payloads/depoimentos/patch-Depoimento.json');

function atualizaDepoimentoParcial(_IdDepomento){
    return cy.request({
        method: 'PATCH',
        url: `Depoimentos/${_IdDepomento}`,
        failOnStatusCode: false,
        body: payloadDepoimento
    })
}

export {
    atualizaDepoimentoParcial,
}