String.prototype.reverse = function() {
	var result = "";
	for (var i = this.length - 1; i >= 0; i--) {
	 result += this[i];
	}
	return result;
};

String.prototype.camelCase = function() {
	var result = "";
	var prevChar = undefined;
	for (var i = 0; i < this.length; i++) {
		if(i == 0 || prevChar == " ") {
			result += this.charAt(i).toUpperCase();
		} else {
			result += this.charAt(i);
		}
		prevChar = this.charAt(i);
	}
	return result;
};

String.prototype.longestWord = function() {
	var words = this.split(" ");
	var index = 0;
	var maxLength = 0;
	var getIndex = function(element, i, array){
		if(maxLength < element.length) {
			maxLength = element.length;
			index = i;
		}
	}
	words.forEach(getIndex);
	return words[index];
};

module.exports = String;