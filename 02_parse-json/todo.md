Функция `parseJSON` **синхронно** конвертирует JSON-текст в JS-объект.

Перепишите функцию `parseJSON` используюя обещания, чтобы функиця работала **асинхронно**.

Функция будет принимать JSON-текст и возвращать обещание.

Вот так может выглядеть вызов `parseJSON`:

```js
parseJSON('{"JSON": "JavaScript Object Notation"}')
    .then(data => console.log(data));
```

В терминале должно быть:

```sh
> { JSON: "JavaScript Object Notation" }
```