#include <stdio.h>

int main()
{
	int a, b;
	
	printf("Enter a\n");
	scanf("%d", &a);

	printf("Enter b\n");
	scanf("%d", &b);
	
	b = a ^ b;
	a = a ^ b;
	b = a ^ b;
	
	printf("a = %d, b = %d\n", a, b);

	return 0;
}
