import { QA_ENV } from "../../../config/qa.env"
import { LoginPage } from "../../../pages/login/login";
import { loginFunc } from "./successful_admin_login"

export const viewerUserLoiginFunc = async(page)=>{


    
    const LoginObj = new LoginPage(page);
    await LoginObj.login(QA_ENV.credentials.viewerUsername,QA_ENV.credentials.viewerPassword);
    await LoginObj.viewerBatchCheck(QA_ENV.credentials.viewerBatchText);
}