 alert ('В далекой предалекой Галактике, когда было "на Татуине", а не "в Татуине", трава, девки, йода моложе');

            var dart = prompt('Сидишь на пеньке, вкушаешь бабушкины  пяни и тут выходит Дарт Вейдер. С ним можно "поделиться пянями", "познать темную силу", "клей за триста". Что выберешь ты???').toLowerCase();

            switch (dart) {
                case 'поделиться пянями': 
                var goodFood = prompt('Вкусны ли пяни (да/нет)').toLowerCase;
                var kommunismFood = prompt('Есть желание накормить Вейдера пянями? (да/нет)').toLowerCase();
                if (goodFood == 'да' || kommunismFood == 'да') {
                    alert ('ДартВейдер фценил ваши пяни, но с темной силой надо что-то делать');
                } else {
                    alert ('Лазерным мечом под бок проткнули тебя');
                }    
                break;
                
                case 'познать темную силу':
                var darkPower= prompt('Надоели люди? (да/нет)').toLowerCase;
                var jediDeath= prompt('Есть желание покормить джедаев дифракцией?'(да/нет)).toLowerCase();
                if (darkPower == 'да' && jediDeath == 'да') {
                    alert ('Добро пожаловать на борт');
                } else {
                    alert ('Темная сила умеет ждать');
                }
                break;
                
                case 'клей за триста':
                var kleyPalka= prompt('Есть желание купить джедайский меч (да/нет)').toLowerCase();
                var wannaLego = prompt('Хочется собрать Лего? (да/нет)').toLowerCase;;
                if (wannaLego == 'да' && kleyPalka == 'да') {
                    alert ('Поздравляем вам в районе 30-ника');
                } else {
                    alert ('Девушка разлогиньтесь');
                }
                    break;
  
                default:
                    alert('Еще выбери ты');   
}
