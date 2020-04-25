#include <stdio.h>

void change(int *a,int *b)
{
  int t = *a;
  *a = *b;
  *b = t;
}

int main()
{
  int a =5;
  int b =3;
  change(&a,&b); // 此处使用变量地址进行传参
  printf("a = %d\nb = %d\n",a,b);
  return 0;
}