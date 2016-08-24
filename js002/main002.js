//Создайте фунцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает
//новый массив, который содержит только числа из arr из диапазона от a до b. То есть, проверка
//имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.


            function filterRange(arr, a, b) {
                var result = [];
                for (var i=0; i<arr.length; i++) {
                    if (arr[i] >= a&& arr[i] <= b) {
                        result.push(arr[i]);
                    }
                }
                return result;
            }

            var arr = [5,4,3,2,1];

            var filtered = filterRange(arr,3,5)
            alert(filtered);
