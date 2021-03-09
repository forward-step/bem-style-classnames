const bemStyleClassNames = require('../lib').default;

const { bem, classNames } = bemStyleClassNames('nav',{
  debug: true,
  elementSep: '__',
  modifierSep: '--',
});


console.info(classNames('nav')); // nav
console.info(classNames('nav__item')); // nav__tiem
console.info(
	classNames('nav__item', {
		'nav__item--disabled': true,
	})
); // nav__item nav__item--disabled

console.info(bem()); // nav
console.info(bem('item')); // nav__item
console.info(
	bem('item', {
		disabled: true,
	})
); // nav__item nav__item--disabled
