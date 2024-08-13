// markdown-filter.js
const MarkdownIt = require('markdown-it');

module.exports = function (content) {
	// Create a new instance of markdown-it with desired options
	const md = new MarkdownIt({
		html: true,
		breaks: true,
		linkify: true,
		// Add any other options you need (e.g., breaks, linkify, etc.)
	});

	// Render the Markdown content to HTML
	return md.render(content);
};
