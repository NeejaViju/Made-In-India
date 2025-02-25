describe('Made in India - Insights > Content', () => {
    beforeEach(() => {
        cy.log('Step 1: Visit the Insights page');
        cy.visit('/blank-2'); 

        cy.log('Step 2: Verify the Insights page loads correctly');
        cy.url().should('include', '/blank-2');
    });

    it('Step 3: Verify Blog Post Title is Visible on Insights Page', () => {
        cy.log('Step 3.1: Verify the Blog Post Title is Present');
        cy.xpath("//h2[text()='Effektivitet i Varje Detalj: Optimizing Your Commercial Kitchen with Quality Tools']")
          .should('be.visible');
    });

    it('Step 4: Click on Blog Post Title and Verify Redirection', () => {
        cy.log('Step 4.1: Click on the Blog Post Title');
        cy.xpath("//h2[text()='Effektivitet i Varje Detalj: Optimizing Your Commercial Kitchen with Quality Tools']").click();

        cy.log('Step 4.2: Verify Redirection to Blog Post Page');
        cy.url().should('eq', Cypress.config().baseUrl + '/post/effektivitet-i-varje-detalj-optimizing-your-commercial-kitchen-with-quality-tools');

    });
    it('Step 4: Verify Blog Post Title on the Blog Page', () => {
        
        cy.log('Step 4.1: Visit the Blog Post Page Directly');
        cy.visit('/post/effektivitet-i-varje-detalj-optimizing-your-commercial-kitchen-with-quality-tools');

        cy.log('Step 4.2: Verify the Blog Post Title is Visible on the Page');
        cy.xpath("//span[text()='Effektivitet i Varje Detalj: Optimizing Your Commercial Kitchen with Quality Tools']")
          .should('be.visible');
    });
});
