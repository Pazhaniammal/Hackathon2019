import {browser} from "protractor";
import {LoginPage} from '../page/loginPage';
import {Organization} from '../e2e/organization';

describe("Login test", function() {
    let loginPage = new LoginPage();
    let organization = new Organization();

  beforeAll( function() {
    loginPage.loginIntoApplication(browser.params.superAdminEmailAddress,browser.params.superAdminPassword);
  });

  it('Create Organization', async function(done) {
    organization.NewOrganization();
  })
})