import {browser} from "protractor";
import {LoginPage} from '../page/loginPage';
import { SchemaPage } from "../page/schemaPage";

describe("Login test", function() {
    let loginPage = new LoginPage();

  beforeAll( function() {
    loginPage.loginIntoApplication(browser.params.superAdminEmailAddress,browser.params.superAdminPassword);
  });

  it('1@simple test', async function(done) {
      done();
      new SchemaPage().clickCreateNewSchema();
  })
  
})