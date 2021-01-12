const login = require('../pages/login.page')
const configData = require('../config');
const { assert } = require('chai');
const assertions = require('../constants')

describe('Login page feature test', () => 
{
    it('verify eBay Page is launched successfully', () => 
    {
        browser.url('/')
        browser.maximizeWindow()
        console.log('Logo Status Is:', login.getLogoStatus())
    });

    it('verify successful user login', () => {
        login.doLogin(configData.user, configData.pass)
        const logged_name = login.getProfileName()
        console.log('Logged user Name is :' , logged_name)
        assert.equal(logged_name, assertions.LOGGED_USER, 'Invalid user logged in')
        var browser_url = login.getPageURL()
        console.log('Current Page URL is :', browser_url)
        assert.equal(browser_url, assertions.DASHBOARD_URL, 'Invalid Page URL')
    });
});