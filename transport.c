#include <stdio.h>
#include <math.h>

int main() {
printf("Energy = ");
float mass = 1.00;
float accessPoint = 6.75;
float fragile = mass*pow(accessPoint,2)/2;
printf("%f", fragile);
return 0;
}