Cypress.Commands.add('visitpage',(selector , input) =>{
  
    cy.get(selector.navbar).should(input.visible);
    cy.get(selector.img).should(input.visible);
    
  });

   Cypress.Commands.add('signin',(selector , input) =>{     
       cy.get(selector.login).should(input.visible).click();
       cy.get(selector.signin_name).should(input.exist);
       cy.get(selector.signin_mail).should(input.exist);
       cy.get(selector.signin_btn).should(input.exist);
       cy.url().should('include', input.signin_page); 
   });

  Cypress.Commands.add('createaccount',(selector , input) =>{
      
      cy.get(selector.login).should(input.visible).click();
       cy.get(selector.signinname).type(input.myname);
       cy.get(selector.signinmail).type(input.mymail);
       cy.get(selector.signin_btn).click();
       cy.url().should('include', input.signupurl); 
       cy.get(selector.gender).check();
       cy.get(selector.password).type(input.mypassword);
       cy.get(selector.day).select(input.myday);
       cy.get(selector.month).select(input.mymonth);
       cy.get(selector.year).select(input.myyear);
       cy.get(selector.firstname).type(input.myfirstname);
       cy.get(selector.lastname).type(input.mylastname);
       cy.get(selector.company).type(input.company);
       cy.get(selector.address1).type(input.myaddress1);
       cy.get(selector.address2).type(input.myaddress2);
       cy.get(selector.country).select(input.mycountry);
       cy.get(selector.state).type(input.mystate); 
       cy.get(selector.city).type(input.mycity);
       cy.get(selector.zipcode).type(input.mypin);
       cy.get(selector.mobile).type(input.mymobile);
       cy.get(selector.createacc_btn).click();
 });

Cypress.Commands.add('login',(selector , input) =>{

    cy.get(selector.login).should(input.visible).click();
    cy.get(selector.loginmail).type(input.mymail);
    cy.get(selector.loginpassword).type(input.mypassword);
    cy.get(selector.loginbtn).click();
 });

Cypress.Commands.add('searchproduct',(selector , input) =>{
   
   cy.get(selector.product).should(input.visible).click()    
   cy.get(selector.search).type(input.tshirt);
   cy.get(selector.submitbtn).click();    
   cy.get(selector.featureitems).should(input.length, 0);  
   cy.get(selector.product1).should(input.visible).click();
   cy.url().should('include', input.product1url);
   cy.get(selector.addcartbtn).should(input.visible).click();
   cy.get(selector.okaybtn).should(input.visible).click();
 });

Cypress.Commands.add('review',(selector , input) =>{
   cy.get(selector.product).should(input.visible).click() 
   cy.get(selector.product2).should(input.visible).click() 
   cy.get(selector.reviewname).type(input.myname);
   cy.get(selector.reviewmail).type(input.mymail);
   cy.get(selector.review).type(input.myreview);
   cy.get(selector.btnreview).should(input.visible).click();
});

Cypress.Commands.add('contactus',(selector , input) =>{
   cy.get(selector.contact).should(input.visible).click()
   cy.get(selector.contactname).type(input.myname);
   cy.get(selector.contactmail).type(input.mymail);
   cy.get(selector.subject).type(input.mysub);
   cy.get(selector.messagge).type(input.mymsg);
   cy.get(selector.contactsubmit).should(input.visible).click();    
});

Cypress.Commands.add('multiplequantity',(selector , input) =>{ 
   cy.get(selector.product3).should(input.visible).click() 
   const quantityInputSelector = selector.quantity;
   cy.get(quantityInputSelector).type(input.increase);
   cy.get(quantityInputSelector).should(input.value, '2'); 
   cy.get(selector.addcartbtn).should(input.visible).click();      
});

Cypress.Commands.add('logout',(selector , input) =>{
 
  // cy.get(selector."a[href='/login']").should(input."be.visible").click();
//   cy.get(selector."input[data-qa='login-email']").type(input.'prem.rpk24@gmail.com');
//   cy.get(selector."input[placeholder='Password']").type(input.'Bike2739');
//   cy.get(selector."button[data-qa='login-button']").click(); 
   cy.get(selector.logout).should(input.visible).click()
   cy.url().should('include', input.signin_page);       
});


Cypress.Commands.add('deleteaccount',(selector , input) =>{
//   cy.get(selector."a[href='/login']").should(input."be.visible").click();
//   cy.get(selector."input[data-qa='login-email']").type(input.'prem.rpk24@gmail.com');
//   cy.get(selector."input[placeholder='Password']").type(input.'Bike2739');
//   cy.get(selector."button[data-qa='login-button']").click();
   cy.get(selector.deleteacc).should(input.visible).click();
   cy.url().should('include', input.deleteurl);
});

