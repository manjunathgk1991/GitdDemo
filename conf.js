var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec1.js'],

    onPrepare : function()
    {
      browser.waitForAngularEnabled(false);
      browser.driver.manage().window().maximize();
	  	browser.manage().timeouts().implicitlyWait(15000);
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
    }
    
    
  };