import bemStyleClassNames, { IBemOptions } from '.';

export type IClassnamesOptions = Omit<
	IBemOptions,
	'elementSep' | 'modifierSep'
>;

/**
 * just use classnames
 * @param options
 */
function getClassNames(options: IClassnamesOptions) {
	const { classNames } = bemStyleClassNames('', options);
	return classNames;
}

export default getClassNames;
