Feature: Tamplate of Cypress with Cucumber and POM

Scenario: wiki scenario
Given I navigate to "https://www.wikipedia.org/"
And I am in the correct page: title "Wikipedia"
When I do the search for "Indiana Jones"
Then I see the proper search