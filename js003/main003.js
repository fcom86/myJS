/*Напишите код, который:
1. Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
2. Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
3. При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
4. Выводит сумму всех значений массива*/


          var numbers = [];
          while (true) {
              var value =prompt('Input digits');
                  if (value === "" || value ===null) {
                      break;
                  } else {
                      numbers.push(+value);
                  }
          }

          var sum = 0;
          for (var i = 0; i<numbers.length; i++) {
              sum +=numbers[i];
          }
          alert(sum);
