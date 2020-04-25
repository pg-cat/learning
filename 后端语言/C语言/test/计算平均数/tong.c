#include <stdio.h>

int main(int argc, char const *argv[])
{
  int i;
  int count=0;
  int s = 0;
  while(1){
    scanf("%d",&i);
    if(i==0) break;
    s+=i;
    count++;
  }
  printf("%d,%d\n",s,count);
  return 0;
}
