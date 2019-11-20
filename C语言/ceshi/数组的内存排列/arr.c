#include <stdio.h>

int main(int argc, char const *argv[])
{
  int a = 3;
  int b = 2;
  int array[2];
  array[0] = 1;
  array[1] = 10;
  array[2] = 100;

  int *p = &array[0];
  int i;
  for (i = 0; i < 11; i++)
  {
    printf("*p=%d\n", *p);
    p++;
  }

  printf("====================\n");

  p = &a;
  for (i = 0; i < 10; i++)
  {
    printf("p[i]=%d\n", p[i]);
  }
  return 0;
}
