const getClassNames = require('../lib/classnames').default;

const classnames = getClassNames({
  debug: true,
});

console.info(classnames('nav')); // nav
console.info(classnames('nav__item')); // nav__tiem
console.info(
	classnames('nav__item', {
		'nav__item--disabled': true,
	})
); // nav__item nav__item--disabled
