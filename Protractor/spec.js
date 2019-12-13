describe('launch liveintent website',function(){
    it('validate liveintent website and buttons present',function(){
        //because the page does not use Angular
        browser.waitForAngularEnabled(false);
        //set browser to max size so elements can be in view
        browser.driver.manage().window().maximize();
        //launch browser
        browser.get('https://liveintent.com/');
        //confirm current url
        expect(browser.getCurrentUrl()).toEqual("https://www.liveintent.com/");
        //identify the 'Get Started' button by unique xpath 
        var getStartedButton = element(by.xpath('//a[text()="Get Started" and @class="white-border-btn"]'));
        //confirm 'Get Started' button is on the page
        expect(getStartedButton.isPresent()).toEqual(true);
        //click button
        getStartedButton.click();
        //confirm new url after click
        expect(browser.getCurrentUrl()).toEqual("https://www.liveintent.com/get-in-touch/");
        //identify the 'Contact Us' button 
        var contactUsButton = element(by.xpath('//a[text()="Contact Us" and @class="header-cta-nav"]'));
        //verify the presence of 'Contact Us' button
        expect(contactUsButton.isPresent()).toEqual(true);
      
    })
}
)