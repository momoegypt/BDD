$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/cucumber/runner/test/MyFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Abercrombie new arrivals Functionality",
  "description": "",
  "id": "abercrombie-new-arrivals-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "1. User verify mens new arrivals",
  "description": "",
  "id": "abercrombie-new-arrivals-functionality;1.-user-verify-mens-new-arrivals",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "As a mens user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browse to the url \"https://www.abercrombie.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Abercrombie home page should show",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User click mens menu \"Mens\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "naviagte to new men arrivals submenu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Mens new arrival page should show",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on Tops",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clcik on Bottoms",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on Shoes \u0026 Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on Sort by",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on Category",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on Tees \u0026 Tanks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Shirts",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on Polos",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on Hoodies \u0026 Sweatshirts",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Sweaters",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on Jeans",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on Sweatpants",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on Shors",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on Footwear",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on Size",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "click on S/M",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click on 12 US",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click on Color",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.As_a_mens_user()"
});
formatter.result({
  "duration": 118295816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.abercrombie.com",
      "offset": 19
    }
  ],
  "location": "MySteps.Browse_to_the_url(String)"
});
formatter.result({
  "duration": 2955300658,
  "status": "passed"
});
formatter.match({
  "location": "MySteps.Abercrombie_home_page_should_show()"
});
formatter.result({
  "duration": 4726651588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mens",
      "offset": 22
    }
  ],
  "location": "MySteps.User_click_mens_menu(String)"
});
formatter.result({
  "duration": 1383479151,
  "status": "passed"
});
formatter.match({
  "location": "MySteps.naviagte_to_new_men_arrivals_submenu()"
});
formatter.result({
  "duration": 199732807,
  "status": "passed"
});
formatter.match({
  "location": "MySteps.Mens_new_arrival_page_should_show()"
});
formatter.result({
  "duration": 12194,
  "status": "passed"
});
formatter.match({
  "location": "MySteps.click_on_Tops()"
});
formatter.result({
  "duration": 35456089972,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: Element is not currently visible and so may not be interacted with\nCommand duration or timeout: 31.95 seconds\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027Mahmouds-MacBook-Pro.local\u0027, ip: \u002710.10.30.48\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.5\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d41.0.2, platform\u003dMAC, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 7a2b6503-f5e1-ef48-92f0-906c61c51622\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:326)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat com.cucumber.runner.steps.MySteps.click_on_Tops(MySteps.java:111)\n\tat ✽.And click on Tops(com/cucumber/runner/test/MyFeature.feature:10)\nCaused by: org.openqa.selenium.ElementNotVisibleException: Element is not currently visible and so may not be interacted with\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027Mahmouds-MacBook-Pro.local\u0027, ip: \u002710.10.30.48\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.5\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.fxdriver.preconditions.visible(file:///var/folders/rn/jw0fwbb10975__zvts03t9b00000gn/T/anonymous8226852065408047264webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:9981)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.checkPreconditions_(file:///var/folders/rn/jw0fwbb10975__zvts03t9b00000gn/T/anonymous8226852065408047264webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12517)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///var/folders/rn/jw0fwbb10975__zvts03t9b00000gn/T/anonymous8226852065408047264webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12534)\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///var/folders/rn/jw0fwbb10975__zvts03t9b00000gn/T/anonymous8226852065408047264webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:621)\n",
  "status": "failed"
});
formatter.match({
  "location": "MySteps.clcik_on_Bottoms()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_Shoes_Accessories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_Sort_by()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_Category()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_Tees_Tanks()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_Shirts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_Polos()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_Hoodies_Sweatshirts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_Sweaters()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_Jeans()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_Sweatpants()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_Shors()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_Footwear()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_Accessories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_Size()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_S_M()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 9
    }
  ],
  "location": "MySteps.click_on_US(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MySteps.click_on_Color()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "2. User verify Womens new arrivals",
  "description": "",
  "id": "abercrombie-new-arrivals-functionality;2.-user-verify-womens-new-arrivals",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "As a womens user",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Browse to the url \"https://www.abercrombie.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Abercrombie home page should show",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User click womens menu",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "navigate to new women arrival submenu",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Womens new arrival page should show",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "click on Outerwear \u0026 Jackets",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "click on Dresses \u0026 Rompers",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "clcik on Tops",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "click on Bottoms",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "click on Accessories \u0026 Shoes",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "clcik on Swim",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.As_a_womens_user()"
});
formatter.result({
  "duration": 22156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.abercrombie.com",
      "offset": 19
    }
  ],
  "location": "MySteps.Browse_to_the_url(String)"
});
formatter.result({
  "duration": 2825822873,
  "status": "passed"
});
formatter.match({
  "location": "MySteps.Abercrombie_home_page_should_show()"
});
formatter.result({
  "duration": 2553165638,
  "status": "passed"
});
formatter.match({
  "location": "MySteps.User_click_womens_menu()"
});
formatter.result({
  "duration": 872715502,
  "status": "passed"
});
formatter.match({
  "location": "MySteps.navigate_to_new_women_arrival_submenu()"
});
formatter.result({
  "duration": 132879002,
  "status": "passed"
});
formatter.match({
  "location": "MySteps.Womens_new_arrival_page_should_show()"
});
formatter.result({
  "duration": 14466,
  "status": "passed"
});
formatter.match({
  "location": "MySteps.click_on_Outerwear_Jackets()"
});
formatter.result({
  "duration": 9474458005,
  "status": "passed"
});
formatter.match({
  "location": "MySteps.click_on_Dresses_Rompers()"
});
formatter.result({
  "duration": 219149159,
  "status": "passed"
});
formatter.match({
  "location": "MySteps.clcik_on_Tops()"
});
formatter.result({
  "duration": 2598566915,
  "status": "passed"
});
formatter.match({
  "location": "MySteps.click_on_Bottoms()"
});
formatter.result({
  "duration": 1408085517,
  "status": "passed"
});
formatter.match({
  "location": "MySteps.click_on_Accessories_Shoes()"
});
formatter.result({
  "duration": 2770482463,
  "status": "passed"
});
formatter.match({
  "location": "MySteps.clcik_on_Swim()"
});
formatter.result({
  "duration": 1394768654,
  "status": "passed"
});
});