#include <stdio.h>
#include "max.h"
#include "min.h"

int main(int argc, char const *argv[])
{
  int a = 11;
  int b = 22;
  int maxNum = max(a, b);
  printf("the max value is %d\n", maxNum);
  return 0;
}
