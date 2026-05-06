export class NavigationMenu {

    constructor(page){
        this.page= page;
        
        this.accoutsMenu = page.locator('[data-testid="nav-accounts"]');
    }

    async clickAccountsMenu(){
        await this.accoutsMenu.click();
    }
}