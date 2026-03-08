/// <reference types="cypress" />

it('open homepage', () => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        })
})