const elementUtility = require("../utility/elementUtility")

class Packages 
{
    //Page Locators
    get packages_link(){return $("a[href*='customer-packages'].top-bar-item")}
    get packages_page_title_text(){return $('h1.strong-600')}
    get listOfPackages(){return $$('div.c-pointer')}

    //Page Actions
    navigatePackagesPage(){return elementUtility.doClick(this.packages_link)}
    getPackagesPageURL(){return elementUtility.doGetPageURL()}
    getPackagesPageTitleText(){return elementUtility.doGetText(this.packages_page_title_text) }
    getPackagesList()
    {
        return (this.listOfPackages)
    }

    getPackagesListText()
    {
        const packages_list = []
        this.getPackagesList().map((element) => 
        packages_list.push(element.getText())
        )
        return packages_list
    }
}

module.exports = new Packages()