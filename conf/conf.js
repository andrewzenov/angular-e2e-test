// An example configuration file.
//change rootElement for test starting
exports.config = {
    directConnect: true,
    rootElement:"#app",

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
   // specs: ['../test/test_spec.js','../test/uncorrect_data_spec.js','../test/time_spec.js','../test/quitting_time_spec'],

 specs: ['../test/quitting_time_spec.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors:true,
        defaultTimeoutInterval: 30000
    }
};
