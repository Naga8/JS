var rem, temp, final = 0;
		var number = 1234321;

		temp = number;
		while(number>0)
		{
			rem = number%10; ///
			number = parseInt(number/10); //123432
			final = final*10+rem; // 1
		}
		if(final==temp)
		{
			console.log("The input number is Palindrome");
		}
		else
		{
			console.log("The input number is not palindrome");
		}


//         input -> "[ {  (  } ]"
// output -> "unbalanced" 

// input -> "[ {  (   ) } ]"
// output -> "balanced" 