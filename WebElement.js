const { element } = require("protractor");

function WebElements()
{
   this.email = element(by.id("mat-input-0"));
   this.password = element(by.id("mat-input-1"));
   this.logIn = element(by.id("kt_login_signin_submit")); 
   this.singOut = element(by.buttonText("Logout"));
   this.changePassword = element(by.css("button[class='mat-menu-item ng-star-inserted']"));
   this.profileMenuContainer = element(by.css("div[class='avatar-container']"));
   this.commitMenu = element(by.css("button[class='mat-menu-trigger mat-button mat-button-base']"));
   this.currentPassword = element(by.id("mat-input-2"));
   this.newPassword = element(by.id("mat-input-3"));
   this.confirmPassword =element(by.id("mat-input-4"));
   this.submitButton = element(by.css("button[class='add-button mat-raised-button mat-button-base']"))



   this.getURL = function(){
    browser.get("https://qa.collabportal.keysight.com");
   }


};



module.exports = new WebElements();