# used in jsx

step1: global options

```js
import getBem from "bem-style-classnames/lib/jsx";
export default getBem({
	debug: true,
    elementSep: '__',
    modifierSep: '--',
});
```

step2: local

```jsx
import getBem from 'step1: global options';
const bem = getBem('nav');

const NavWithBem = (props) => {
    return (
        {/* .nav */}
        <nav className={bem()}>
            {/* .nav__container */}
            <ul className={bem('container')}>
                {/* .nav__item */}
                <li className={bem('item')}></li>
                <li className={bem('item')}></li>
                {/* .nav__item .nav__item--disabled */}
                <li className={bem('item', 'disabled')}></li>
                {/* .nav__item .nav__item--active */}
                <li className={bem('item', {
                        'active': true
                    })}></li>
            </ul>
        </nav>
    );
};
```



# used in vue

step 1: global options

```js
import getBem from "bem-classnames/lib/vue";
// step 1: global options
export default getBem({
    debug: true
});
```

step 2: register local directives

```js
import getBem from 'step 1: global options';

export default {
    data() {
        return {};
    },
    directives: {
        classnames: getBem("nav"),
    },
    methods: {},
};
```

step 3: use in html

```vue
<template>
    <div v-classnames="[]">
        <!-- nav__item -->
        <div v-classnames="['item']">item1</div>
        <!-- nav__item nav__item--diabled -->
        <div
            v-classnames="[
                'item',
                {
                    disabled: true,
                },
            ]"
        >
            item2
        </div>
    </div>
</template>
```



# classnames

`classNames`支持多种参数形式，string | Object | Array | undefined | null

```js
import getClassNames from 'bem-style-classnames/lib/classnames';
const classNames = getClassNames({
    debug: true
});

// string
classNames('foo', 'bar'); // => 'foo bar'
// Object
classNames('foo', { bar: true }));; // => 'foo bar'
// Array
classNames('foo', ['bar', {}]);; // => 'foo bar'
// total
classNames('one', ['two', { 'three': true, 'four': false }], 'five'); // => 'one two three five'
```



#  支持CSSModule

以classnames为例，其他的类似

```jsx
import getClassNames from 'bem-style-classnames/lib/classnames';
const classNames = getClassNames({
    debug: true
});

const style = {
    'icon': 'abc',
    'icon--up': 'def',
    'icon--down': 'xyz',
};

const cls = classNames.bind(style);

cls('icon', 'icon--up'); // => 'abc def'
cls('not found'); // warn to console
```





# options

## debug

> 调试模式下，如果从style中找不到对应的选项，则提示警告，默认关闭

```js
const { classNames } = bemClassNames('', { debug: true });
const style = {
    'icon': 'abc',
    'icon--up': 'def',
    'icon--down': 'xyz',
};

const cls = classNames.bind(style);

cls('xxx'); // warn to console
```



## elementSep

> bem中block-name与element-name之间的分割线，默认为`__`

```js
const { bem } = bemClassNames('nav', { elementSep: '_' });
bem('item'); // => nav_item
```



## modifierSep

> 修饰符分割线，默认为`--`

```js
const { bem } = bemClassNames('', { modifierSep: '-' });
bem('icon', 'up'); // => icon icon-up

const { bem } = bemClassNames('', { modifierSep: '---' });
bem('icon', 'up'); // => icon icon---up
```



## deleteDuplicate

> 是否删除重复的类名，默认为true

