module.exports = function ify(){
	var args = Array.prototype.slice.call(arguments),
    result = args.join(' ');

    if(result[result.length -1].toLowerCase() === 'e'){
        result = result.substring(0, result.length -1);
    }

    if(result === result.toUpperCase()){
        return result + 'IFY';
    } else {
        return result + 'ify';
    }
};