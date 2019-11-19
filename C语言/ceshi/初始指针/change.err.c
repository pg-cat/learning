#include <stdio.h>

void change(int a,int b)
{
  int t = a;
  a = b;
  b = t;
}

int main()
{
  int a =5;
  int b =3;

  change(a,b);
  // 此时 `change()` 函数内 `a` `b` 的值已经互换，但只限于 `change()` 函数内，并未传递出来

  printf("a = %d\nb = %d\n",a,b);
  // 此处获取到的 `a` `b` 的值还是原本 `a` `b` 的值，并未发生改变

  return 0;
}