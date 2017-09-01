Напишите функцию `limit`, которая принимает в качестве аргументов
фукнцию и число. Число определяет сколько раз функцию можно вызвать.
Если количество вызовов превышено, но фукцния должна вернуть `false`.

```js
function playGame() {
    console.log('Playing game =)');
}

let playGameLimited = limit(playGame, 3);

playGameLimited(); // 'Playing game =)'
playGameLimited(); // 'Playing game =)'
playGameLimited(); // 'Playing game =)'
playGameLimited(); // false
```