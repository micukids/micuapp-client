describe ('Micuapp Register test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })

      it('A registered user can log in into micuapp', function () {
        let email = 'gaby@gmail.com'
        let password = 'password'
    
        cy.visit('http://localhost:3000/login')
    
        cy.get('input[name=email]').type(email)
    
        cy.get('input[name=password]').type(`${password}{enter}`)
    
        cy.url().should('include', 'http://localhost:3000/')
        
        cy.getAllLocalStorage().should('exist')
    
        cy.get('.swal-modal').contains('Success')
        
        cy.get('.swal-button').click()
        })

        it('A logged user can play flipcards micuapp', function () {
            cy.get('[data-test = buttonflipcard]').click()
            cy.visit('http://localhost:3000/flipcard')

        })

        /*it('clicking + fires a change event with the incremented value', () => {
            const onChangeSpy = cy.spy().as('onChangeSpy')
            cy.mount(<Stepper onChange={onChangeSpy} />)
            
            cy.get('@onChangeSpy').should('have.been.calledWith', 1)
          })*/

    })