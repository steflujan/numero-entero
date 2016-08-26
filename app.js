
var num = parseFloat(prompt("Ingresa un número"));

if (num > 101) {
	document.write("numeros del 1 al 100");    
}
else{
	if (num %2!=0) 
        document.write("odd!");    
	else {
		if (num>=2&&num<5) 
       	 	document.write("good");
		else {
			if (num<=6&&num<=20)
        		document.write("great");
    		else {
    			if(num>20) 
					document.write("perfect");
			}
		}
	}
}	