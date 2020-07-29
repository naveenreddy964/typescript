//it is like a Test file means in java (class file)
describe('Protractor baby steps',function() { //param-1(test suite name)
    // param-2(function(function will have all tests(it blocks)

it('open the apllication',function(){  //write ur protractor test scrpit or case here

browser.get("http://localhost:4200");
browser.manage().window().maximize();


})
it('close application',function(){


})
})