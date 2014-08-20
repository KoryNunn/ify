var ify = require('../'),
	grape = require('grape');

grape('ifys', function(t){
	t.plan(1);


	t.equal(ify('stuff'), 'stuffify');
});

grape('ifys lots', function(t){
	t.plan(1);


	t.equal(ify('stuff', 'and', 'that'), 'stuff and thatify');
});

grape('ifys trailing e', function(t){
    t.plan(1);

    t.equal(ify('badge'), 'badgify');
});

grape('ifys UPPERCASE', function(t){
    t.plan(1);

    t.equal(ify('BADGE'), 'BADGIFY');
});

grape('ifys mixed case as lowercase', function(t){
    t.plan(1);

    t.equal(ify('BaDgE'), 'BaDgify');
});