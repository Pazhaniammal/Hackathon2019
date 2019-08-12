import {browser} from "protractor";
import {LoginPage} from '../page/loginPage';
import { SchemaPage } from "../page/schemaPage";
import { HomePage } from "../page/homePage";
import { CreatSchemaPage } from "../page/createSchemaPage";

describe("Login test", function() {
    let loginPage = new LoginPage();
    let createSchemaPage = new CreatSchemaPage();

  beforeAll( function() {
    loginPage.loginIntoApplication(browser.params.superAdminEmailAddress,browser.params.superAdminPassword);
  });

  it('1@Click Create Scheme', async function() {
   let homePage = new HomePage();
   await homePage.clickMenuLink("Schemas");
   
  })
  
  it('2@Create new schema', async () => {
    new SchemaPage().clickCreateNewSchema();
   })

   it('2@Fill formName', async function() {
       createSchemaPage.fillPrefix("test1213");
       createSchemaPage.fillFormName("test1213");
       createSchemaPage.fillDropdown("form_type","Ticket");
       createSchemaPage.fillDropdown("template_type","Application Form");
       createSchemaPage.fillDropdown("data_type","Instance");
       createSchemaPage.dragAndDrop("Text Field");
       createSchemaPage.dragAndDrop("Number");
       browser.sleep(4000)

       createSchemaPage.clickCreateForm();

  })
})