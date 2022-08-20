export default class Node {
	constructor(data, parent) {
		this.data = data;
		this.parent = parent;
		this.children = [];
		this.count = 0; // count number of completed word / leaf
	}
}
