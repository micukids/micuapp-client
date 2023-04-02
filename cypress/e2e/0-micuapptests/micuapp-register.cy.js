describe ('Micuapp Register test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })

      it('A user can register into micuapp', function () {
        let newname = 'Maria'
        let newparent = 'Jose'
        let newemail = 'jose@gmail.com'
        let newpassword = 'password'
    
        cy.visit('http://localhost:3000/signin')

        cy.get('input[name=name]').type(newname)
        cy.wait(1000)
        cy.get('input[name=parent]').type(newparent)
        cy.wait(1000)
        cy.get('input[name=email]').type(newemail)
        cy.wait(1000)
        cy.get('input[name=password]').type(`${newpassword}{enter}`)
        cy.wait(1000)
        cy.getAllLocalStorage().should('exist')
        cy.wait(1000)
        cy.get('.swal-modal').contains('Te has registrado correctamente')
        cy.wait(1000)
        cy.get('.swal-button').click()
        cy.wait(1000)
        cy.url().should('include', 'http://localhost:3000/')
        })

    })
    