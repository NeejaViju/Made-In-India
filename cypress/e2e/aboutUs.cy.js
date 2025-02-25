describe('Made in India - About Us > Content', () => {
    beforeEach(() => {
        cy.log('Step 1: Visit the About Us page');
        cy.visit('/blank'); 

        cy.log('Step 2: Verify the About Us page loads correctly');
        cy.url().should('include', '/blank');
        cy.get('h1', { timeout: 10000 }).should('be.visible'); // Ensure the page is loaded
    });

    it ('Step 3: About Us >  Header Section', () => {

        cy.log('Step 3.1: Verify "Header" section');
        cy.xpath("//h1[text()='Heading 1']").should('be.visible');

    });

    it('Step 4: About Us >  Our Mission section ', () => {

        cy.log('Step 4.1: Verify "Our Mission" section');
        cy.xpath("//h3[text()='Our Mission']").should('be.visible');

    });

    it('Step 5: About Us >  Our Vision Section', () => {

        cy.log('Step 5.1: Verify "Our Vision" section');
        cy.xpath("//h4[text()='Our Vision']").should('be.visible');
    });

    it('Step 6: About Us >  Validate Core Values sections', () => {
        cy.log('Step 6.1: Verify "Our Core Values" header');
        cy.xpath("//h3[text()='Our Core Values']").should('be.visible');

        cy.log('Step 6.2: Verify individual core values');
        const coreValues = ['Integrity', 'Innovation', 'Customer Focus', 'Teamwork'];
        coreValues.forEach(value => {
            cy.xpath(`//h3[text()='${value}']`).should('be.visible');
        });
    });

    it('Step 7: About Us >  Sourcing LifeCycle section', () => {
        cy.log('Step 7.1: Verify "Sourcing LifeCycle" text');
        cy.xpath("//span[text()='Sourcing LifeCycle']").should('be.visible');
    });
});
