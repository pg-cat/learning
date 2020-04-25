#include <stdio.h>

int main()
{
  printf("input the int value i:\n");
  int i, j;
  scanf("%d", &i);
  printf("input the int value j:\n");
  scanf("%d", &j);
  if (j != 0)
  {
    printf("%d/%d=%d\n", i, j, i / j);
  }
  else
  {
    fprintf(stderr, "j != 0\n");
  }
  return 0;
}