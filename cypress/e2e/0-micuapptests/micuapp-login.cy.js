describe ('Micuapp Log In test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })

    it('Displays vowels container by default', () => {
        cy.get('[data-test="vowel-container"]').should('have.length', 1)
        cy.wait(2000)
      }) 
    
    it('A registered user can log in into micuapp', function () {
    let email = 'gaby@gmail.com'
    let password = 'password'

    cy.visit('http://localhost:3000/login')

    cy.get('input[name=email]').type(email)
    cy.wait(2000)
    cy.get('input[name=password]').type(`${password}{enter}`)
    cy.wait(2000)
    cy.get('.swal-modal').contains('Success')
    cy.wait(3000)
    cy.get('.swal-button').click()
    cy.wait(3000)
    cy.url().should('include', 'http://localhost:3000/')
    cy.wait(3000)
    cy.getAllLocalStorage().should('exist')

    })

})