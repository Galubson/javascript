/*funkcje / liczby podzielne przez trzy od 0 do 90 i od 0 do 120
functions / numbers divisible by three drom 0 to 90 and from 0 to 120
*/
function three(z){
	for(var i=0;i<=z;i++){
		if((i%3)!=0)
		continue;
		console.log(i);
	}
	console.log("\n");
}
three(90);
three(120);
