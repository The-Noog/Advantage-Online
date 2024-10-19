describe('API Test - Advantage Online Shopping', () => {
    it('GET - Verifica o produto "Beats Studio 2 Over-Ear Matte Black Headphones"', () => {
      cy.request({
        method: 'GET',
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products',
      }).then((response) => {
        // Inspeciona o corpo da resposta no console
        console.log(response.body);
  
        // Valida o status code da resposta
        expect(response.status).to.eq(200);
      });
    });
  });

  describe('API Test - Advantage Online Shopping', () => {
    it('GET - Verifica o produto "Beats Studio 2 Over-Ear Matte Black Headphones"', () => {
      cy.request({
        method: 'GET',
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products',
      }).then((response) => {
        // Valida o status code da resposta
        expect(response.status).to.eq(200);
  
        // Acessa a lista de produtos corretamente (ajuste conforme a estrutura)
        const produtos = response.body.products; // Supondo que os produtos estejam em 'products'
  
        // Verifica se os produtos existem
        expect(produtos).to.be.an('array');
  
        // Procura o produto específico na lista
        const produto = produtos.find(item => item.productName === "Beats Studio 2 Over-Ear Matte Black Headphones");
  
        // Verifica se o produto foi encontrado
        expect(produto).to.exist;
  
        // Verifica se o nome do produto corresponde ao esperado
        expect(produto.productName).to.eq("Beats Studio 2 Over-Ear Matte Black Headphones");
      });
    });
  });