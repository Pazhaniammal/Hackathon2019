import {browser} from "protractor";
import {LoginPage} from '../page/loginPage';
import { SchemaPage } from "../page/schemaPage";
import { HomePage } from "../page/homePage";
import { CreatSchemaPage } from "../page/createSchemaPage";
import { OrganizationPage } from "../page/organizationPage";
import { CreateOrganization } from "../page/createOrganization";
import { CreateUserPage } from "../page/createUserPage";
import { UserPage } from "../page/userPage";
import { ValidateForm } from "../page/validate-form-page";
import * as faker from 'faker';
import { BasePage } from "../page/basePage";
import { Constants } from "../util/constants";
import { DataHolder } from "../util/dataHolder";

describe("Validate Schema datas test", function() {
    let loginPage = new LoginPage();
    let homePage = new HomePage();
    let schemaPage = new SchemaPage();

 
  it('1@Logged in as first user', async function() {
    let userName = DataHolder.userData.get("first_user_email")
    let password = DataHolder.userData.get("first_user_password")
    loginPage.loginIntoApplication(userName, password);
   })

   it('2@Verify schema created by this user should be displayed', async function() {
    let firstSchema = DataHolder.userData.get("first_schema_name")
    let secondSchema = DataHolder.userData.get("second_schema_name")
    await homePage.clickMenuLink(Constants.schemas);
    await schemaPage.assertSchemaIsPresent(firstSchema);
    await schemaPage.assertSchemaIsNotPresent(secondSchema);

   })

   it('3@Logout', async() => {
       await homePage.clickLogout();
   })
   it('4@Logged in as second user', async function() {
    let userName = DataHolder.userData.get("second_user_email")
    let password = DataHolder.userData.get("second_user_password")
    await loginPage.loginIntoApplication(userName, password);
   })

   it('5@Verify schema created by this user should be displayed', async function() {
    let firstSchema = DataHolder.userData.get("first_schema_name")
    let secondSchema = DataHolder.userData.get("second_schema_name");
    await homePage.clickMenuLink(Constants.schemas);
    browser.sleep(5000);
    await schemaPage.assertSchemaIsPresent(secondSchema);
    // await schemaPage.assertSchemaIsNotPresent(firstSchema);

   })

})
