import bemStyleClassNames from '.';
import { IBemOptions } from '.';

/**
 * used in jsx
 * @param options
 */
function getBem(options: IBemOptions) {
	return function classnames(blockname: string) {
		const { bem } = bemStyleClassNames(blockname, options);
		return bem;
	};
}

export default getBem;
