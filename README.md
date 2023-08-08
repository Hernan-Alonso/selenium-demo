# QA Task

Search Selenium in Google.

## Requirement

- Run a google search for the word “selenium”.
- Open the second result in new tab.
- Check what text is written on the page title (text on the opened tab).
- Use JavaScript.
- Use any framework you are convenient with.
- Send the source files of your solution.
- explain which framework you used and anything required to understand the solution.

### Acceptance Criteria

- Test will open FireFox and navigate to Google page.
- Engine will search Selenium and will open second visible result in a new tab
- Engine will log the Title of the new tab opened.
- Engine will close.

#### Explanation

Based on the client needs, I choose to work with _Selenium & JavaScript_. Since it is a simple test I did not opt to work with _POM_ design but if eventually the tests sets and data would grow in number, then I think POM would be a good fit.
I work destructuring the methods that I would use in this case from selenium-webdriver. Even tho is just one test, I like to use _describe - it_ as part of all my test structure, I think it makes it a little more understandable for non-technical users.

Since Google is a page which has a lot of dynamic data and could have different structure in the results container (You could have ads as first results, _people also ask_ section, videos section), this makes to be a not so friendly page to automate. In terms of approach, I opt to use _wait_ and _until.elementsLocated_ to be sure after hitting Return key I would have the results container visible. After this, I picked up with _Css Selector_ all divs that have lang and data-ved as attributes, which as I inspected the HTML these two attributes assured me the correct divs were selected.
Now since I did not want the _people also ask_ section since I focused on the actual results from Google, I looped in the results divs and starting from the second result of the list I checked whether if the element was displayed (_Google results_) or not (_people also ask_ section) and since we needed second result to work with, I started my loop at 1.
Once this div was found, I picked the link by looking for the a element with data-ved in it and scrollIntoView afterwards.
Then I utilize the actions method to perform a press
If MacOS COMMAND key Else CONTROL key would be pressed & click.
After a new tab is opened with getTitle method I get the title of the new tab open and console.log the result since I did not have to assert the exact or contain of it.

#### Instructions

Once repository cloned, run npm install to install all dependencies.
After all dependencies are installed, run the command in terminal _*'npm test'*_ to run the test.
Test should pass and in terminal you should be able to see the name of the New tab.
After run a test-reports folder should be created with the mochawesome report to check it in HTML form.
