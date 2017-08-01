# react component


## react-unknown-prop

https://fb.me/react-unknown-prop

https://facebook.github.io/react/warnings/unknown-prop.html

> The unknown-prop warning will fire , 
if you attempt to render a DOM element with a prop that is not recognized by React as a legal DOM attribute/property.


> Warning: Todo: `key` is not a prop. 
Trying to access it will result in `undefined` being returned. 
If you need to access the same value within the child component, you should pass it as a different prop.



## attributes `data-*`


> data-*

https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*

https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes



https://facebook.github.io/react/docs/dom-elements.html

> In React, all DOM properties and attributes (including event handlers) should be camelCased.

> The exception is `aria-*` and `data-*` attributes, 
which should be lowercased. For example, you can keep `aria-label` as `aria-label`.


```jsx



const Todo = ({onClick, completed, text, indexKey}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: (completed ? 'line-through' : 'none'),
            color: (completed ? 'green' : 'red'),
        }}
        data-indexKey={indexKey}
        >
        {text}
    </li>
);

/* 
    data_indexKey: PropTypes.number.isRequired
    dataIndexKey: PropTypes.number.isRequired

    data-indexKey: PropTypes.number.isRequired
*/


```


