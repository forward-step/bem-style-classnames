// 默认提供的选项
const defaultOptions = {
	debug: false, // 调试模式，如果从JSON对象中找部到对应的classname，就会发起警报
	elementSep: '__', // bem中b与e之间的分割线
	modifierSep: '--', // bem中e与m之间的分割线
	deleteDuplicate: true, // 去除重复的类名
};

export default defaultOptions;
