/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')

    })

    it('Deve levar o usuário até o formuário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.get('option').should('have.length', 7)
    })

    it('Deve prencher todo o formulário de incrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Emerson Teixeira')
        cy.get('input[name="email"]').type('emersonteixeira003@gmail.com')
        cy.get('input[name="telefone"]').type('11 954393351')
        cy.get('input[name="endereco"]').type('Av Guaratinguetá número 1051 bloco 8 ap 3')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('Técnologo')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
    })

})