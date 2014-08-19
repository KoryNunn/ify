module.exports = function ify(){
	var args = Array.prototype.slice.call(arguments);

	return args.join('') + 'ify';
};