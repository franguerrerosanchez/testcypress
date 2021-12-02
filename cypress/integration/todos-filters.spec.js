/// <reference types="cypress" />

describe('filters', () => {
    beforeEach (() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo').type("Jugar a la play{enter}")
        cy.get('.new-todo').type("Jugar a la xbox{enter}")
        cy.get('.new-todo').type("Jugar a la switch{enter}")
    })

    it('Filter by Active', () => {
        cy.get(':nth-child(2) > .view > .toggle').click()
        cy.get(':nth-child(2) > a').click()
        cy.get('.todo-list li').should('have.length',2)
    })
})