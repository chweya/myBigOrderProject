const elementUtility = require('../utility/elementUtility')
class LoginPage
{
   //Page Locators
      get loginLink(){return $('=Login')}
      get email_input(){return $('#email')}
      get password(){return $('#password')}
      get login_button(){return $('button.w-100')}
      get pageLogo(){return $('a.w-100')}
      get logged_text(){return $('div.name:first-of-type')}

   
   //Page Actions
   getPageTitle(){return elementUtility.doGetPageTitle()}//Method to get page title
   getLogoStatus(){return elementUtility.doIsDisplayed(this.pageLogo)}
   navigateToLoginPage(){elementUtility.doClick(this.signUpLink)}
   getProfileName(){return elementUtility.doGetText(this.logged_text)}
   getPageURL(){return elementUtility.doGetPageURL()}


   //Method to Login
   doLogin(uname, pwd)
   {
       elementUtility.doClick(this.loginLink)
       elementUtility.doSetValue(this.email_input, uname)
       elementUtility.doSetValue(this.password, pwd)
       elementUtility.doClick(this.login_button)
   }
}

module.exports = new LoginPage()