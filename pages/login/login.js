import { expect } from "@playwright/test";
import { QA_ENV } from "../../config/qa.env";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.userNameInputField = page.locator('//input[@data-testid="username-input"]');
        this.passwordInputField = page.locator('//input[@data-testid="password-input"]');
        this.rememberMeCheckBox = page.locator('#remember-me');
        this.loginButton = page.locator('//button[@type="submit"]');
        this.clearButton = page.locator('[data-testid="clear-button"]');

        //locators for toggle password visibility
        this.passwordVisibilityToggle = page.locator('[id="toggle-password"]');

        //invalid login alert message
        this.invalidLoginMessage = page.locator('[id="login-alert"]');

        // viewer badge in the dashboard
        this.viewerBatch = page.locator('[id="viewer-badge"]');
    }

    async navigateToSite(){
        await this.page.goto(QA_ENV.baseURL);
    }

    async enterUserName(userName) {
        await this.userNameInputField.fill(userName);
    }

    async enterPassword(password) {
        await this.passwordInputField.fill(password);
    }


    async clickRememberMeCheck() {
        await this.rememberMeCheckBox.check();
    }

    async clickLoginBtn() {
        await this.loginButton.click();
    }

    async clickClearBtn() {
        await this.clearButton.click();
    }

    async login(username,password,rememberMe =false){
        await this.navigateToSite();
        await this.enterUserName(username);
        await this.enterPassword(password);

        if(rememberMe){
            await this.clickRememberMeCheck();
        }

       await this.clickLoginBtn();
    }

    async invalidLoginErrorValidation(errorMessage){
        await expect(this.invalidLoginMessage).toContainText(errorMessage);
        const error = await this.invalidLoginMessage.innerText();
        console.log(error);
    }

    async togglePasswordVisibility(password){ 
         await this.navigateToSite();
        await this.enterPassword(password);  
        await expect(this.passwordInputField).toHaveAttribute('type','password');
        console.log(this.passwordInputField);
        await this.passwordVisibilityToggle.click();
        await expect(this.passwordInputField).toHaveAttribute('type','text');
        console.log(this.passwordInputField);

    }

    async pressEnterKeyOnPassword(username,password){
       await this.navigateToSite();
       await this.userNameInputField.fill(username);
       await this.passwordInputField.fill(password);

       await this.passwordInputField.press('Enter');
    }


    async viewerBatchCheck(text){
      await this.viewerBatch.click();
      if(await this.viewerBatch.isVisible()){
       await expect(this.viewerBatch).toHaveText(text);
        console.log('Viewer badge is visible and has the correct text');
    }
    else{
        console.log('Viewer badge is not visible');
    }
}
}