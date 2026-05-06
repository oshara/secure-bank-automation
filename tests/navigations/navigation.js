import { NavigationMenu } from "../../pages/navigations/navgationMenu"

export const navigateToAccountMenu= async(page)=>{

    const NavMenuObj = new NavigationMenu(page);

    await NavMenuObj.clickAccountsMenu();

}