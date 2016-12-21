package com.cucumber.runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format={"pretty", "html:target/cucumber"})
public class MyRunner {

	public MyRunner() {
		// TODO Auto-generated constructor stub
	}

}
