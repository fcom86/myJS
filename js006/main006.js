
        /*Compare user by age*/
        
        
        function compare(user1,user2){
            return user1.age - user2.age;
        }

        var vasya = { name: "Вася", age: 23 };
        var masha = { name: "Маша", age: 18 };
        var vovochka = { name: "Вовочка", age: 6 };
        var people = [ vasya , masha , vovochka ];

        people.sort(compare);

        for (var i = 0; i<people.length; i++) {
            alert(people[i].name)
        }

