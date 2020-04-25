#include <stdio.h>

/*
stdin
stdout
stderr
*/

int main()
{
  // printf("plesse input the value a :\n");
  // 同下一行
  fprintf(stdout,"plesse input the value a :\n");
  
  int a;

  // scanf("%d",&a);
  // 同下一行
  fscanf(stdin,"%d",&a);

  if(a<0){
    // 标准错误流
    fprintf(stderr,"the value must > 0\n");
    return 1;
  }

  return 0;
}