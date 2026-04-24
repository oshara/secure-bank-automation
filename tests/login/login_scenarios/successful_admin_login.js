import { QA_ENV } from "../../../config/qa.env";
import { LoginPage } from "../../../pages/login/login"

export const loginFunc = async(page)=>{

    const LoginPageObj = new LoginPage(page);
    await LoginPageObj.login(QA_ENV.credentials.username,QA_ENV.credentials.password)
}