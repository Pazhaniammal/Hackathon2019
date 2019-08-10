import { browser,Config } from 'protractor';

export let config: Config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome',
  
  },
  

  framework: 'jasmine',

  suites: {
    SampleTest: ['../e2e/test.js'],
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000
  },

  params: {
    baseUrl: 'http://192.168.1.200:3000/login',
    superAdminEmailAddress:"dev@instance.com",
    superAdminPassword:"test123$"
  },

  onPrepare: () => {
   browser.manage().window().maximize();
   browser.manage().timeouts().implicitlyWait(5000);
 }
}