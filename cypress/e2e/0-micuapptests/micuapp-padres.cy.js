describe ('Micuapp Log In test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })
      it('Al acceder al botón para padres en micuapp', function () {

        cy.get('[data-test="padres"]').click()

        cy.url().should('include', 'http://localhost:3000/parapadres')
    })
})
