describe('Open Dieta - Site', () => {
  describe('Title', () => {
    it('should assert that title is correct', () => {
      cy.visit('https://dieta.uol.com.br/')

      cy.get('.uol-dieta #topo h1')
        .contains('Comece a perder peso com o UOL Dieta')
    });
  });

  describe('Avaliação de peso - Click', () => {
    it('should assert that the item Resultado exist on form', () => {
      cy.contains('Ver resultado').click()
    })
  });
});
