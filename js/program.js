'use scrict';

// Enkodowanie przyjmowanych danych
process.stdin.setEncoding('utf-8');

// Ustawienie nasłuchiwania na zdarzenia odczytu
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if(input !== null) {
    	var instruction = input.toString().trim();
    	switch (instruction) {
    		case '/exit':
    			process.stdout.write('Quiting app!\n');
    			process.exit();
    			break;
		    case '/version':
                process.stdout.write('\nNode.js Version\n');
				process.stdout.write(process.version);
				break;
			case '/platform':
				process.stdout.write("\n" + "Platform: " + process.platform + "\n");
				break;
		default:
			process.stderr.write('Wrong instruction!\n');
    	}
    }
});
