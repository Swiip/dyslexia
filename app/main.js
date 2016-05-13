(function bookmarklet() {
	function traverse(element) {
		if (element.children.length > 0) {
			for (var i = 0; i < element.children.length; i++) {
				traverse(element.children[i]);
			}
		} else {
			element.textContent = transform(element.textContent);
		}
	}

	function transform(text) {
		var words = text.split(' ');
		for (var i = 0; i < words.length; i++) {
			if (words[i].length > 3 && Math.random() < 0.1) {
				words[i] = shuffle(words[i]);
			}
		}
		return words.join(' ');
	}

	function shuffle(string) {
		var result = string[0];
		var choices = string.slice(1, string.length - 1).split('');
		while (choices.length) {
			var index = Math.floor(Math.random() * choices.length);
			var element = choices.splice(index, 1);
			result += element;
		}
		result += string[string.length - 1];
		return result;
	}

	window.setInterval(function () {
		traverse(document);
	}, 50);
})();
