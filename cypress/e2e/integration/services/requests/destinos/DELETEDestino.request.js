function deletarDestino(_id){
    return cy.request({
        method: 'DELETE',
        url: `Destinos/${_id}`,
        failOnStatusCode: false,
    })
}

export {
    deletarDestino
}