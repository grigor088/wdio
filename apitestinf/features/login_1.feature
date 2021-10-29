Feature: Performing a login

    Scenario: Login with a user
      Given I am in sign in page
      When I login with my account
      Then I shall be in a Ebay header page
      Then I Wont see Shop Laptops and Tablets page


