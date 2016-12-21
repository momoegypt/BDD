Feature: Abercrombie new arrivals Functionality

  Scenario: 1. User verify mens new arrivals
    Given As a mens user
    When Browse to the url "https://www.abercrombie.com"
    Then Abercrombie home page should show
    When User click mens menu "Mens"
    And naviagte to new men arrivals submenu
    Then Mens new arrival page should show
    And click on Tops
    And clcik on Bottoms
    And click on Shoes & Accessories
    And click on Sort by
    And click on Category
    And click on Tees & Tanks
    And click on Shirts
    And click on Polos
    And click on Hoodies & Sweatshirts
    And click on Sweaters
    And click on Jeans
    And click on Sweatpants
    And click on Shors
    And click on Footwear
    And click on Accessories
    Then click on Size
    And click on S/M
    And click on 12 US
    Then click on Color

  Scenario: 2. User verify Womens new arrivals
    Given As a womens user
    When Browse to the url "https://www.abercrombie.com"
    Then Abercrombie home page should show
    When User click womens menu
    And navigate to new women arrival submenu
    Then Womens new arrival page should show
    And click on Outerwear & Jackets
    And click on Dresses & Rompers
    And clcik on Tops
    And click on Bottoms
    And click on Accessories & Shoes
    Then clcik on Swim
