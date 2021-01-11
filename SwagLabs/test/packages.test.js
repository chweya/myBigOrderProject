const { assert } = require('chai');
const packages_page = require('../pages/packages')
const assertions = require('../constants')
describe('verify list of packages', () => 
{
    it('verify navigation to packages page', () => 
    {
        browser.url('/')
        browser.maximizeWindow()
        packages_page.navigatePackagesPage()
        var packages_url = packages_page.getPackagesPageURL()
        console.log('Active Page URL is', packages_url)
        assert.equal(packages_url, assertions.PACKAGES_URL,'Invalid Page URL')

        var packages_page_header = packages_page.getPackagesPageTitleText()
        console.log('Packages Header Text is: ', packages_page_header)
        assert.equal(packages_page_header, assertions.PACKAGES_PAGE_TITLE,'Invalid Packages Page Title')
    });

    it('verify list of packages', () => 
    {
        console.log(packages_page.getPackagesListText())
    });
});