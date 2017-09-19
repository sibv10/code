var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'safari',
        pageLoadStrategy: 'normal'
    }
};

// before: function() {
//     var chai = require('chai');
//     global.expect = chai.expect;
//     chai.Should();
// }

exports.driver = webdriverio.remote(options);
