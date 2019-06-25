
module.exports = {
  loginButton: element(by.css('#imdb-signin-link')),
  logInImdb: element(by.css('#signin-options > div > div:nth-child(2) > a:nth-child(1)')),
  emailTextBox: element(by.css('#ap_email')),
  passwordTextBox: element(by.css('#ap_password')),
  userName: element(by.css('#nbusername')),
  editProfile: element(by.css('#sidebar > div:nth-child(2) > div:nth-child(8) > a')),
  bioText: element(by.css('#main > div > div:nth-child(2) > div:nth-child(2) > textarea')),
  saveButton: element(by.css('.auth-button-link.auth-button--primary')),
  bioSavedText: element(by.css('#main > div.user-profile.own-profile > div > div.toggle-overflow.biography.markdown')),
  logOut: element(by.css('#nblogout'))
};