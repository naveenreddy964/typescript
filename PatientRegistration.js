describe('Protractor sample test',function() {
	
	it('open the apllication',function(){
		
		browser.get("http://localhost:4200/#/login");
		browser.manage().window().maximize()
		browser.ignoreSynchronization = true;
		element(by.id('username')).sendKeys('admin');
		element(by.id('password')).sendKeys('lincoln');
		element(by.id('loginBtn')).click().then(function(){
			browser.sleep(3000);
		})
		element(by.xpath("//button[text()='Ok']")).click().then(function() {
			browser.sleep(3000);
		})
		element(by.id('mainMenu-4')).click();
		element(by.id('patientregistration')).click().then(function(){
			browser.sleep(2000);
		})
		element(by.css("label[class*='ui-dropdown-label ui-inputtext ui-corner-all ui-placeholder ng-star-inserted']")).click();
		element(by.xpath("//span[text()='Mr.']")).click();
		element(by.id('pDetailsfName')).sendKeys('Naveen');
		element(by.id('pDetailslName')).sendKeys('Reddy');
		element(by.id('pDetailsAgeYear')).sendKeys('23');
		element(by.id('hcf')).click();
		element(by.xpath("//span[text()='CHC3']")).click();
		element(by.id('contactDetailsMobile')).sendKeys('9866344213');
		element(by.id('contactDetailsState')).click();
		element(by.xpath("//span[text()='ANDHRAPRADESH']")).click();
		element(by.xpath("//label[text()='Select a District']")).click();
		element(by.xpath("//span[text()='SRIKAKULAM']")).click();
		element(by.id('contactDetailsMandal')).click();
		element(by.xpath("//span[text()='RAJAM']")).click();
		element(by.id('contactDetailsVillage')).click().then(function() {
			browser.sleep(3000);
		});
		element(by.xpath("//span[text()='RAJAM']")).click();
		element(by.xpath("//span[text()='Submit']")).click().then(function() {
			browser.sleep(3000);
		})
		element(by.xpath("//span[text()='Yes! Register Patient']")).click();
	})
});