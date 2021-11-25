let aglo = {
	constructor(param) {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		param === "canvas" ? "canvas" : "ctx";
		if (param === "canvas") return canvas;
		else return ctx;
	},
	appendCanvas() {
		document.body.appendChild(this.constructor("canvas"));
	},
};
aglo.constructor();
aglo.appendCanvas();
