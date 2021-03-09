const getBem = require('../lib/jsx').default;

// step1: global options
const classnames = getBem({
	debug: true,
});

// step2: local
const bem = classnames('nav');

console.info(bem()); // nav
console.info(bem('item')); // nav__item
console.info(
	bem('item', {
		disabled: true,
	})
); // nav__item nav__item--disabled
