import Trie from "./Trie.js";

let trie = new Trie();

var request = new XMLHttpRequest();
request.open("GET", "IndoWordList.txt");
request.onreadystatechange = function () {
	if (request.readyState === 4) {
		var textfileContent = request.responseText;
		var lines = textfileContent.split("\n");
		for (const iterator of lines) {
			trie.insertWord(iterator);
		}
		let searchInput = document.getElementById("search");
		const handlerInput = (e) => {
			let result = document.getElementById("list");
			result.innerHTML = "";
			if (e.target.value.length >= 3) {
				trie.suggestWord(e.target.value).forEach((element) => {
					const li = document.createElement("li");
					li.appendChild(document.createTextNode(element));
					result.appendChild(li);
				});
			}
		};
		searchInput.addEventListener("input", handlerInput);
	}
};
request.send();
