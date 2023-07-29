const payloadDestino = require('../../payloads/destinos/add-Destinos/add-Destino.json');
const payloadDestinoNomeVazio = require('../../payloads/destinos/add-Destinos/add-Destino-Nome-Vazio.json');
const payloadDestinoPreçoVazio = require('../../payloads/destinos/add-Destinos/add-Destino-Preço-Vazio.json');
const payloadDestinoNomeMenorQueMinimo = require('../../payloads/destinos/add-Destinos/add-Destino-Nome-Menor-Que-Minimo.json');
const payloadDestinoNomeMaiorQueMaximo = require('../../payloads/destinos/add-Destinos/add-Destino-Nome-Maior-Que-Maximo.json');


function addDestino(){
    return cy.request({
        method: 'POST',
        url: 'Destinos',
        failOnStatusCode: false,
        body: payloadDestino
    })
}

function addDestinoNomeVazio(){
    return cy.request({
        method: 'POST',
        url: 'Destinos',
        failOnStatusCode: false,
        body: payloadDestinoNomeVazio
    })
}

function addDestinoPreçoVazio(){
    return cy.request({
        method: 'POST',
        url: 'Destinos',
        failOnStatusCode: false,
        body: payloadDestinoPreçoVazio
    })
}

function addDestinoNomeMenorQueMinimo(){
    return cy.request({
        method: 'POST',
        url: 'Destinos',
        failOnStatusCode: false,
        body: payloadDestinoNomeMenorQueMinimo
    })
}

function addDestinoNomeMaiorQueMaximo(){
    return cy.request({
        method: 'POST',
        url: 'Destinos',
        failOnStatusCode: false,
        body: payloadDestinoNomeMaiorQueMaximo
    })
}

export {
    addDestino,
    addDestinoNomeVazio,
    addDestinoPreçoVazio,
    addDestinoNomeMenorQueMinimo,
    addDestinoNomeMaiorQueMaximo
}