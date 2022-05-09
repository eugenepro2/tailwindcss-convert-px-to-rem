const postcss = require("postcss");
const plugin = require("tailwindcss/plugin");

module.exports = plugin.withOptions(() => {
	return function ({ addVariant }) {
		addVariant('rem', ({container}) => {
			let styles = [];

			container.walkRules((rule) => {
				rule.walkDecls((decl) => {
					styles.push({
						value: decl.value.split('px')[0],
						prop: decl.prop
					});
				});
				rule.removeAll();
				
				styles.forEach(style => {
					rule.prepend(postcss.decl({prop: style.prop, value: `${style.value / 16}rem`}));
				});
			});
		});
	};
});
