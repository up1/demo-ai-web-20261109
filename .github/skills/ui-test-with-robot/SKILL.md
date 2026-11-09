---
name: ui-test-with-robot
description: Write a UI test using Robot Framework with SeleniumLibrary that follows best practices and is easy to maintain.
---

## Workflow
1. Analyze the UI of the application and identify the elements that need to be tested.
2. Write only the necessary test scripts based on the test cases defined by the user's requirements and following from Project strucuture and best pratices
4. Run tests with `robot web01/ui-tests/` and verify that they pass successfully.
   * If the tests fail, analyze the errors and fix them.

## Project structure
* All files in test-cases folder must reference resources from folder pages
```
<project_name>/
  ui-tests/
    pages/
      index.resources
      login.resources
    test-cases/
      login.success.robot
      login.failure.robot

```

## Best practices
* Must follow Page-Object Pattern to create test cases with maintainable.
* Use descriptive test names that clearly indicate the purpose of the test.
* Import `SeleniumLibrary` in the `*** Settings ***` section of each test suite.
* Use `Suite Setup` and `Suite Teardown` to set up and tear down shared test resources, and `Test Setup` and `Test Teardown` to isolate browser sessions between tests.
* Use stable `data-testid` attributes with SeleniumLibrary locators, such as `css:[data-testid="submit"]`, instead of brittle CSS selectors or XPath.
* Use SeleniumLibrary explicit wait keywords, such as `Wait Until Element Is Visible`, instead of fixed sleeps. https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html