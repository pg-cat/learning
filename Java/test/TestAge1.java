public class TestAge1{
  public void pupAge(){
     int age = 0;
     age = age + 7;
     System.out.println("小狗的年龄是: " + age);
  }

  public static void main(String[] args){
    TestAge1 test = new TestAge1();
     test.pupAge();
  }
}