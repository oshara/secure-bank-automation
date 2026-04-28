import { QA_ENV } from "../../../config/qa.env";
import { LoginPage } from "../../../pages/login/login";
import { loginFunc } from "./successful_admin_login"

export const pressEnterOnLoginFunc = async(page) =>{


    const LoginObj = new LoginPage(page);
    await LoginObj.pressEnterKeyOnPassword(QA_ENV.credentials.username,QA_ENV.credentials.password);

}