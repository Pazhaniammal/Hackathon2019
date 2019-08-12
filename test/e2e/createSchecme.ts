import {browser} from "protractor";
import {LoginPage} from '../page/loginPage';
import { SchemaPage } from "../page/schemaPage";
import { HomePage } from "../page/homePage";
import { CreatSchemaPage } from "../page/createSchemaPage";
import { OrganizationPage } from "../page/OrganizationPage";
import { CreateOrganization } from "../page/createOrganization";
import { CreateUserPage } from "../page/createUserPage";
import { UserPage } from "../page/UserPage";
import { ValidateForm } from "../page/validate-form-page";

describe("Login test", function() {
    let loginPage = new LoginPage();
    let createSchemaPage = new CreatSchemaPage();
    let homePage = new HomePage();
    let validateForm = new ValidateForm();

  beforeAll( function() {
    loginPage.loginIntoApplication(browser.params.superAdminEmailAddress,browser.params.superAdminPassword);
  });

  it('1@Click Organization page', async function() {
    await homePage.clickMenuLink("Organization");
   })
   
   it('2@Create new Organization', async () => {
    await new OrganizationPage().clickCreateNewOrganization();
    await new CreateOrganization().createNewOrganization("Apollo", "apollo@gmail.com", "HMS");

    })
       
  it('3@Go to User Page', async function() {
    await homePage.clickMenuLink("Users");
  })
   
   it('4@Create new User', async () => {
      let userPage = new UserPage();
      userPage.clickCreateNewUser();
      let create = new CreateUserPage();
      create.createNewUser("nijin","qa","jin","nijin","wipro", "superuser", "test")
    })

  
  it('1@Click Create Scheme', async function(done) {
   let homePage = new HomePage();
   await homePage.clickMenuLink("Schemas");
   browser.sleep(3000);
   done();
  })
  
  it('2@Create new schema', async () => {
    new SchemaPage().clickCreateNewSchema();
   })

   it('2@Fill formName', async function() {
       createSchemaPage.fillPrefix("TESTFORM");
       createSchemaPage.fillFormName("test1213");
       createSchemaPage.fillDropdown("form_type","Ticket");
       createSchemaPage.fillDropdown("template_type","Application Form");
       createSchemaPage.fillDropdown("data_type","Instance");
       browser.sleep(2000);
   })

   it('3@Add Form text field', async function() {
       createSchemaPage.dragAndDrop("Text Field");
       createSchemaPage.fillLabelName("Name");
       createSchemaPage.clickSaveButton();
   })

   it('4@Add Form Number field', async function() {
    createSchemaPage.dragAndDrop("Number");
    createSchemaPage.fillLabelName("Contact number");
    createSchemaPage.clickSaveButton();

  })

  it('5@Add Radio button field', async function() {
       createSchemaPage.dragAndDrop("Radio");
       createSchemaPage.fillLabelName("Gender");
       createSchemaPage.addRadioButtonName("Male", "0");
       createSchemaPage.clickAddAnotherRow();
       createSchemaPage.addRadioButtonName("Female", "1");
       createSchemaPage.clickSaveButton();

  })

  
  it('6@Add text area field', async function() {
    createSchemaPage.dragAndDrop("Text Area");
    createSchemaPage.fillLabelName("Address");
    createSchemaPage.clickSaveButton();
  })

  it('6@Create new Form', async function() {
    createSchemaPage.clickCreateForm();
    new SchemaPage().clickLogout();

  })

  it('2@check the form', async function() {
    await validateForm.clickSchemaToCheckForm("kiranForm");
    browser.sleep(4000);
    expect(validateForm.fieldIsPresent("firstName")).toBeTruthy();
    expect(validateForm.fieldIsPresent("contact")).toBeTruthy();
  })
   
})