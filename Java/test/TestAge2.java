public class TestAge2{
  public void pupAge(){
     int age = 11; // 此处若是不给 age 赋值会报错
     age = age + 7;
     System.out.println("小狗的年龄是 : " + age);
  }

  public static void main(String[] args){
    TestAge2 test = new TestAge2();
     test.pupAge();
  }
}