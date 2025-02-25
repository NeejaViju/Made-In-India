describe('Made in India Navigation Test > Homepage', () => {
  
    beforeEach(() => {
        cy.log('Step 1: Visit the homepage');
        cy.visit('/'); 

        cy.log('Step 2: Verify the homepage loads correctly');
        cy.url().should('include', 'my-site');
        cy.get('nav', { timeout: 10000 }).should('be.visible'); 
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
        cy.xpath("//span[text()='Contact']", { timeout: 10000 }) 
          .should('be.visible') 
          .should('have.text', 'Contact'); 

        cy.log('Step 6.2: Click on "Contact Us"');
        cy.xpath("//span[text()='Contact']", { timeout: 10000 })
          .should('be.visible') 
          .click(); 

        cy.log('Step 6.3: Verify it remains on the homepage');
        cy.url().should('include', 'my-site');
    });

});

describe('Made in India Navigation Test > About Us', () => {
  
  beforeEach(() => {
      cy.log('Step 1: Visit the About Us page');
      cy.visit('/blank');

      cy.log('Step 2: Verify the About Us loads correctly');
      cy.url().should('include', 'blank');
      cy.get('nav', { timeout: 10000 }).should('be.visible'); 
  });

  it('Step 3: Navigate to Homepage and verify URL', () => {
    cy.log('Step 3.1: Verify "HomePage" text before clicking');
    cy.xpath("//span[text()='Home ']").should('have.text', 'Home ');

    cy.log('Step 3.2: Click on "Home "');
    cy.xpath("//span[text()='Home ']").first().click(); 

    cy.log('Step 3.3: Verify the URL');
    cy.url().should('include', '/');
  });

  it('Step 4: Navigate to Insights page and verify URL', () => {
    cy.log('Step 4.1: Verify "Insights" text before clicking');
    cy.xpath("//span[text()='Insights']").should('have.text', 'Insights');

    cy.log('Step 4.2: Click on "Insights"');
    cy.xpath("//span[text()='Insights']").first().click();

    cy.log('Step 4.3: Verify the URL contains "/blank-2"');
    cy.url().should('include', '/blank-2');
  });

  it('Step 5: Click on Categories > Kitchenware and verify it redirects correctly', () => {
    cy.log('Step 5.1: Verify "Categories" text before hovering');
    cy.xpath("//span[text()='Categories']").should('have.text', 'Categories');
  
    cy.log('Step 5.2: Hover over "Categories" to open the submenu');
    cy.xpath("//span[text()='Categories']").trigger('mouseover');
  
    cy.log('Step 5.3: Wait for submenu to appear');
    cy.wait(1000); // Small delay to let menu appear
  
    cy.log('Step 5.4: Click on "Kitchenware" from the submenu');
    cy.xpath("//span[text()='kitchenware']")
      .click({ force: true }); // Forces click even if Cypress thinks it's hidden
  
    cy.log('Step 5.4: Verify it redirects to the homepage > Categories section');
    cy.url().should('eq', Cypress.config().baseUrl);
  });
  
  it('Step 6: Click on Contact Us and verify it redirects to the homepage', () => {
      cy.log('Step 6.1: Verify "Contact" text before clicking');
      cy.xpath("//span[text()='Contact']", { timeout: 10000 }) 
        .should('have.text', 'Contact'); 

      cy.log('Step 6.2: Click on "Contact Us"');
      cy.xpath("//span[text()='Contact']", { timeout: 10000 })
        .should('be.visible') 
        .click(); 

      cy.log('Step 6.3: Verify it remains on the homepage');
      cy.url().should('include', 'my-site');
  });

});

describe('Made in India Navigation Test > Insights', () => {
  
  beforeEach(() => {
      cy.log('Step 1: Visit the Insights page');
      cy.visit('/blank-2');

      cy.log('Step 2: Verify the Insights loads correctly');
      cy.url().should('include', 'blank-2');
      cy.get('nav', { timeout: 10000 }).should('be.visible'); 
  });

  it('Step 3: Navigate to Homepage and verify URL', () => {
    cy.log('Step 3.1: Verify "HomePage" text before clicking');
    cy.xpath("//span[text()='Home ']").should('have.text', 'Home ');

    cy.log('Step 3.2: Click on "Home "');
    cy.xpath("//span[text()='Home ']").first().click(); 

    cy.log('Step 3.3: Verify the URL');
    cy.url().should('include', '/');
  });

  it('Step 4: Navigate to About Us page and verify URL', () => {
    cy.log('Step 4.1: Verify "About Us" text before clicking');
    cy.xpath("//span[text()='About us']").should('have.text', 'About us');

    cy.log('Step 4.2: Click on "About Us"');
    cy.xpath("//span[text()='About us']").first().click(); 

    cy.log('Step 4.3: Verify the URL contains "/blank"');
    cy.url().should('include', '/blank');
  });

  it.skip('Step 5: Click on Categories > Kitchenware and verify it redirects correctly', () => {
    cy.log('Step 5.1: Verify "Categories" text before hovering');
    cy.xpath("//span[text()='Categories']").should('have.text', 'Categories');
  
    cy.log('Step 5.2: Hover over "Categories" to open the submenu');
    cy.xpath("//span[text()='Categories']").trigger('mouseover');
  
    cy.log('Step 5.3: Wait for submenu to appear');
    cy.wait(1000); // Small delay to let menu appear
  
    cy.log('Step 5.4: Click on "Kitchenware" from the submenu');
    cy.xpath("//span[text()='kitchenware']")
      .click({ force: true }); // Forces click even if Cypress thinks it's hidden
  
    cy.log('Step 5.4: Verify it redirects to the homepage > Categories section');
    cy.url().should('eq', Cypress.config().baseUrl);
  });
  
  it('Step 6: Click on Contact Us and verify it redirects to the homepage', () => {
      cy.log('Step 6.1: Verify "Contact" text before clicking');
      cy.xpath("//span[text()='Contact']", { timeout: 10000 }) 
        .should('have.text', 'Contact'); 

      cy.log('Step 6.2: Click on "Contact Us"');
      cy.xpath("//span[text()='Contact']", { timeout: 10000 })
        .should('be.visible') 
        .click(); 

      cy.log('Step 6.3: Verify it remains on the homepage');
      cy.url().should('include', 'my-site');
  });

});

