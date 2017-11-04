var Mailgun = require('mailgun').Mailgun;

var mg = new Mailgun('key-60552ad39ebec85ead01d9065b740950');


let addToMailingList = function(name) {
    mg.sendText('ktgwiff@gmail.com', ['ktgwiff@gmail.com'],
        name + 'wants to be added to the mailing list.',
        name,
        'noreply@example.com', {},
        function (err) {
            if (err) console.log('Oh noes: ' + err);
            else console.log('Success');
        });
};

module.exports = addToMailingList;


