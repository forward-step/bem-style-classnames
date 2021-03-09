import bemStyleClassNames from '.';
import { IBemOptions } from '.';

const func = (bem: Function) => {
	return (el: HTMLElement, bind: any) => {
		const args = bind.value;
		if (args !== undefined) {
			if (Array.isArray(args)) {
				if (el.className === '') {
					el.className += bem(...args);
				} else {
					el.className += ` ${bem(...args)}`;
				}
			} else {
				console.error('[classNames]: arguments must be a array');
			}
		}
	};
};

/**
 * used in vue
 * @param options
 */
function getBem(options?: IBemOptions) {
	return function bemClassnames(blockname: string) {
		const { bem } = bemStyleClassNames(blockname, options);
		const directive = {
			bind: func(bem),
			beforeMount: func(bem),
		};
		return directive;
	};
}
export default getBem;
