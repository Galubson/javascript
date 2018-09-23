/*funkcje / liczby podzielne przez trzy
functions / numbers divisible by three
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
