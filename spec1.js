const using = require("jasmine-data-provider");
const { browser, element, ExpectedConditions } = require("protractor");

describe("Change password", function(){
	var obj = require("./WebElement.js");
	var data = require("./data.js");

	beforeEach(function(){

		obj.getURL();
	})
	
	using(data.logindata,function(data,description){

		it("Change the password" + description, function()
		{

			obj.email.sendKeys(data.email);
			obj.password.sendKeys(data.password);
			obj.logIn.click();

			browser.actions().mouseMove(obj.profileMenuContainer).click().perform();
			obj.changePassword.click();
			obj.currentPassword.sendKeys(data.password);
			obj.newPassword.sendKeys(data.newPassword);
			obj.confirmPassword.sendKeys(data.newPassword);
			obj.submitButton.click();

			


				
			/*element(by.css("button[class='mat-menu-item ng-star-inserted']")).click().then(function(){
				browser.sleep(10000);
			});*/			
					
		})	

	})

	it("Login with new Password", function()
	{
		obj.email.sendKeys(data.email);
		obj.password.sendKeys(data.newPassword);
		obj.logIn.click();

	})

	it("Check in invalid user", function()
	{
		obj.email.sendKeys(data.email);
		obj.password.sendKeys(data.newPassword);
		obj.logIn.click();

	})
	
})