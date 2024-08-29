#include <stdio.h>

int main()
{
	double res;
	
	printf("%lf\n", (3.14 + 1e20) - 1e20);
	printf("%lf\n", 3.14 + (1e20 - 1e20));
	
	return 0;
}
