import {CreateOrganization} from '../page/createOrganization';
import {element, by, browser} from 'protractor';
  
export class Organization {
    createOrganization = new CreateOrganization();
    oraganizationTab = element(by.xpath(`//a[@href='/organization']`));
    oraganizationCreateButton = element(by.xpath(`//button[contains(text(),'Create Organization')]`));

    async NewOrganization(){
        var currentTime = new Date();
        var randomNumber = currentTime.getSeconds() + '' + currentTime.getMilliseconds() + '';
        var oraganizationName = 'Ideas2it Hackathon' + randomNumber; 
        var oraganizationEmail = 'hackathon' + randomNumber + '@test.com'; 
        var oraganizationApplicationName = 'Ideas2it Hackathon Application ' + randomNumber;
        this.oraganizationTab.click();
        this.oraganizationCreateButton.click();
        browser.sleep(2000);
        this.oraganizationCreateButton.createNewOrganization(oraganizationName, oraganizationEmail, oraganizationApplicationName); 
        }
}
