<!DOCTYPE html>
<html>

var x = 0;

do{
	if(x<10){
		if(x < 4 || x > 0){
			continue;
		}
		console.log(x);
	}
	console.log('------------');
}while(x<20);

</html>