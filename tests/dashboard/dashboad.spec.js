import {test} from '@playwright/test';
import { skelatonLoadingFunc } from './dashboard_scenarios/skelaton_loading_then_page_loading';

test.describe("Dashboard",()=>{
    test('Dashboard Loading State Validation',async({page})=>{
        await skelatonLoadingFunc(page);
    })
})