public class Scope
{
	static int x = 10;
	int y = 10;

	public static void main(String[] args)
	{
		int x = 20;
		int y = 20;

		System.out.println("x = " + x);
		System.out.println("this.x = " + Scope.x);
		System.out.println("y = " +y);
		//System.out.println("Scope.y = " + this.y);
		//non-static variable this cannot be referenced from a static context
	}
}

class ScopeTester
{
	int number = 20;
	public void test()
	{
		int number = 10;

		doubleTheNumber(number);
		System.out.println(this.number);
		System.out.println(number);
	}

	void doubleTheNumber(int number)
	{
		this.number = number * 2;
	}
}

class Vehicle {
	double speed = 0;
	double accelerate() {
	    speed = speed + 2;
	    return speed;
	}
}

class Motorcycle extends Vehicle {
    double accelerate() {
	speed = speed + 4;
	return speed;
    }
}

public class Television {

    private int volume;

    public void increaseVolume() {
	if (volume < 20)
	    volume = volume + 1;
    }
}

//int x = 10;
//double y = 2.5;
//short z = 50;

//x += 2 + y * 4;
//y *= 5 + 5 * 3;
//z /= 10;

class Vehicle {

    void stop() {
	System.out.println("Breaking...");
    }
}

class Motorcycle extends Vehicle {
    public void slowAndStop() {
	System.out.println("Slowing down...");

	stop();
    }
}

/*try {
    System.out.println("Start");
    int x = 1 / 0;
    String y = Integer.toString(x);
    System.out.println(y);
}
catch (ArithmeticExeption ex) {
    System.out.println("Arithmetic Exeption");
}
catch (Exception ex) {
    System.out.println("Undefined Exeption")
}*/

//Object o1 = new Integer ();
//Object o2 = new Double ();

//int i = (int)o1;
//double d = (double)02;

int z = 60;
z += 40 % 4 + 5 * 2;

char[][] grades = new char[][]{
    {'A', 'C', 'A'},
    {'B', 'A', 'F'},
    {'A', 'A', 'B'}
};

grades[1][2] = 'C';

int j = 42;
short s = (short)j;
long l = s;
int k = (int)1;

int data = Integer.MAX_VALUE + 1;
System.out.println(data);

public class Circle {
    double circumference;

    public Circle() {
	cicumference = 0;
    }
    public Circle(double radius) {
	circumference = 2 * Math.PI * radius;
    }
}

class Television {
    public static void powerOn() {

	try {
	EntertainmentSystem.turnOn();
	}

	finally{
	setVolume(5);
	}

     }
}

boolean[][] array = new boolean[5][3];

public static void processPayload(String payload, String error) {

    if (payload != null)
	System.out.println(payload);
    else if (error != null)
	if (error.length() == 0)
	    System.out.println("A random error occurred.");
	else
	    System.out.println(error);
}

processPayload(null, null);

//Pearson Code
public class MyNumbersClass {
    public static void main(Integer[] args) {
	for(int sum:args) {
	    System.out.println(2*sum);
	}
	main();
    }

    public static void main() {
	System.out.println("No data");
    }

    public static void main(String[] args) {
	for(String sum:args) {
	    System.out.println(sum);
	}
	main();
    }
}

class Random {
    public static void test() {
	double y = Math.random();
	int y = Math.random();

	System.out.println(y);
    }
}

public class Foo extends Bar {

}

class NumberScope
{
	static int x = 5;
	int y = 5;

	public void test()
	{

	    NumberScope s = new NumberScope();
	    x = 10;
	    s.y = 20;
	    this.y = 10;
	    System.out.println(x);
	    System.out.println(y);
	}
}

short num1 = 257;
byte num2 == (byte) num1;

retrieveData();
for (;;) {
    boolean more = checkForMoreData();
    if (!more)
	break;
    retrieveData();
}

do
{
    retrieveData();
} while (checkForMoreData());

class A {
    public void test() {
    }
}

class B extends A{
    @Override
    public String to String() {
	return "";
    }
}