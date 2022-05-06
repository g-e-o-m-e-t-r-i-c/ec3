const jsdom = require('jsdom');

(async () => {
	const data = await fetch('https://atcoder.jp/contests');
	const text = await data.text();
	const doc = new jsdom.JSDOM(text);

	const spans = doc.window.document.querySelectorAll('[title="Algorithm"]');
	for (let s of spans) {
		console.log(s.nextElementSibling.nextElementSibling.innerHTML);
	}
})();
