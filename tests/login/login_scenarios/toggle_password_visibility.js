import { QA_ENV } from "../../../config/qa.env";
import { LoginPage } from "../../../pages/login/login";

export const togglePasswordVisibilityFunc = async (page) => {


    const LoginObj = new LoginPage(page);
    await LoginObj.togglePasswordVisibility(QA_ENV.credentials.password);


}