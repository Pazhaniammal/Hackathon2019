import {by, element, browser} from "protractor";
import { BasePage } from "./basePage";
export class LoginPage extends BasePage{
  emailAddress = element(by.id('email'));
  password = element(by.id('password'));
  loginButton = element(by.css('[type="submit"]'));

  /**
   * login into application  
   * @param email 
   * @param password 
   */
  async loginIntoApplication(email : string, password : string) {
    browser.waitForAngularEnabled(false);
    await browser.get(browser.params.baseUrl);
    this.emailAddress.sendKeys(email);
    console.log( email + "is entered");
    this.password.sendKeys(password);
    console.log( password + "is entered");
    await this.loginButton.isEnabled();
    this.loginButton.click();
    browser.sleep(3000);
    console.log("Logged in successfully")
  }

}