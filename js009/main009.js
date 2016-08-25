/*Part sum all array numbers*/
       
       
        function getSums(arr) {
            var result = [];

            var totalSum = arr.reduce(function(sum, item) {
                result.push(sum);
                return sum + item;
            });

            result.push(totalSum);
            return result;
        }

        alert(getSums([1,2,3,4,5])); 
