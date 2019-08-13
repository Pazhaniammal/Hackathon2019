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
import { async } from "q";
import * as faker from 'faker';
import { BasePage } from "../page/basePage";
import { Constants } from "../util/constants";
import { DataHolder } from "../util/dataHolder";


describe("Create second Organization test", function() {
    let loginPage = new LoginPage();
    let basePage = new BasePage();
    let createSchemaPage = new CreatSchemaPage();
    let homePage = new HomePage();
    let validateForm = new ValidateForm();
    let currentTime = new Date().getTime();
    let organizationName = "org2_" + (currentTime);
    let organizationEmail = "org2_" + (currentTime)+ ("@gmail.com");
    let organizationApplication = "app2_"+ (currentTime);
    let userFirstName = "fn2_"+  (currentTime);
    let userlastName = "ln2_"+ (currentTime);
    let userId = "user2_"+ (currentTime);
    let userEmail = "user2_"+ (currentTime)+("@gmail.com");
    let userPassword = "pw2_"+ (currentTime);
    let prefixValue = faker.name.firstName(6);
    let textFieldLabelName = "Patient Name";
    let textFieldLabelName1 = "Age";
    let textFieldLabelName2 = "Height";
    let textFieldLabelName3 = "Weight";
    let textFieldLabelName4 = "Blood Pressure";

  beforeAll( function() {
    loginPage.loginIntoApplication(browser.params.superAdminEmailAddress,browser.params.superAdminPassword);
  })

  it('1@Go to Organization page', async function() {
    await homePage.clickMenuLink(Constants.Organization);
   })
   
   it('2@Create new Organization', async () => {
    await new OrganizationPage().clickCreateNewOrganization();
    await new CreateOrganization().createNewOrganization(organizationName, organizationEmail, organizationApplication);
    })
  
  it('3@Go to User Page', async () => {
    await homePage.clickMenuLink(Constants.Users);
  })
   
   it('4@Create new User', async () => {
      let userPage = new UserPage();
      await userPage.clickCreateNewUser();
      await new CreateUserPage().createNewUser(userFirstName,userlastName,userId,userEmail,organizationName, "superuser",userPassword)
      await browser.sleep(2000);
    })

    it('5@Logout', async() => {
        await homePage.clickLogout();
    })

    it('6@Login as first organisation', async() => {
      console.log("userEmail" +userEmail)
     await loginPage.loginIntoApplication(userEmail, userPassword);
    })  

  it('7@Click  Scheme Link', async() => {
   await homePage.clickMenuLink(Constants.schemas);
  })
  
  it('8@Create new schema Link', async () => {
    await new SchemaPage().clickCreateNewSchema();
   })

  it('9@Fill form name', async () => {
    console.log("firstName------ " ,prefixValue);
    await createSchemaPage.fillPrefix(prefixValue);
    await createSchemaPage.fillFormName(prefixValue);
    // await createSchemaPage.fillDropdown(Constants.form_type,"Ticket");
    // await createSchemaPage.fillDropdown(Constants.template_type,"Application Form");
    // await createSchemaPage.fillDropdown(Constants.data_type,"Instance");  
 })

    it('10@Add Form text field', async function() {
        await createSchemaPage.dragAndDrop(Constants.text_field);
        await createSchemaPage.fillLabelName(textFieldLabelName);
        createSchemaPage.clickSaveButton();
        await createSchemaPage.dragAndDrop(Constants.text_field);
        await createSchemaPage.fillLabelName(textFieldLabelName1);
        createSchemaPage.clickSaveButton();
        await createSchemaPage.dragAndDrop(Constants.text_field);
        await createSchemaPage.fillLabelName(textFieldLabelName2);
        createSchemaPage.clickSaveButton();
        await createSchemaPage.dragAndDrop(Constants.text_field);
        await createSchemaPage.fillLabelName(textFieldLabelName3);
        createSchemaPage.clickSaveButton();
        await createSchemaPage.dragAndDrop(Constants.text_field);
        await createSchemaPage.fillLabelName(textFieldLabelName4);
        createSchemaPage.clickSaveButton();
   })


  it('14@Create new Form', async function() {
    await createSchemaPage.clickCreateForm();
    browser.sleep(5000);

  })

  it('13@check the form is present', async function() {
    await validateForm.clickSchemaToCheckForm(prefixValue);
    browser.sleep(4000);
    expect(validateForm.verifyVisibilityOfLabelName(textFieldLabelName)).toBeTruthy();
    expect(validateForm.verifyVisibilityOfLabelName(textFieldLabelName1)).toBeTruthy();
    expect(validateForm.verifyVisibilityOfLabelName(textFieldLabelName2)).toBeTruthy();
    expect(validateForm.verifyVisibilityOfLabelName(textFieldLabelName3)).toBeTruthy();
    expect(validateForm.verifyVisibilityOfLabelName(textFieldLabelName4)).toBeTruthy();

  })
   
  it('14@Logout', async() => {
    await validateForm.clickLogout();
    DataHolder.userData.set("second_user_email", userEmail);
    DataHolder.userData.set("second_user_password", userPassword);
    DataHolder.userData.set("second_schema_name", prefixValue);
    console.log(DataHolder.userData.get("first_user_email"));
  });
   
})