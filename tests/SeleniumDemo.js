// const { Builder, By, Key } = require("selenium-webdriver");
// var driver = new Builder().forBrowser("firefox").build();
// driver.manage().setTimeouts({ implicit: 10000 });
// const assert = require("assert");

// class SeleniumDemo {
//   constructor() {
//     global.driver = driver;
//   }
//   async goToUrl(theURL) {
//     await driver.get(theURL);
//   }
//   async enterTextById(id, searchText) {
//     await driver.findElement(By.id(id)).sendKeys(searchText, Key.RETURN);
//   }
//   async clickById(id) {
//     await driver.findElement(By.id(id)).click();
//   }
//   async openInNewTab(css) {
//     const secondResult = await driver.findElement(By.css(css));
//     const link = secondResult.previousSibling.previousSibling;
//     await driver.executeScript(
//       'window.open(arguments[0].href,"_blank");',
//       link
//     );
//   }
//   async switchTab(tabNumber) {
//     let tabs = await driver.getAllWindowHandles();
//     await driver.switchTo().window(tabs.get(tabNumber));
//   }
//   async closeBrowser() {
//     await driver.quit();
//   }
// }

// module.exports = new SeleniumDemo();
