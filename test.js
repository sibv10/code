//this shit sets up Automation to work
var driver = require('./setUp').driver;
var assert = require('assert');



describe('Homepage', function() {
  this.timeout(2500000);


/*
  //this is a TestCase from a previous sesh
  it('Title', function() {
  return driver
  .init()
  .url('https://duckduckgo.com/')
  .setValue('#search_form_input_homepage', 'WebwebdriverioIO')
  .click('#search_button_homepage')
  .pause(2000)
  .getTitle()
  .then((title)=>{
  assert(title === 'DuckDuckGo' , 'Title was: '+ title + ' instead of expected ' + 'DuckDuckGo');
})
.end()
});
*/

/*
//new automation test case
it('Title and Music button', function() {
  return driver
  .init()
  .url('http://www.tunetornado.com/')
  .click('.inline.navigation-bar.pull-right li:nth-child(1) a')
  .getTitle()
  .then((title)=>{
    assert(title === 'Tune Tornado - Music Friends with Benefits',
    'Title was: '+ title + ' instead of expected ' + 'Tune Tornado - Music Friends with Benefits');
  })
  .end()
});


//new automation test case
it('Aim button', function() {
  return driver
  .init()
  .url('http://www.tunetornado.com/')
  .pause(2000)
  .click('.inline.navigation-bar.pull-right li:nth-child(2) a')
  .getTitle()
  .then((title)=>{
    assert(title === 'Tune Tornado - Aim',
    'Title was: '+ title + ' instead of expected ' + 'Tune Tornado - Aim');
  })
  .end()
});

//new automation test case
it('Help button', function() {
  return driver
  .init()
  .url('http://www.tunetornado.com/')
  .pause(2000)
  .click('.inline.navigation-bar.pull-right li:nth-child(3) a')
  .getTitle()
  .then((title)=>{
    assert(title === 'Tune Tornado - Help',
    'Title was: '+ title + ' instead of expected ' + 'Tune Tornado - Help');
  })
  .end()
});

//new automation test case
it('Login button', function() {
  return driver
  .init()
  .url('http://www.tunetornado.com/')
  .pause(2000)
  .click('.inline.navigation-bar.pull-right li:nth-child(4) a')
  .pause(2000)
  .isVisible('#accounts-modal')
  .end()
})
*/

//new automation test case
it('Start button', function() {
  return driver
  .init()
  .url('http://www.tunetornado.com/')
  .pause(2000)
  .click('.inline.navigation-bar.pull-right li:nth-child(5) a')
  .pause(2000)
  .isVisible('#signup')
  .addValue('html body div#accounts-modal.modal.hide.fade.dark-modal.in div.modal-body div#signup.section.active form#signup-form div div.row-fluid div.row-fluid div.span6 div#div_id_first_name.clearfix.control-group div.controls input#id_first_name.input-block-level.textinput.textInput', 'John')
  .setValue('#id_last_name', 'Smith')
  .setValue('#signup form div:nth-child(3) div #div_id_email .controls input', 'John@gmail.com' )
  .setValue('#signup form div:nth-child(3) div div:nth-child(3) #div_id_password_1 div input', 'opensesame5')
  .setValue('#signup form div:nth-child(3) div div:nth-child(3) #div_id_password_2 div input', 'opensesame5')
  .setValue('#signup form div:nth-child(3) div div:nth-child(4) div input', 'born2listen2tunes')
  .click('#id_terms')
  .pause(4000)
  /*.click('#id_terms')
  .click('#signup-form div:nth-child(4) a')
  .isVisible('#accounts-modal div:nth-child(1) div:nth-child(2) img')*/
  .end()
})



});
