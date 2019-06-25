const selectors = require('../selectors/imdb.selectors');

describe('Update Profile for IMDb', () => {

  it('should Verify the  "id" cookie is before login ', async () => {
    var cookies = await browser.manage().getCookies()
    logInCookies = false;
    for (var i = 0; i < cookies.length; i++) {
      if (cookies[i]['name'] === 'id')
        logInCookies = true;
    }
    expect(logInCookies).toEqual(false)
  });

  it('should login to imdb', () => {
    selectors.loginButton.click();
    selectors.logInImdb.click();
    selectors.emailTextBox.sendKeys(browser.params.login.email);
    selectors.passwordTextBox.sendKeys(browser.params.login.password);
    selectors.passwordTextBox.sendKeys(protractor.Key.ENTER)
    selectors.userName.click();
    expect(selectors.editProfile.getText()).toEqual('Edit profile');
  });

  it('should Update Bios value and navigate outside the page after the save is completed ', async () => {
    selectors.editProfile.click();
    selectors.bioText.clear();
    selectors.bioText.sendKeys('Hi Bye');
    selectors.saveButton.click();
    browser.navigate().refresh();
    expect(browser.getCurrentUrl()).toEqual('https://www.imdb.com/user/ur102368423/?ref_=nb_usr_prof_0');
  })

  it('should navigate back to profile page to verify Bio is updated with the added value ', () => {
    expect(selectors.bioSavedText.getText()).toEqual('Hi Bye')
  })

  it('should Verify the  "id" cookie is created ', async () => {
    var cookies = await browser.manage().getCookies()
    logInCookies = false;
    for (var i = 0; i < cookies.length; i++) {
      if (cookies[i]['name'] === 'id')
        logInCookies = true;
    }
    expect(logInCookies).toEqual(true)
  })

  it('should Verify the user is logged out by checking "id" cookie does not exist ', async () => {
    await browser.actions().mouseMove(selectors.userName).perform();
    selectors.logOut.click();
    var newCookies = await browser.manage().getCookies()
    logInCookies = false;
    for (var i = 0; i < newCookies.length; i++) {
      if (newCookies[i]['name'] === 'id')
        logInCookies = true;
    }
    expect(logInCookies).toEqual(false)
  })


});



