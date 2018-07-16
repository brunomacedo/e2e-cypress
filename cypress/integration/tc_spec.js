beforeEach(() => {
  cy.visit('https://dieta.uol.com.br/')
});

describe('Open website', () => {
  describe('Validate elements', () => {
    it('should assert that title is correct', () => {
      cy.get('.uol-dieta #topo h1')
        .contains('Comece a perder peso com o UOL Dieta')
    });
  });

  describe('Validate form', () => {
    it('should assert that text "Ver Resultado" exist on form', () => {
      cy.get('.form-avaliacao .btn[type="submit"]')
        .contains('Ver resultado')
    })

    it('should click to send form and return', () => {
      cy.get('[type="submit"]').click()
    });

    it('should submit form', () => {
      cy.log('filling out "peso"')
      cy.get('[name="peso"]').type('90')

      cy.log('filling out "altura"')
      cy.get('[name="altura"]').type('1,90')

      cy.log('filling out "sexo"')
      cy.get('[name="sexo"]').select('Feminino')

      cy.log('filling out "nome"')
      cy.get('[name="nome"]').type('Jessika')

      cy.log('filling out "nome"')
      cy.get('[name="email"]').type('jessika@uol.com.br')

      cy.log('submitting form')
      cy.get('form[action="resultado.html"]').submit()
    });
  });
});
