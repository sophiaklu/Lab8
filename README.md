# Lab8_Starter
## Contributors
- Sophia Klueter<br>
- Carmen Li<br>
## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? 
Answer: 1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
Answer: No, this feature probably has a lot of components that go into it and so the unit tests would only help if it were a small part.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Answer: Yes, this feature is small enough to have a single component.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
Answer: If we set it to true, it means that it will run the tests without a browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
Answer: `await page.click('header > img')` should be within the callback function

