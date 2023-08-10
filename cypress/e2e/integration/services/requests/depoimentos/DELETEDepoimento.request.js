function deletarDepoimento(_IdDepoimento){
    return cy.request({
        method: 'DELETE',
        url: `Depoimentos/${_IdDepoimento}`,
        failOnStatusCode: false
    })
}

export {
    deletarDepoimento,
}