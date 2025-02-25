describe('Made in India - Homepage > Content', () => {
    beforeEach(() => {
        cy.log('Step 1: Visit the Homepage');
        cy.visit('/'); 

        cy.log('Step 2: Verify the homepage loads correctly');
        cy.url().should('include', 'my-site');
        cy.get('nav', { timeout: 10000 }).should('be.visible'); 
    });

    it ('Step 3: HomePage >  Header Section', () => {

        cy.log('Step 3.1: Verify "Header" section');
        cy.xpath("//h2[text()='Elevating Nordics Commerce']").should('be.visible');

    });

    it('Step 4: HomePage >  Direct Access to Indian Manufactures ', () => {

        cy.log('Step 4.1: Verify "Direct Access to Indian Manufactures" section');
        cy.xpath("(//h3[@class='font_3 wixui-rich-text__text'])[3]").should('be.visible');

    });

    it.skip('Step 5: HomePage > Comprehensive Sourcing support section', () => {

        cy.log('Step 5.1: Verify "Comprehensive Sourcing support" section');
        cy.xpath("//h3[text()='Comprehensive Sourcing&nbsp;support&nbsp;']", { timeout: 10000 }).should('be.visible');
        
    });

    it('Step 6: HomePage > Expert Guidance Section', () => {

        cy.log('Step 6.1: Verify "Expert Guidance" section');
        cy.xpath("//h3[text()='Expert Guidance']").should('be.visible');
    });

    it('Step 7: HomePage > Competitive Pricing Section', () => {

        cy.log('Step 7.1: Verify "Competitive pricing" section');
        cy.xpath("//h3[text()='Competitive pricing']").should('be.visible');
    });

    it('Step 8: HomePage > Visit our catelogue Section', () => {

        cy.log('Step 8.1: Verify "Visit our catelogue" section');
        cy.xpath("//h2[text()='Visit our catelogue']").should('be.visible');
    });

    it('Step 9: HomePage > Our Product certifications and Associations', () => {

        cy.log('Step 9.1: Verify "Our Product certifications and Associations');
        cy.xpath("//span[text()='Our Product certifications and Associations']").should('be.visible');
    });

    it('Step 10: HomePage > Contact Us', () => {

        cy.log('Step 5.1: Verify "Contact Us" section');
        cy.xpath("//h3[text()='Lets start a conversation!']").should('be.visible');
    });

});
