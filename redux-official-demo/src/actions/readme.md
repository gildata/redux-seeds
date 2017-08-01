# Actions


```jsx

{
    type: 'ADD_TODO',
    text: 'Build my first Redux app'
}

```


# Action Creators



```jsx

// ES5 function
function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    };
}

// ES6 arrow function
const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    };
};

// ES6 arrow function & (single syntax) auto ruturn
const addTodo = (text) => ({
    type: 'ADD_TODO',
    text
});


let text = `todo title`;

store.dispatch(addTodo(text="default text"));




```




# parseInt() & toString() & Number.parseInt()

> parseInt(string, radix);

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

> Number.parseInt(string[, radix])

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt


```js
// 向下取整

parseInt(`2.9`);

// 2

```


# default values


```jsx


let id = (id ? id : undefined);

// not defined !== undefined

const func = (id = `default value`) => {
    // 
}

payloads: {
    id: (id || `default value`),
    text: ''
}




```



