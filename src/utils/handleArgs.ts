import { isJson } from '.';
import { IClassNamesArgs } from '..';

/**
 * process arguments
 * 处理IClassNamesArgs类型的参数
 * @param deleteDuplicate 是否去重
 * @param args
 */
function handleArgs(
	deleteDuplicate: boolean = true,
	...args: IClassNamesArgs
): string[] {
	const res: string[] = [];
	for (const arg of args) {
		// undefined or null
		if (arg === undefined || arg === null) {
			continue;
		}
		// type is string
		else if (typeof arg === 'string') {
			res.push(arg);
		}
		// type is Array
		else if (Array.isArray(arg)) {
			const temp = handleArgs(deleteDuplicate, ...arg);
			res.push(...temp);
		}
		// type is Object
		else if (isJson(arg)) {
			Object.keys(arg).forEach((clsname) => {
				arg[clsname] === true && res.push(clsname);
			});
		}
	}
	if (deleteDuplicate === true) {
		const set = new Set<string>(res);
		return Array.from(set);
	}
	return res;
}

export default handleArgs;
