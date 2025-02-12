describe('Made in India Navigation Test', () => {
  
    beforeEach(() => {
        cy.log('Step 1: Visit the homepage');
        cy.visit('/'); 

        cy.log('Step 2: Verify the homepage loads correctly');
        cy.url().should('include', 'my-site');
        cy.get('nav', { timeout: 10000 }).should('be.visible'); // Ensure navigation is fully loaded
    });

    it('Step 3: Navigate to About Us page and verify URL', () => {
      cy.log('Step 3.1: Verify "About Us" text before clicking');
      cy.xpath("//span[text()='About us']").should('have.text', 'About us');

      cy.log('Step 3.2: Click on "About Us"');
      cy.xpath("//span[text()='About us']").first().click(); 

      cy.log('Step 3.3: Verify the URL contains "/blank"');
      cy.url().should('include', '/blank');
    });

    it('Step 4: Navigate to Insights page and verify URL', () => {
      cy.log('Step 4.1: Verify "Insights" text before clicking');
      cy.xpath("//span[text()='Insights']").should('have.text', 'Insights');

      cy.log('Step 4.2: Click on "Insights"');
      cy.xpath("//span[text()='Insights']").first().click();

      cy.log('Step 4.3: Verify the URL contains "/blank-2"');
      cy.url().should('include', '/blank-2');
    });

    it('Step 5: Click on Categories and verify it redirects to the homepage', () => {
      cy.log('Step 5.1: Verify "Categories" text before clicking');
      cy.xpath("//span[text()='Categories']").should('have.text', 'Categories');

      cy.log('Step 5.2: Click on "Categories"');
      cy.xpath("//span[text()='Categories']").first().click();

      cy.log('Step 5.3: Verify it remains on the homepage');
      cy.url().should('eq', Cypress.config().baseUrl + '/');
    });

    it('Step 6: Click on Contact Us and verify it redirects to the homepage', () => {
        cy.log('Step 6.1: Verify "Contact" text before clicking');
        cy.xpath("//span[text()='Contact']", { timeout: 10000 }) // Wait for element
          .should('be.visible') // Ensure it's visible
          .should('have.text', 'Contact'); // Assert text

        cy.log('Step 6.2: Click on "Contact Us"');
        cy.xpath("//span[text()='Contact']", { timeout: 10000 })
          .should('be.visible') // Re-check before clicking
          .click(); 

        cy.log('Step 6.3: Verify it remains on the homepage');
        cy.url().should('include', 'my-site');
    });

});
