1.
<script>
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 ++a прибавляем единицу к переменной
d = b++; alert(d);           // 1 ++ после переменной прибавляем единицу,но вывод предыдущее значение
c = (2+ ++a); alert(c);      // 5 ++a=2+1,c=2+3
d = (2+ b++); alert(d);      // 4 b++=2,d=2+2
alert(a);                    // 3 1+1+1=3
alert(b);                    // 3 1+1+1=3
</script>
2
<script>
var a = 2;
var x = 1 + (a *= 2);        //1 + (a = a * 2 )=5
</script>
3.
<script>
var a = -19;
var b = 20;
		if (a > 0 && b > 0){
		x = a - b;
		alert(x);
		} else if (a < 0 && b < 0){
			x = a * b;
			alert (x);
			}
		  else {
		  x = a + b;
		  alert (x);
		  }
</script>
4.
<script>
a = +prompt (" ot 1 do 15");
		switch (a) {
		case 1:
			alert ("1");
		case 2:
			alert ("2");
		case 3:
			alert ("3");
		case 4:
			alert ("4");
		case 5:
			alert ("5");
			break;	
		}
</script>
5.
<script>
		var a = 4;
		var b = 7;

		function plus(a, b) {
    		return a + b;
		}

		function minus(a, b) {
    		return a - b;
		}

		function div (a, b) {
    		return a / b;
		}

		function mult (a, b) {
    		return a + b;
		}
	</script>
    6.
    <script>

    function mathOperation(arg1, arg2, operation){
            switch(operation){
                    case "slozhenie":
                        return arg1 + arg2;
                    case "vychitanie":
                        return arg1 - arg2;
                 case "Delenie":
                               return arg1 / arg2;
                    case "umnozhenie":
                        return arg1 * arg2;
                     break;
               }
    }

</script>

7.null == 0;   // false по умолчанию, 