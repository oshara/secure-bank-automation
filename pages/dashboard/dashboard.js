import { expect } from "@playwright/test";
import { navigateToAccountMenu } from "../../tests/navigations/navigation";

export class DashboardPage {
    constructor(page){
        this.page = page;
        this.dashboardContainer = page.locator('[id="dashboard-page-container"]');
        this.skelatonCardLocator = page.locator('[data-testid="skeleton-card"]').nth(0);

        // Total Balance Card
        this.totalBalanceCard = page.locator("[data-testid='total-balance-card']");
        this.balanceAmountValue = page.locator("[data-testid='total-balance']");

        // Active Account Card
        this.activeAccountCard = page.locator("[data-testid='total-balance-card']");

        //Total Transacations Card
        this.totalTransactionsCard = page.locator("[data-testid='transactions-count-card']");

        
    }

    async skelatonLoadingStateValidation(){
           await expect(this.dashboardContainer).toHaveAttribute('data-loading','true');
           await expect(this.skelatonCardLocator).toBeVisible();
           await expect(this.dashboardContainer).toHaveAttribute('data-loading','false',{timeout:2000});

           await expect(this.totalBalanceCard).toContainText(/\$\d+/);
           await expect(this.activeAccountCard).toContainText(/\d+/);
           await expect(this.totalTransactionsCard).toHaveText(/\d+/);
        }


    async statCardValueMatch(){
          await expect(this.dashboardContainer).toHaveAttribute('data-loading','true');

          const totalAmountValue = await this.balanceAmountValue.innerText();
          await navigateToAccountMenu();

          
          

    }
}
