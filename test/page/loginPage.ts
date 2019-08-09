import {by, element, browser} from "protractor";
export class LoginPage {
  emailAddress = element(by.id('email'));
  password = element(by.id('password'));
  loginButton = element(by.css('[type="submit"]'));

  async loginIntoApplication(email : string, password : string) {
    browser.waitForAngularEnabled(false);
    await browser.get(browser.params.baseUrl);
    this.emailAddress.sendKeys(email);
    this.password.sendKeys(password);
    await this.loginButton.isEnabled();
    this.loginButton.click();
    browser.sleep(5000);
  }
}