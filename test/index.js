var ify = require('../'),
	grape = require('grape');

grape('ifys', function(t){
	t.plan(1);


	t.equal(ify('stuff'), 'stuffify');
});