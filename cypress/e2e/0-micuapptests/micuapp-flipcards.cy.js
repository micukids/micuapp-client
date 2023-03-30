describe ('User can play flipcards game', () => {

      it('User can play flipcards game', function () {
        let email = 'gaby@gmail.com'
        let password = 'password'
    
        cy.visit('http://localhost:3000/')

        cy.visit('http://localhost:3000/login')
    
        cy.get('input[name=email]').type(email)
    
        cy.get('input[name=password]').type(`${password}{enter}`)
    
        cy.url().should('include', 'http://localhost:3000/')
        
        cy.getAllLocalStorage().should('exist')
    
        cy.get('.swal-modal').contains('Success')
        
        cy.get('.swal-button').click()

        cy.visit('http://localhost:3000/')

        cy.get('[data=test-buttonflipcard]').click({force: true})

        cy.visit('http://localhost:3000/flipcard')

        cy.get('[data-test="flipcards-container"]').should('have.length', 1)

      /*it('clicking + fires a change event with the incremented value', () => {
          const onChangeSpy = cy.spy().as('onChangeSpy')
          cy.mount(<Stepper onChange={onChangeSpy} />)
          
          cy.get('@onChangeSpy').should('have.been.calledWith', 1)
        })*/

    })
})