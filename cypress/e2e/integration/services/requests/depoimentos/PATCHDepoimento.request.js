const payloadDepoimento = require('../../payloads/depoimentos/patch-Depoimentos/patch-Depoimento.json');
const payloadDepoimentoCampoInvalido = require('../../payloads/depoimentos/patch-Depoimentos/patch-Depoimento-Campo-Invalido.json');

function atualizaDepoimentoParcial(_IdDepomento){
    return cy.request({
        method: 'PATCH',
        url: `Depoimentos/${_IdDepomento}`,
        failOnStatusCode: false,
        body: payloadDepoimento
    })
}

function atuliazaDepoimentoParcialCampoInvalido(_IdDepomento){
    return cy.request({
        method: 'PATCH',
        url: `Depoimentos/${_IdDepomento}`,
        failOnStatusCode: false,
        body: payloadDepoimentoCampoInvalido
    })
}

export {
    atualizaDepoimentoParcial,
    atuliazaDepoimentoParcialCampoInvalido
}