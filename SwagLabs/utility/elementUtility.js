class ElementUtility
{
    //Method to Click an element
    doClick(element)
    {
        element.waitForDisplayed()
        element.click()
    }

    //Method to set a value to an element ('Clears the field')
    doSetValue(element, value)
    {
        element.waitForDisplayed()
        element.setValue(value)
    }

    //Method to adds a value to an element ('Doesn't Clear the field')
    doAddValue(element, value)
    {
        element.waitForDisplayed()
        element.addValue(value)
    }

    //Method that gets text
    doGetText(element)
    {
        element.waitForDisplayed()
        return element.getText()
    }

    //Method to get Page title
    doGetPageTitle()
    {
        return browser.getTitle();
    }

    //Method to wait for element to be displayed
    doIsDisplayed(element)
    {
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    doGetPageURL()
    {
        return browser.getUrl()
    }

}

module.exports = new ElementUtility()