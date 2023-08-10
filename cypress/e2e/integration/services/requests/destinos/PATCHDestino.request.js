const payloadDestino = require('../../payloads/destinos/patch-Destinos/patch-Destinos.json');
const payloadDestinoCampoInvalido = require('../../payloads/destinos/patch-Destinos/patch-Destinos-Campo-Invalido.json');

function atualizaDestinoParcialmente(_id){
    return cy.request({
        method: 'PATCH',
        url: `Destinos/${_id}`,
        failOnStatusCode: false,
        body: payloadDestino
    })
}

function atualizaDestinoParcialmenteCampoInvalido(_id){
    return cy.request({
        method: 'PATCH',
        url: `Destinos/${_id}`,
        failOnStatusCode: false,
        body: payloadDestinoCampoInvalido
    })
}

export {
    atualizaDestinoParcialmente,
    atualizaDestinoParcialmenteCampoInvalido
}