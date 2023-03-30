describe ('Micuapp Log In test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })

    it('Admin user can log in into micuapp', function () {
    let email = 'admin@micu.es'
    let password = 'password'

    cy.visit('http://localhost:3000/login')

    cy.get('input[name=email]').type(email)

    cy.get('input[name=password]').type(`${password}{enter}`)
    
    cy.get('.swal-modal').contains('Success')
    
    cy.get('.swal-button').click()

    cy.url().should('include', 'http://localhost:3000/admin')
    
    cy.getAllLocalStorage().should('exist')

    })

})