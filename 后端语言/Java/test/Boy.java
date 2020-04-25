import java.text.ParseException;
import java.text.SimpleDateFormat;

public class Boy {
    // 设置 Boy 属性：身份证号（默认空），姓名（默认空），出生日期时间戳（默认0）
    String id = "";
    String name = "";
    long birthday = 0;

    // 获取年龄，需要的参数：年月日的数字
    public void getAge(String birthdayOne) throws ParseException {
        // 设置时间格式
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日");
        // 获取年龄的时间戳
        birthday = sdf.parse(birthdayOne).getTime();
        // 获取当前时间戳
        long now = System.currentTimeMillis();
        // 输出年龄
        System.out.println((now - birthday) / 1000 / 60 / 60 / 24 / 365);
    }

    public static void main(String[] args) throws ParseException {
        // 实例化
        Boy boy = new Boy();
        // 获取年龄
        boy.getAge("2010年2月1日");
        // 查看更新后的出生日期时间戳
        System.out.println(boy.birthday);
    }
}

// 面向对象练习
// 一个对象boy
// 有id name birthday这三个属性
// 自带方法获取年龄getAge