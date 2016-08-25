		/*Unique elements in array */
		
		
        function unique(arr) {
          var obj = {};
          for (var i = 0; i < arr.length; i++) {
              var str = arr[i];
              obj[str] = true;
          }
        return Object.keys(obj);
        }

        var strings = ['мой хуй', 'пизда', 'собакен', 'пизда', 'пизда', 'пизда', '100франклинов', 'порше911'];

        alert( unique(strings) );
   
