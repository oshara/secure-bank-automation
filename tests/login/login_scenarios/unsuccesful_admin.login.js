import { QA_ENV } from "../../../config/qa.env";
import { LoginPage } from "../../../pages/login/login"

export const invalidLoginFunc = async(page)=>{

    const LoginObj = new LoginPage(page);
    await LoginObj.login(QA_ENV.credentials.ivalidUsername,QA_ENV.credentials.invalidPassword);
    await LoginObj.invalidLoginErrorValidation(QA_ENV.credentials.errorMessage);
}