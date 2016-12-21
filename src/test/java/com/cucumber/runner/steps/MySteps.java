package com.cucumber.runner.steps;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.thoughtworks.selenium.Wait;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MySteps {

	private static final Object Tops = null;
	protected WebDriver driver;

	@Before
	public void setUp() {
		driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

	@Given("^As a mens user$")
	public void As_a_mens_user() throws Throwable {
		// Express the Regexp above with the code you wish you had

	}

	@When("^Browse to the url \"([^\"]*)\"$")
	public void Browse_to_the_url(String arg1) throws Throwable {
		driver.get(arg1);

	}

	@Then("^Abercrombie home page should show$")
	public void Abercrombie_home_page_should_show() throws Throwable {
		String title = driver.getTitle();
		System.out.println(title);
		assertThat(
				title,
				equalToIgnoringCase("Abercrombie & Fitch | Authentic American clothing since 1892"));
	}

	@When("^User click mens menu \"([^\"]*)\"$")
	public void User_click_mens_menu(String arg1) throws Throwable {
		// Express the Regexp above with the code you wish you had

		Thread.sleep(200);

		driver.findElement(By.xpath("//*[@id='simplemodal-container']/a"))
				.click();
		Thread.sleep(200);
		WebElement we = driver.findElement(By.xpath(".//*[@title='Mens']"));
		Actions action = new Actions(driver);
		action.moveToElement(we);
		Action act = action.build();
		act.perform();
		Thread.sleep(500);
	}

	@When("^naviagte to new men arrivals submenu$")
	public void naviagte_to_new_men_arrivals_submenu() throws Throwable {
		WebElement newArrivals = driver
				.findElement(By
						.xpath(".//*[@title='Mens']/..//a[contains(text(),'New Arrivals')]"));
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", newArrivals);
	}

	@Then("^Mens new arrival page should show$")
	public void Mens_new_arrival_page_should_show() {
		// Express the Regexp above with the code you wish you had

	}

	@Then("^click on Tops$")
	public void click_on_Tops() {
		// Express the Regexp above with the code you wish you had

		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		driver.findElement(
				By.xpath(".//*[@href='/shop/us/mens-tops-new-arrivals']"))
				.click();
		

	}

	@Then("^clcik on Bottoms$")
	public void clcik_on_Bottoms() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(
				By.xpath(".//*[@class='rs-cat-nav__link'][@href='/shop/us/mens-bottoms-new-arrivals']"))
				.click();

	}

	@Then("^click on Shoes & Accessories$")
	public void click_on_Shoes_Accessories() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(
				By.xpath(".//*[@class='rs-cat-nav__link' and @href='/shop/us/mens-shoes-and-accessories-new-arrivals']"))
				.click();

	}

	@Then("^click on Sort by$")
	public void click_on_Sort_by() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(
				By.xpath(".//*[@class='search-sort-label' and @data-start-value='Sort By']"))
				.click();

	}

	@Then("^click on Category$")
	public void click_on_Category() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(
				By.xpath(".//*[@class='search-filter-label' and @data-property='GLB_SANDHANDOTHERCHARGES']"))
				.click();
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		

	}

	@Then("^click on Tees & Tanks$")
	public void click_on_Tees_Tanks() throws InterruptedException {
		// Express the Regexp above with the code you wish you had
		driver.findElement(By.xpath(".//*[@data-filter-value='Tees & Tanks']"))
				.click();
		Thread.sleep(5000);

	}

	@Then("^click on Shirts$")
	public void click_on_Shirts() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(By.xpath(".//*[@data-filter-value='Shirts']"))
				.click();

	}

	@Then("^click on Polos$")
	public void click_on_Polos() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(By.xpath(".//*[@data-filter-value='Polos']"))
				.click();

		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	@Then("^click on Hoodies & Sweatshirts$")
	public void click_on_Hoodies_Sweatshirts() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(
				By.xpath(".//*[@ data-filter-value='Hoodies & Sweatshirts']"))
				.click();

	}

	@Then("^click on Sweaters$")
	public void click_on_Sweaters() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(
				By.xpath(".//*[@class='search-filter-wrapper' and @data-filter-value='Sweaters']"))
				.click();

	}

	@Then("^click on Jeans$")
	public void click_on_Jeans() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(By.xpath(".//*[@data-filter-value='Jeans']"))
				.click();

	}

	@Then("^click on Sweatpants$")
	public void click_on_Sweatpants() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(By.xpath(".//*[@data-filter-value='Sweatpants']"))
				.click();

	}

	@Then("^click on Shors$")
	public void click_on_Shors() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(By.xpath(".//*[@data-filter-value='Shorts']"))
				.click();

	}

	@Then("^click on Footwear$")
	public void click_on_Footwear() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(By.xpath(".//*[@data-filter-value='Footwear']"))
				.click();

	}

	@Then("^click on Accessories$")
	public void click_on_Accessories() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(By.xpath(".//*[@data-filter-value='Accessories']"))
				.click();

	}

	@Then("^click on Size$")
	public void click_on_Size() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(By.xpath(".//*[@data-property='GLB_SIZE']")).click();

	}

	@Then("^click on S/M$")
	public void click_on_S_M() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(By.xpath(".//*[@data-filter-value='S/M']")).click();
	}

	@Then("^click on (\\d+) US$")
	public void click_on_US(int arg1) {
		// Express the Regexp above with the code you wish you had
		driver.findElement(By.xpath(".//*[@data-input-value='12 US']")).click();

	}

	@Then("^click on Color$")
	public void click_on_Color() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(By.xpath(".//*[@data-property='GLB_COLOR']"))
				.click();

	}

	@Given("^As a womens user$")
	public void As_a_womens_user() {
		// Express the Regexp above with the code you wish you had
	}

	@When("^User click womens menu$")
	public void User_click_womens_menu() throws InterruptedException {
		 Thread.sleep(500);

		driver.findElement(By.xpath("//*[@id='simplemodal-container']/a"))
				.click();
		// Thread.sleep(500);
		WebElement we = driver.findElement(By.xpath(".//*[@title='Womens']"));
		Actions action = new Actions(driver);
		action.moveToElement(we);
		Action act = action.build();
		act.perform();
		// Thread.sleep(500);
	}

	@When("^navigate to new women arrival submenu$")
	public void navigate_to_new_women_arrival_submenu() throws Throwable {
		WebElement newArrivals = driver
				.findElement(By
						.xpath(".//*[@title='Womens']/..//a[contains(text(),'New Arrivals')]"));
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", newArrivals);
	}

	@Then("^Womens new arrival page should show$")
	public void Womens_new_arrival_page_should_show() {

	}

	@Then("^click on Outerwear & Jackets$")
	public void click_on_Outerwear_Jackets() throws InterruptedException {
		// Express the Regexp above with the code you wish you had
		driver.findElement(
				By.xpath(".//*[@href='/shop/us/womens-outerwear-and-jackets-new-arrivals']"))
				.click();
		Thread.sleep(5000);

	}

	@Then("^click on Dresses & Rompers$")
	public void click_on_Dresses_Rompers() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(
				By.xpath(".//*[@class='rs-cat-nav__link' and @href='/shop/us/womens-dresses-and-rompers-new-arrivals']"))
				.click();

	}

	@Then("^clcik on Tops$")
	public void clcik_on_Tops() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(
				By.xpath(".//*[@href='/shop/us/womens-tops-new-arrivals']"))
				.click();

	}

	@Then("^click on Bottoms$")
	public void click_on_Bottoms() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(
				By.xpath(".//*[@href='/shop/us/womens-bottoms-new-arrivals']"))
				.click();

	}

	@Then("^click on Accessories & Shoes$")
	public void click_on_Accessories_Shoes() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(
				By.xpath(".//*[@href='/shop/us/womens-accessories-and-shoes-new-arrivals']"))
				.click();

	}

	@Then("^clcik on Swim$")
	public void clcik_on_Swim() {
		// Express the Regexp above with the code you wish you had
		driver.findElement(
				By.xpath(".//*[@href='/shop/us/womens-swim-new-arrivals']"))
				.click();

	}

}
