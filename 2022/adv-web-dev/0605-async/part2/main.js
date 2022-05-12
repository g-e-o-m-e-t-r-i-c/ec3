const jsdom = require('jsdom');

(async () => {
	const data = await fetch('https://atcoder.jp/contests');
	const text = await data.text();
	const doc = new jsdom.JSDOM(text);

	const spans = doc.window.document.querySelectorAll('[title="Algorithm"]');
	spans.forEach((s) => {
		console.log(s.nextElementSibling.nextElementSibling.textContent);
	});
})();
