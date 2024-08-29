#include <stdio.h>

int powerof2(int n)
{
	int p = 0;
	
	while(n != 1) {
		n /= 2;
		p++;
	}

	return p;

}

int main()
{
	int num, power, x, y;
	
	printf("Enter any power of 2 number to be printed in Hexadecimal format\n");
	scanf("%d", &num);
	
	if (num < 1) {
		printf("Sorry! That is not a valid +2^x number\n");
		return 0;
	}
	
	printf("You entered %d\n", num);
	
	power = powerof2(num);
	printf("It's 2^%d\n", power);
	
	// power = x + 4y where if x=0: print 1, if x=1: print 2, if x=2: print 4, if x=3: print 8 as 
	// leading hexa and y gives you the no. of following 0s to be appended.
	// This is bcoz there is always only 1 bit set in it's binary representation, for any no. that is a power of 2

	x = power % 4;
	y = power / 4;
	
	printf("x = %d, y = %d\n", x, y);
	
	if (x == 0)
		printf("0x1");
	else if (x == 1)
		printf("0x2");	
	else if (x == 2)
		printf("0x4");	
	else if (x == 3)
		printf("0x8");	
	
	while(y--) {
		printf("0");
	}	
	printf("\n");

	return 0;
}
