import {element, by, browser} from "protractor";
import { BasePage } from "./basePage";

export class CreateUserPage extends BasePage{
    clickCreateUser = element(by.xpath("//button[text()='Create New User']"));
    firstName = element(by.id('first_name'));
    lastName = element(by.id('last_name'));
    userName = element(by.id('username'));
    email = element(by.id('email'));
    organizations = element(by.id('organizations'));
    roles = element(by.id('user_roles'));
    password = element(by.id('password'));
    clickSubmit = element(by.id('submit'));

    async createNewUser(userFirstName: string, userLastName: string, userId: string, 
        userEmail: string, userOrganization: string, userRole: string, userPassword: string) {

        this.firstName.sendKeys(userFirstName);
        this.lastName.sendKeys(userLastName);
        this.userName.sendKeys(userId);
        this.email.sendKeys(userEmail);
        this.selectDropDownOptionById("organizations", userOrganization);
        this.selectDropDownOptionById("user_roles", userRole);

        this.password.sendKeys(userPassword);
        

    }
}


