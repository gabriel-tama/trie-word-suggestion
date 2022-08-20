import Node from "./Node.js";

export default class Trie {
	constructor() {
		this.root = new Node("", null);
		this.size = 1;
		this.wordPossible = [];
	}

	insertWord(word) {
		// console.log(word);
		let par = this.root;
		for (let char of word) {
			let found = false;

			for (let child of par.children) {
				if (child.data === char) {
					found = true;
					par = child;
					break;
				}
			}

			if (found === false) {
				let childNode = new Node(char, par);
				par.children.push(childNode);
				this.size++;
				par = childNode;
			}
		}
		if (word.slice(-1) === par.data) {
			par.count++;
		}
	}

	findWord(word) {
		let par = this.root;
		for (let char of word) {
			let found = false;

			for (let child of par.children) {
				if (child.data === char) {
					found = true;
					par = child;
					break;
				}
			}

			if (found === false) {
				console.log("Not Found");
				return;
			}
		}

		if (word.slice(-1) === par.data && par.count > 0) {
			console.log(word + " Found");
			return;
		}
		console.log("Not Found");
		return;
	}
	dfs(currentNode, stack, ans) {
		if (currentNode.children.length === 0) {
			console.log(stack);
			ans.push(stack);
			return;
		}

		if (currentNode.count > 0) {
			// console.log(stack);
			ans.push(stack);
		}

		if (currentNode.children.length !== 0) {
			for (let cur of currentNode.children) {
				this.dfs(cur, stack + cur.data, ans);
			}
		}
	}
	suggestWord(word) {
		let par = this.root;
		let ans = [];
		for (let char of word) {
			let found = false;

			for (let child of par.children) {
				if (child.data === char) {
					found = true;
					par = child;
					break;
				}
			}
			if (found === false) {
				return ans;
			}
		}

		if (par.data === word.slice(-1)) {
			// ans.push(word);
			let stack = word;
			console.log("Word Typed: " + word);
			console.log("Suggestion: ");
			this.dfs(par, stack, ans);
			return ans;
		}
	}
}

// todo :
// improve data structure
// adding word frequency
// limit search for n-closest word
