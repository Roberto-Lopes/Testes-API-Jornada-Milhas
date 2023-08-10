const payloadDepoimento = require('../../payloads/depoimentos/add-Depoimentos/add-Depoimento.json');
const payloadDepoimentoNomeVazio = require('../../payloads/depoimentos/add-Depoimentos/add-Depoimento-Nome-Vazio.json');
const payloadDepoimentoNomeMenorQueMinimo = require('../../payloads/depoimentos/add-Depoimentos/add-Depoimento-Nome-Menor-Que-Minimo.json');
const payloadDepoimentoNomeMaiorQueMaximo = require('../../payloads/depoimentos/add-Depoimentos/add-Depoimento-Nome-Maior-Que-Maximo.json');
const payloadDepoimentoDepoimentoVazio = require('../../payloads/depoimentos/add-Depoimentos/add-Depoimento-Depoimento-Vazio.json');
const payloadDepoimentoDepoimentoMenorQueMinimo = require('../../payloads/depoimentos/add-Depoimentos/add-Depoimento-Depoimento-Menor-Que-Minimo.json');

function addDepoimento() {
    return cy.request({
        method: 'POST',
        url: 'Depoimentos',
        failOnStatusCode: false,
        body: payloadDepoimento
    })
}

function addDepoimentoNomeVazio() {
    return cy.request({
        method: 'POST',
        url: 'Depoimentos',
        failOnStatusCode: false,
        body: payloadDepoimentoNomeVazio
    })
}

function addDepoimentoNomeMenorQueMinimo() {
    return cy.request({
        method: 'POST',
        url: 'Depoimentos',
        failOnStatusCode: false,
        body: payloadDepoimentoNomeMenorQueMinimo
    })
}

function addDepoimentoNomeMaiorQueMaximo() {
    return cy.request({
        method: 'POST',
        url: 'Depoimentos',
        failOnStatusCode: false,
        body: payloadDepoimentoNomeMaiorQueMaximo
    })
}

function addDepoimentoDepoimentoVazio() {
    return cy.request({
        method: 'POST',
        url: 'Depoimentos',
        failOnStatusCode: false,
        body: payloadDepoimentoDepoimentoVazio
    })
}

function addDepoimentoDepoimentoMenorQueMinimo() {
    return cy.request({
        method: 'POST',
        url: 'Depoimentos',
        failOnStatusCode: false,
        body: payloadDepoimentoDepoimentoMenorQueMinimo
    })
}

export {
    addDepoimento,
    addDepoimentoNomeVazio,
    addDepoimentoNomeMenorQueMinimo,
    addDepoimentoNomeMaiorQueMaximo,
    addDepoimentoDepoimentoVazio,
    addDepoimentoDepoimentoMenorQueMinimo
}