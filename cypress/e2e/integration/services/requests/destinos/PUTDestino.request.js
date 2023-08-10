const payloadDestino = require('../../payloads/destinos/update-Destinos/update-Destino.json');

function atualizaDestinoPorId(_id){
    return cy.request({
        method: 'PUT',
        url: `Destinos/${_id}`,
        failOnStatusCode: false,
        body: payloadDestino
    })
}

export {
    atualizaDestinoPorId,
    
}