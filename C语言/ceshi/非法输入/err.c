#include <stdio.h>

int main(int argc, char const *argv[])
{
  int a;
  int b;
  int c;
  scanf("%d",&a);
  scanf("%d",&b);
  scanf("%d",&c);
  printf("这是a：%d\n这是b：%d\n这是c：%d\n",a,b,c);
  return 0;
}

// 注：
// 此处 a b c 声明时为整数型
// 赋值时若为非整数型，则保持 a b c 声明时的状态