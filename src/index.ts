import defaultOptions from './config';
import { handleArgs, map2string } from './utils';
type IClassname =
	| string
	| undefined
	| null
	| {
			[classname: string]: boolean;
	  };

export type IClassNamesArgs = (IClassname | IClassname[])[];
export type IBemOptions = Partial<typeof defaultOptions>;

/**
 * 根据block-name和options生成bem选项
 * @param blockName block-name
 * @param options
 */
function bemStyleClassNames(blockName?: string, options?: IBemOptions) {
	// 提供默认选项
	options = {
		...defaultOptions,
		...options,
	};
	blockName = blockName ?? '';

	/**
	 * To generate the name of the class
	 * 生成类名
	 * @param this
	 * @param args
	 * @return {string} classname
	 */
	function classNames(this: any, ...args: IClassNamesArgs): string {
		let res: string[] = [];
		// handle args
		res.push(...handleArgs(options?.deleteDuplicate, ...args));
		// handle this
		return map2string(this, res, options?.debug).join(' ');
	}

	/**
	 * use classname with bem style
	 * 使用BEM风格的classname
	 * @param this
	 * @param elementName element-name in bem
	 * @param args modifier in bem
	 */
	function bem(
		this: any,
		elementName?: string,
		...args: IClassNamesArgs
	): string {
		// 默认选项
		elementName = elementName ?? '';
		// 处理前缀
		let prefixName: string = '';
		if (blockName !== undefined && blockName !== '' && elementName === '') {
			prefixName = blockName;
		} else if (blockName === '' && elementName !== '') {
			prefixName = elementName;
		} else if (blockName !== '' && elementName !== '') {
			prefixName = `${blockName}${options?.elementSep}${elementName}`;
		} else if (blockName === '' && elementName === '') {
			console.error('please input block-name or element-name');
		}
		let res: string[] = [prefixName];
		// handle args
		for (const mod of handleArgs(options?.deleteDuplicate, ...args)) {
			res.push(`${prefixName}${options?.modifierSep}${mod}`);
		}
		// handle this
		return map2string(this, res, options?.debug).join(' ');
	}

	return {
		classNames,
		bem,
	} as const;
}

export default bemStyleClassNames;
