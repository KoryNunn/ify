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