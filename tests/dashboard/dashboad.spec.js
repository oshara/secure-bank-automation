import {test} from '@playwright/test';
import { skelatonLoadingFunc } from './dashboard_scenarios/skelaton_loading_then_page_loading';
import { quickActionsNavFunc } from './dashboard_scenarios/quick_actions_navigate_to_correct_page';

test.describe("Dashboard",()=>{
    test('Dashboard Loading State Validation',async({page})=>{
        await skelatonLoadingFunc(page);
    })

    test.only('Quick Actions Navigation Check',async({page})=>{
        await quickActionsNavFunc(page);
    })
})