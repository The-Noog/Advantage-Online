describe('Página de cadastro', () => {
  it('Deve realizar a compra de um laptop da cor vermelho, colocar no carrinho, realizar o login e fazer a compra do produto', () => {

    // Visitando a página
    cy.visit('https://advantageonlineshopping.com/#/');
    cy.wait(4000);

    // Clicando na aba de laptops
    cy.get('#laptopsImg').click();

    // Selecionando o HP CHROMEBOOK 14 G1(ES)
    cy.get(':nth-child(8) > :nth-child(4) > .productName').click();

    // Selecionando a cor Vermelha
    cy.get('[ng-show="firstImageToShow"] > .RED').click();

    // Adicionando ao carrinho
    cy.get('.fixedBtn > .roboto-medium').click();

    // Realizando o Checkout
    cy.get('li > #toolTipCart > :nth-child(1) > table > tfoot > :nth-child(2) > td > #checkOutPopUp').click();
  
    cy.get(':nth-child(1) > .secForm > [a-hint="Username"] > .inputContainer > .ng-pristine').type('PedroHenrique')

    // Digitando a Senha
    cy.get(':nth-child(1) > .secForm > [a-hint="Password"] > .inputContainer > .ng-pristine').type('Teste@@123')

    // Clicando no login
    cy.get('#login_btn').click();

    // Clicando em next
    cy.get('.mobileBtnHandler > #next_btn').click();


    describe('', () => {

      // Usando o Cartão de Crédito
      cy.get('[data-ng-click="imgRadioButton = 2; checkedRadio = 2"] > input').click();
      cy.get('#pay_now_btn_MasterCredit').click();

    });



  })
})