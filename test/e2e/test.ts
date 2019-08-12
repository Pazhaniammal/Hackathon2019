import {browser} from "protractor";
import {LoginPage} from '../page/loginPage';
import { SchemaPage } from "../page/schemaPage";
import { BasePage } from "../page/basePage";

describe("Login test", function() {
    let loginPage = new LoginPage();

  beforeAll( function() {
    loginPage.loginIntoApplication(browser.params.superAdminEmailAddress,browser.params.superAdminPassword);
  });

  it('1@Click Schema icon from Home page', async function(done) {
    
      new SchemaPage().clickCreateNewSchema();
  })
})