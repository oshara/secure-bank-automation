import { DashboardPage } from "../../../pages/dashboard/dashboard";
import { loginFunc } from "../../login/login_scenarios/successful_admin_login"

export const skelatonLoadingFunc = async (page)=>{

    await loginFunc(page);
    const DashboardObj = new DashboardPage(page);

    await DashboardObj.skelatonLoadingStateValidation();

}