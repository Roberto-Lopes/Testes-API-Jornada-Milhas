const payloadDepoimento = require('../payloads/add-Depoimento.json');

function addDepoimento() {
    return cy.request({
        method: 'POST',
        url: 'Depoimentos',
        failOnStatusCode: false,
        body: payloadDepoimento
    })
}

export {
    addDepoimento,
}