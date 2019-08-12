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
import { async } from "q";

describe("Create Organization test", function() {
    let loginPage = new LoginPage();
    let createSchemaPage = new CreatSchemaPage();
    let homePage = new HomePage();
    let validateForm = new ValidateForm();
    let currentTime = new Date().getTime();
    let organizationName = "org" + (currentTime);
    let organizationEmail = "org" + (currentTime)+ ("@gmail.com");
    let organizationApplication = "app"+ (currentTime);
    let userFirstName = "fn"+  (currentTime);
    let userlastName = "ln"+ (currentTime);
    let userId = "user"+ (currentTime);
    let userEmail = "user"+ (currentTime)+("@gmail.com");
    let userPassword = "pw"+ (currentTime);
    let formName = "test_" + currentTime;

  beforeAll( function() {
    console.log("name" + currentTime)
    console.log("name" + organizationName)
    loginPage.loginIntoApplication(browser.params.superAdminEmailAddress,browser.params.superAdminPassword);
  });

  it('1@Go to Organization page', async function() {
    await homePage.clickMenuLink("Organization");
   })
   
   it('2@Create new Organization', async () => {
    await new OrganizationPage().clickCreateNewOrganization();
    await new CreateOrganization().createNewOrganization(organizationName, organizationEmail, organizationApplication);

    })
       
  it('3@Go to User Page', async function() {
    await homePage.clickMenuLink("Users");
  })
   
   it('4@Create new User', async () => {
      let userPage = new UserPage();
      await userPage.clickCreateNewUser();
      await new CreateUserPage().createNewUser(userFirstName,userlastName,userId,userEmail,organizationName, "superuser",userPassword)
    })

    it('5@Logout', async() => {
      await homePage.clickLogout();
    })

    it('6@Login as first organisation', async() => {
      console.log("userEmail" +userEmail)
     await loginPage.loginIntoApplication(userEmail, userPassword);
    })  

  it('7@Click  Scheme Link', async() => {
   await homePage.clickMenuLink("Schemas");
  })
  
  it('8@Create new schema Link', async () => {
    await new SchemaPage().clickCreateNewSchema();
   })


  it('9@Fill form name', async () => {
    createSchemaPage.fillPrefix("SCWIPRO");
    console.log("formName is --- " + formName)
    createSchemaPage.fillFormName(formName);
    createSchemaPage.fillDropdown("form_type","Ticket");
    createSchemaPage.fillDropdown("template_type","Application Form");
    createSchemaPage.fillDropdown("data_type","Instance");  
 })

    it('10@Add Form text field', async function() {
        await createSchemaPage.dragAndDrop("Text Field");
       createSchemaPage.fillLabelName("Name");
       createSchemaPage.clickSaveButton();
   })


    it('11@Add Form Number field', async function() {
    await createSchemaPage.dragAndDrop("Number");
    createSchemaPage.fillLabelName("Contact number");
    createSchemaPage.clickSaveButton();

  })

    it('12@Add Radio button field', async function() {
       await createSchemaPage.dragAndDrop("Radio");
       createSchemaPage.fillLabelName("Gender");
       createSchemaPage.addRadioButtonName("Male", "0");
       createSchemaPage.clickAddAnotherRow();
       createSchemaPage.addRadioButtonName("Female", "1");
       createSchemaPage.clickSaveButton();
    })
  
  it('13@Add text area field', async function() {
    await createSchemaPage.dragAndDrop("Text Area");
    createSchemaPage.fillLabelName("Address");
    createSchemaPage.clickSaveButton();
  })

  it('14@Create new Form', async function() {
    await createSchemaPage.clickCreateForm();
    browser.sleep(20000);
    new SchemaPage().clickLogout();

  })



  // it('2@check the form', async function() {
  //   await validateForm.clickSchemaToCheckForm("kiranForm");
  //   browser.sleep(4000);
  //   expect(validateForm.fieldIsPresent("firstName")).toBeTruthy();
  //   expect(validateForm.fieldIsPresent("contact")).toBeTruthy();
  // })
   
})