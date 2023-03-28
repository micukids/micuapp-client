describe ('Micuapp', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })

    it('Displays five flipcards micu items by default', () => {
        cy.get('[data-test="vowel-container"]').should('have.length', 1)
      }) 

    it('A registered user can log in into micuapp', function () {
    let email = 'gaby@gmail.com'
    let password = 'password'

    cy.visit('http://localhost:3000/login')

    cy.get('input[name=email]').type(email)

    cy.get('input[name=password]').type(`${password}{enter}`)

    cy.url().should('include', 'http://localhost:3000/')
    
    //cy.getCookie('auth_token').should('exist')
    cy.getAllLocalStorage().should('exist')

  //cy.get('res.data.status === 200').type(`{enter}`)



    // UI should reflect this user being logged in
    //cy.get('h1').should('contain', 'jane.lane')
    })

})