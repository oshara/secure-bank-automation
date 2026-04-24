import {test,expect} from '@playwright/test'
import { loginFunc } from './login_scenarios/successful_admin_login'
import { QA_ENV } from '../../config/qa.env';
import { invalidLoginFunc } from './login_scenarios/unsuccesful_admin.login';
import { togglePasswordVisibilityFunc } from './login_scenarios/toggle_password_visibility';



test.describe('Login Scenarios',()=>{
    test('login',async({page})=>{
        await loginFunc(page);
    })

    test('Admin Succesful Login', async ({ page }) => {
    
        await loginFunc(page);
        await expect(page).toHaveURL(QA_ENV.dashboardURL);
    });

  

})