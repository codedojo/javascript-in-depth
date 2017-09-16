Метод `http.get` отправляет запрос на указанный адрес.
После получения ответа или ошибки вызывается функция обратного вызова `done`.

```js
http.get(url, (error, response) => {
    if (error) return console.error(error);

    console.log(response);
});
```

Перепишите метод `http.get` используя обещания.

```js
http.get(url)
    .then(response => console.log(response))
    .catch(error => console.error(error));
```