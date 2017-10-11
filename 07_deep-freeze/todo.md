Напишите функцию `deepFreeze` замораживающую объект на всех уровнях (вложенные объекты и массивы).

```js
let object = { object: {}, array: [] };

let frozenObject = deepFreeze(object);

frozenObject.value = 42; // ничего не происходит
frozenObject.object.value = 42; // ничего не происходит
frozenObject.array.push(42); // ничего не происходит
```