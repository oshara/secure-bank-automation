import {test,expect} from '@playwright/test'
import { loginFunc } from './login_scenarios/successful_admin_login'
import { QA_ENV } from '../../config/qa.env';
import { invalidLoginFunc } from './login_scenarios/unsuccesful_admin.login';
import { togglePasswordVisibilityFunc } from './login_scenarios/toggle_password_visibility';
import { pressEnterOnLoginFunc } from './login_scenarios/pressing_enterkey_password_login';
import { viewerUserLoiginFunc } from './login_scenarios/success_login_viewer_only_user';



test.describe('Login Scenarios',()=>{
    test('login',async({page})=>{
        await loginFunc(page);
    })

    test('Admin Succesful Login', async ({ page }) => {
    
        await loginFunc(page);
        await expect(page).toHaveURL(QA_ENV.dashboardURL);
    });

    test.only('Admin unsuccesful login',async({page})=>{
        await invalidLoginFunc(page);
    })


    test.only('Toggle Password Visibility',async({page})=>{
        await togglePasswordVisibilityFunc(page);
    })

    test.only('Verifying when user can login by clicking the enter key after entering the password',async({page})=>{

        await pressEnterOnLoginFunc(page);
         await expect(page).toHaveURL(QA_ENV.dashboardURL);
    })

    test.only('Admin Viewer Badge after login login',async({page})=>{
        await viewerUserLoiginFunc(page);
        await expect(page).toHaveURL(QA_ENV.dashboardURL);

    })

})