const { Builder, By, Key, until, Capabilities } = require("selenium-webdriver");
describe("Test for Google search keyword Selenium ", () => {
  it("Open second result in new tab and check value of tab", async () => {
    let driver = await new Builder()
      .withCapabilities(Capabilities.firefox())
      .build();
    let baseURL = "https://www.google.com";
    try {
      driver.get(baseURL);

      const searchInput = await driver.findElement(By.id("APjFqb"));
      await searchInput.sendKeys("selenium", Key.RETURN);

      await driver.wait(
        until.elementsLocated(By.css("div[lang][data-ved] a[data-ved]")),
        5000
      );

      const results = await driver.findElements(By.css("div[lang][data-ved]"));
      for (let i = 1; i < results.length; i++) {
        const div = results[i];
        if (await div.isDisplayed()) {
          const link = await div.findElement(By.css("a[data-ved]"));
          await driver.executeScript("arguments[0].scrollIntoView();", link);
          const commandKey =
            process.platform === "darwin" ? Key.COMMAND : Key.CONTROL;
          await driver
            .actions()
            .keyDown(commandKey)
            .click(link)
            .keyUp(commandKey)
            .perform();
          const tabs = await driver.getAllWindowHandles();
          await driver.switchTo().window(tabs[1]);
          await driver.wait(until.elementLocated(By.css("h1")), 10000);
          const newTabTitle = await driver.getTitle();
          console.log("New  Tab Name is: ", newTabTitle);
          break;
        }
      }
    } catch (err) {
      console.error("Error occured: ", err);
    } finally {
      await driver.quit();
    }
  });
});
