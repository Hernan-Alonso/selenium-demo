const { Builder, By, Key, until, Capabilities } = require("selenium-webdriver");
describe("Test for Google search keyword Selenium ", () => {
  it("Open second result in new tab and check value of tab", async () => {
    //build driver setting baseURL and navigate to url
    let driver = await new Builder()
      .withCapabilities(Capabilities.firefox())
      .build();
    let baseURL = "https://www.google.com";
    driver.get(baseURL);

    //Search for search textarea element of Google search. type selenium and press Enter
    const searchInput = await driver.findElement(By.id("APjFqb"));
    await searchInput.sendKeys("selenium", Key.RETURN);

    //Waiting for presence of divs in result container
    await driver.wait(
      until.elementsLocated(By.css("div[lang][data-ved] a[data-ved]")),
      5000
    );

    //Storing all divs results that has a element page icon and title
    const results = await driver.findElements(By.css("div[lang][data-ved]"));
    // Looping over all divs encountered starting from second element in results container
    for (let i = 1; i < results.length; i++) {
      const div = results[i];
      // Checking if the div is displayed (this will filter out divs in people also ask section)
      if (await div.isDisplayed()) {
        // Once div is displayed. Then Save the a element and scroll the element into view
        const link = await div.findElement(By.css("a[data-ved]"));
        await driver.executeScript("arguments[0].scrollIntoView();", link);
        // Saving the commandKey checking if its MacOS or WinOS and performing Control+click to open a new tab.
        const commandKey =
          process.platform === "darwin" ? Key.COMMAND : Key.CONTROL;
        await driver
          .actions()
          .keyDown(commandKey)
          .click(link)
          .keyUp(commandKey)
          .perform();
        //Since I just want the second result visible, after I get it and open tab I break out from the Loop.
        break;
      }
    }
    // Get the Window Handle and switch to second tab (new tab). wait until some DOM is loaded and get the title of the Tab.
    const tabs = await driver.getAllWindowHandles();
    await driver.switchTo().window(tabs[1]);
    await driver.wait(until.elementLocated(By.css("h1")), 10000);
    const newTabTitle = await driver.getTitle();
    // Console log the value of the newTab Title, and close the browser.
    console.log("New  Tab Name is: ", newTabTitle);
    await driver.quit();
  });
});
