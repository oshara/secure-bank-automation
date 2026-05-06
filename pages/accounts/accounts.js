export class Accounts{
    constructor(page){
        this.page = page;
        this.actualBalanceAmount = page.locator("[data-testid='account-balance']");
    }


    async actualBalance(){
        const actualBalanceCellCount = await this.actualBalanceAmount.count();

        for(let i=0; i< actualBalanceCellCount; i++){
            const balanceValue = await this.actualBalanceAmount.nth(i).innnerText();
            
        }
    }
}