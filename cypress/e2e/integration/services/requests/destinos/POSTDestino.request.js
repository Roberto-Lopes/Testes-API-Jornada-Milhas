const payloadDestino = require('../../payloads/destinos/add-Destinos/add-Destino.json');
const payloadDestinoFoto1Vazio = require('../../payloads/destinos/add-Destinos/add-Destino-Foto_1-Vazio.json');
const payloadDestinoFoto2Vazio = require('../../payloads/destinos/add-Destinos/add-Destino-Foto_2-Vazio.json');
const payloadDestinoNomeVazio = require('../../payloads/destinos/add-Destinos/add-Destino-Nome-Vazio.json');
const payloadDestinoMetaVazio = require('../../payloads/destinos/add-Destinos/add-Destino-Meta-Vazio.json');
const payloadDestinoNomeMenorQueMinimo = require('../../payloads/destinos/add-Destinos/add-Destino-Nome-Menor-Que-Minimo.json');
const payloadDestinoNomeMaiorQueMaximo = require('../../payloads/destinos/add-Destinos/add-Destino-Nome-Maior-Que-Maximo.json');
const payloadDestinoMetaMaiorQueMaximo = require('../../payloads/destinos/add-Destinos/add-Destino-Meta-Maior-Que-Maximo.json');


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

function addDestinoFoto1Vazio(){
    return cy.request({
        method: 'POST',
        url: 'Destinos',
        failOnStatusCode: false,
        body: payloadDestinoFoto1Vazio
    })
}

function addDestinoFoto2Vazio(){
    return cy.request({
        method: 'POST',
        url: 'Destinos',
        failOnStatusCode: false,
        body: payloadDestinoFoto2Vazio
    })
}

function addDestinoMetaVazio(){
    return cy.request({
        method: 'POST',
        url: 'Destinos',
        failOnStatusCode: false,
        body: payloadDestinoMetaVazio
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

function addDestinoMetaMaiorQueMaximo(){
    return cy.request({
        method: 'POST',
        url: 'Destinos',
        failOnStatusCode: false,
        body: payloadDestinoMetaMaiorQueMaximo
    })
}

export {
    addDestino,
    addDestinoFoto1Vazio,
    addDestinoFoto2Vazio,
    addDestinoNomeVazio,
    addDestinoMetaVazio,
    addDestinoNomeMenorQueMinimo,
    addDestinoNomeMaiorQueMaximo,
    addDestinoMetaMaiorQueMaximo
}