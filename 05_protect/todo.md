Напишите функцию `protect`, которая принимает значение (`value`) и пароль (`password`). `protect` возвращает функцию, которая принимает строку (`string`) и если она совпадает с паролем (`string === passwor`d), то фукнция возращает значение (`value`).

```js
let getSecret = protect('1234-5678-9012-3456', 'qwerty');

getSecret('qwerty'); // '1234-5678-9012-3456'
getSecret(); // undefined
```