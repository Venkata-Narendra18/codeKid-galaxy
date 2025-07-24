export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  language: string;
}

export const questionBanks: Record<string, Record<string, Question[]>> = {
  python: {
    beginner: [
      {
        id: 1,
        question: "What does 'print()' do in Python?",
        options: ["Deletes text", "Shows text on screen", "Creates a file", "Nothing"],
        correct: 1,
        explanation: "print() displays text on the screen for users to see!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 2,
        question: "Which symbol is used for comments in Python?",
        options: ["//", "#", "/*", "%%"],
        correct: 1,
        explanation: "In Python, we use # to write comments that explain our code!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 3,
        question: "What is a variable in programming?",
        options: ["A fixed number", "A container for data", "An error", "A function"],
        correct: 1,
        explanation: "Variables are like boxes that store information we can use later!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 4,
        question: "How do you create a variable called 'age' with value 10?",
        options: ["age = 10", "var age = 10", "int age = 10", "age := 10"],
        correct: 0,
        explanation: "In Python, we simply write variable_name = value to create variables!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 5,
        question: "What will print('Hello World') output?",
        options: ["Hello", "World", "Hello World", "Error"],
        correct: 2,
        explanation: "print() displays exactly what's inside the quotes!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 6,
        question: "Which of these is a string in Python?",
        options: ["42", "'Hello'", "True", "3.14"],
        correct: 1,
        explanation: "Strings are text surrounded by quotes like 'Hello' or \"Hello\"!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 7,
        question: "What does the len() function do?",
        options: ["Deletes items", "Counts characters/items", "Creates lists", "Sorts data"],
        correct: 1,
        explanation: "len() tells us how many characters are in a string or items in a list!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 8,
        question: "How do you get user input in Python?",
        options: ["get()", "input()", "read()", "scan()"],
        correct: 1,
        explanation: "input() lets users type something that our program can use!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 9,
        question: "What will 2 + 3 * 4 equal in Python?",
        options: ["20", "14", "24", "11"],
        correct: 1,
        explanation: "Python follows math order: multiplication first (3*4=12), then addition (2+12=14)!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 10,
        question: "How do you create a list in Python?",
        options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "list(1, 2, 3)"],
        correct: 0,
        explanation: "Lists use square brackets [] to hold multiple items!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 11,
        question: "What is True and False in Python?",
        options: ["Numbers", "Strings", "Boolean values", "Lists"],
        correct: 2,
        explanation: "True and False are special boolean values for yes/no decisions!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 12,
        question: "How do you check if 5 equals 5 in Python?",
        options: ["5 = 5", "5 == 5", "5 === 5", "equals(5, 5)"],
        correct: 1,
        explanation: "We use == to compare if two things are equal. = is for assigning values!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 13,
        question: "What keyword starts an if statement?",
        options: ["when", "if", "check", "condition"],
        correct: 1,
        explanation: "We use 'if' to make decisions in our code!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 14,
        question: "How do you write 'not equal to' in Python?",
        options: ["<>", "!=", "=/=", "not="],
        correct: 1,
        explanation: "!= means 'not equal to' - like 5 != 3 is True!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 15,
        question: "What does range(3) create?",
        options: ["[1, 2, 3]", "[0, 1, 2]", "[3]", "[0, 1, 2, 3]"],
        correct: 1,
        explanation: "range(3) creates numbers from 0 up to (but not including) 3!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 16,
        question: "How do you start a for loop in Python?",
        options: ["loop", "for", "repeat", "while"],
        correct: 1,
        explanation: "for loops let us repeat code for each item in a list or range!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 17,
        question: "What does str(42) do?",
        options: ["Converts 42 to text", "Converts 42 to decimal", "Deletes 42", "Multiplies by 42"],
        correct: 0,
        explanation: "str() converts numbers to text so we can combine them with other text!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 18,
        question: "How do you add an item to the end of a list?",
        options: ["list.add()", "list.append()", "list.insert()", "list.push()"],
        correct: 1,
        explanation: "append() adds a new item to the end of a list!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 19,
        question: "What is indentation in Python?",
        options: ["Decoration", "Spaces/tabs that show code blocks", "Comments", "Variables"],
        correct: 1,
        explanation: "Indentation (spaces) tells Python which code belongs together in blocks!",
        difficulty: "beginner",
        language: "python"
      },
      {
        id: 20,
        question: "How do you define a function in Python?",
        options: ["function", "def", "func", "define"],
        correct: 1,
        explanation: "def starts a function definition - like def my_function():!",
        difficulty: "beginner",
        language: "python"
      }
    ],
    intermediate: [
      {
        id: 21,
        question: "What is the output of list(range(2, 8, 2))?",
        options: ["[2, 4, 6]", "[2, 4, 6, 8]", "[2, 3, 4, 5, 6, 7]", "[4, 6]"],
        correct: 0,
        explanation: "range(2, 8, 2) starts at 2, stops before 8, and steps by 2: [2, 4, 6]",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 22,
        question: "What does the 'in' operator do?",
        options: ["Adds items", "Checks if item exists", "Removes items", "Sorts items"],
        correct: 1,
        explanation: "'in' checks if an item exists in a list/string. Like 'a' in 'cat' returns True!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 23,
        question: "What is a dictionary in Python?",
        options: ["A book", "Key-value pairs", "A list", "A function"],
        correct: 1,
        explanation: "Dictionaries store data as key-value pairs like {'name': 'Alice', 'age': 10}!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 24,
        question: "How do you access a dictionary value?",
        options: ["dict[key]", "dict.key", "dict(key)", "dict->key"],
        correct: 0,
        explanation: "Use square brackets with the key: my_dict['name'] gets the name value!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 25,
        question: "What does 'else' do in an if statement?",
        options: ["Starts a new condition", "Runs when if is False", "Ends the program", "Creates a loop"],
        correct: 1,
        explanation: "'else' runs when the 'if' condition is False - like a backup plan!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 26,
        question: "What is list slicing [1:4]?",
        options: ["Items 1 to 4", "Items at index 1, 2, 3", "Items 1 and 4", "Delete items"],
        correct: 1,
        explanation: "[1:4] gets items at positions 1, 2, and 3 (stops before 4)!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 27,
        question: "What does the break statement do?",
        options: ["Breaks the computer", "Exits a loop", "Skips an iteration", "Starts a loop"],
        correct: 1,
        explanation: "'break' immediately exits the current loop!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 28,
        question: "What does continue do in a loop?",
        options: ["Stops the loop", "Skips to next iteration", "Restarts the loop", "Breaks the loop"],
        correct: 1,
        explanation: "'continue' skips the rest of the current iteration and goes to the next one!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 29,
        question: "What is the purpose of try/except?",
        options: ["To try new code", "To handle errors", "To repeat code", "To define functions"],
        correct: 1,
        explanation: "try/except helps handle errors gracefully without crashing your program!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 30,
        question: "How do you import a module in Python?",
        options: ["include", "import", "require", "load"],
        correct: 1,
        explanation: "'import' brings in code from other files or libraries!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 31,
        question: "What does len('Hello') return?",
        options: ["4", "5", "6", "Error"],
        correct: 1,
        explanation: "len() counts characters: H-e-l-l-o = 5 characters!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 32,
        question: "What is the difference between '=' and '=='?",
        options: ["No difference", "= assigns, == compares", "= compares, == assigns", "Both assign"],
        correct: 1,
        explanation: "= assigns values (x = 5), == compares values (x == 5)!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 33,
        question: "What does 'return' do in a function?",
        options: ["Ends the function", "Gives back a value", "Both A and B", "Restarts the function"],
        correct: 2,
        explanation: "'return' ends the function and sends a value back to whoever called it!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 34,
        question: "How do you convert a string to integer?",
        options: ["str()", "int()", "float()", "num()"],
        correct: 1,
        explanation: "int() converts strings to whole numbers: int('42') becomes 42!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 35,
        question: "What is a while loop?",
        options: ["Loops forever", "Loops while condition is True", "Loops once", "Loops backwards"],
        correct: 1,
        explanation: "while loops repeat as long as a condition stays True!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 36,
        question: "What does .split() do to a string?",
        options: ["Deletes it", "Breaks it into a list", "Reverses it", "Capitalizes it"],
        correct: 1,
        explanation: ".split() breaks a string into a list: 'a,b,c'.split(',') → ['a', 'b', 'c']!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 37,
        question: "How do you join list items into a string?",
        options: [".join()", ".merge()", ".combine()", ".concat()"],
        correct: 0,
        explanation: "Use .join(): ','.join(['a', 'b', 'c']) → 'a,b,c'!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 38,
        question: "What does enumerate() do?",
        options: ["Counts items", "Adds index numbers", "Sorts items", "Removes duplicates"],
        correct: 1,
        explanation: "enumerate() adds index numbers: for i, item in enumerate(list)!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 39,
        question: "What is the output of 5 // 2?",
        options: ["2.5", "2", "3", "Error"],
        correct: 1,
        explanation: "// is floor division - it gives only the whole number part: 5 ÷ 2 = 2!",
        difficulty: "intermediate",
        language: "python"
      },
      {
        id: 40,
        question: "What does 'global' keyword do?",
        options: ["Creates variables", "Accesses outer variables", "Deletes variables", "Makes variables public"],
        correct: 1,
        explanation: "'global' lets you modify variables outside the function from inside it!",
        difficulty: "intermediate",
        language: "python"
      }
    ],
    advanced: [
      {
        id: 41,
        question: "What is a list comprehension?",
        options: ["A type of loop", "A compact way to create lists", "A function", "An error"],
        correct: 1,
        explanation: "List comprehensions create lists in one line: [x*2 for x in range(5)]!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 42,
        question: "What does *args do in a function?",
        options: ["Multiplies arguments", "Accepts any number of arguments", "Creates errors", "Nothing"],
        correct: 1,
        explanation: "*args lets a function accept any number of positional arguments!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 43,
        question: "What is a lambda function?",
        options: ["A Greek letter", "An anonymous function", "A loop", "A variable"],
        correct: 1,
        explanation: "Lambda creates small anonymous functions: lambda x: x*2!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 44,
        question: "What does **kwargs do?",
        options: ["Creates keywords", "Accepts keyword arguments", "Deletes arguments", "Sorts arguments"],
        correct: 1,
        explanation: "**kwargs accepts any number of keyword arguments as a dictionary!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 45,
        question: "What is a decorator in Python?",
        options: ["A design pattern", "A function that modifies other functions", "A variable", "A loop"],
        correct: 1,
        explanation: "Decorators modify or enhance functions using @decorator syntax!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 46,
        question: "What is the purpose of __init__ method?",
        options: ["Starts the program", "Initializes objects", "Ends objects", "Imports modules"],
        correct: 1,
        explanation: "__init__ is the constructor that sets up new objects when they're created!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 47,
        question: "What does yield do in a function?",
        options: ["Stops function", "Creates a generator", "Returns value", "Causes error"],
        correct: 1,
        explanation: "yield creates generators that produce values one at a time!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 48,
        question: "What is inheritance in OOP?",
        options: ["Getting money", "Classes getting features from other classes", "Deleting classes", "Copying code"],
        correct: 1,
        explanation: "Inheritance lets child classes get methods and attributes from parent classes!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 49,
        question: "What does the with statement do?",
        options: ["Adds items", "Manages resources automatically", "Creates loops", "Defines functions"],
        correct: 1,
        explanation: "'with' automatically handles opening/closing resources like files!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 50,
        question: "What is a set in Python?",
        options: ["A function", "A collection of unique items", "A loop", "A variable"],
        correct: 1,
        explanation: "Sets store unique items with no duplicates: {1, 2, 3}!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 51,
        question: "What does map() function do?",
        options: ["Creates maps", "Applies function to each item", "Sorts items", "Finds locations"],
        correct: 1,
        explanation: "map() applies a function to every item in a list: map(int, ['1', '2'])!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 52,
        question: "What is the difference between is and ==?",
        options: ["No difference", "is checks identity, == checks value", "is checks value, == checks identity", "Both check identity"],
        correct: 1,
        explanation: "'is' checks if two variables point to the same object, '==' checks if values are equal!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 53,
        question: "What does filter() do?",
        options: ["Removes duplicates", "Keeps items that match condition", "Sorts items", "Counts items"],
        correct: 1,
        explanation: "filter() keeps only items that pass a test function!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 54,
        question: "What is a class method?",
        options: ["A method inside a class", "A method that works on the class itself", "A broken method", "A fast method"],
        correct: 1,
        explanation: "Class methods use @classmethod and work on the class, not instances!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 55,
        question: "What does super() do?",
        options: ["Makes things super", "Calls parent class methods", "Creates superheroes", "Speeds up code"],
        correct: 1,
        explanation: "super() lets you call methods from the parent class in inheritance!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 56,
        question: "What is a static method?",
        options: ["A method that doesn't move", "A method that doesn't use self or cls", "A broken method", "A method inside functions"],
        correct: 1,
        explanation: "Static methods use @staticmethod and don't need self or cls parameters!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 57,
        question: "What does reduce() do?",
        options: ["Makes things smaller", "Reduces list to single value", "Removes items", "Counts items"],
        correct: 1,
        explanation: "reduce() applies a function cumulatively to reduce a list to a single value!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 58,
        question: "What is a context manager?",
        options: ["A person who manages context", "An object that works with 'with' statements", "A type of loop", "A variable"],
        correct: 1,
        explanation: "Context managers implement __enter__ and __exit__ for use with 'with' statements!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 59,
        question: "What does zip() do?",
        options: ["Compresses files", "Combines multiple iterables", "Sorts items", "Deletes items"],
        correct: 1,
        explanation: "zip() combines multiple lists/iterables element by element!",
        difficulty: "advanced",
        language: "python"
      },
      {
        id: 60,
        question: "What is metaclass in Python?",
        options: ["A super class", "A class that creates classes", "A broken class", "A fast class"],
        correct: 1,
        explanation: "Metaclasses are classes whose instances are classes themselves!",
        difficulty: "advanced",
        language: "python"
      }
    ]
  },
  java: {
    beginner: [
      {
        id: 61,
        question: "What does System.out.println() do?",
        options: ["Deletes text", "Prints text to console", "Creates files", "Nothing"],
        correct: 1,
        explanation: "System.out.println() displays text in the console and moves to a new line!",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 62,
        question: "How do you declare a variable in Java?",
        options: ["var name", "int age", "variable age", "age = int"],
        correct: 1,
        explanation: "In Java, we declare variables with type first: int age = 10;",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 63,
        question: "What is the main method in Java?",
        options: ["Starting point of program", "Ending point", "Middle of program", "Error handler"],
        correct: 0,
        explanation: "main() is where Java programs begin execution!",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 64,
        question: "How do you write comments in Java?",
        options: ["# comment", "// comment", "/* comment", "Both B and C"],
        correct: 3,
        explanation: "Java uses // for single-line and /* */ for multi-line comments!",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 65,
        question: "What keyword is used to create a class?",
        options: ["class", "Class", "new", "object"],
        correct: 0,
        explanation: "The 'class' keyword defines a new class in Java!",
        difficulty: "beginner",
        language: "java"
      },
      // Continue with more Java beginner questions...
      {
        id: 66,
        question: "What is a String in Java?",
        options: ["A number", "Text data", "A boolean", "An integer"],
        correct: 1,
        explanation: "Strings hold text like \"Hello World\" in Java!",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 67,
        question: "How do you create an object in Java?",
        options: ["object MyClass()", "new MyClass()", "MyClass.new()", "create MyClass()"],
        correct: 1,
        explanation: "Use 'new' keyword to create objects: new MyClass();",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 68,
        question: "What does 'public' mean in Java?",
        options: ["Private access", "Anyone can access", "Protected access", "No access"],
        correct: 1,
        explanation: "'public' means the method or variable can be accessed from anywhere!",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 69,
        question: "What is the correct way to declare an integer?",
        options: ["integer x = 5", "int x = 5", "x = 5", "number x = 5"],
        correct: 1,
        explanation: "Use 'int' to declare integers: int x = 5;",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 70,
        question: "What does 'static' mean?",
        options: ["Moving", "Belongs to class, not object", "Private", "Public"],
        correct: 1,
        explanation: "'static' means it belongs to the class itself, not individual objects!",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 71,
        question: "How do you end statements in Java?",
        options: [".", ":", ";", ","],
        correct: 2,
        explanation: "Every statement in Java ends with a semicolon ;",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 72,
        question: "What is a boolean in Java?",
        options: ["True or False value", "Number", "Text", "Character"],
        correct: 0,
        explanation: "Booleans can only be true or false!",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 73,
        question: "How do you declare a constant in Java?",
        options: ["const", "final", "constant", "static"],
        correct: 1,
        explanation: "Use 'final' to create constants that can't be changed!",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 74,
        question: "What is an array in Java?",
        options: ["Single value", "Collection of same-type elements", "A class", "A method"],
        correct: 1,
        explanation: "Arrays store multiple values of the same type: int[] numbers;",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 75,
        question: "How do you get array length in Java?",
        options: ["array.size()", "array.length", "array.count()", "array.len()"],
        correct: 1,
        explanation: "Use .length property: myArray.length gives the size!",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 76,
        question: "What is a method in Java?",
        options: ["A variable", "A block of code that performs a task", "A class", "An object"],
        correct: 1,
        explanation: "Methods are reusable blocks of code that do specific tasks!",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 77,
        question: "How do you compare strings in Java?",
        options: ["==", ".equals()", "compare()", "is()"],
        correct: 1,
        explanation: "Use .equals() to compare string content: str1.equals(str2);",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 78,
        question: "What does 'void' mean in a method?",
        options: ["Returns an integer", "Returns nothing", "Returns a string", "Returns a boolean"],
        correct: 1,
        explanation: "'void' means the method doesn't return any value!",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 79,
        question: "How do you create an if statement?",
        options: ["if (condition)", "when (condition)", "check (condition)", "test (condition)"],
        correct: 0,
        explanation: "Use 'if' followed by condition in parentheses: if (x > 5)",
        difficulty: "beginner",
        language: "java"
      },
      {
        id: 80,
        question: "What is a constructor in Java?",
        options: ["Destroys objects", "Creates and initializes objects", "A type of variable", "A loop"],
        correct: 1,
        explanation: "Constructors initialize new objects when they're created!",
        difficulty: "beginner",
        language: "java"
      }
    ],
    intermediate: [
      // Java intermediate questions (20 questions)
      {
        id: 81,
        question: "What is inheritance in Java?",
        options: ["Copying code", "One class acquiring properties of another", "Deleting classes", "Creating objects"],
        correct: 1,
        explanation: "Inheritance allows child classes to inherit methods and fields from parent classes!",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 82,
        question: "What keyword is used for inheritance?",
        options: ["inherits", "extends", "implements", "super"],
        correct: 1,
        explanation: "'extends' is used for class inheritance: class Child extends Parent",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 83,
        question: "What is method overriding?",
        options: ["Creating new methods", "Redefining parent class methods", "Deleting methods", "Copying methods"],
        correct: 1,
        explanation: "Method overriding allows child classes to provide specific implementations of parent methods!",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 84,
        question: "What is encapsulation?",
        options: ["Hiding data", "Creating objects", "Inheriting classes", "Deleting data"],
        correct: 0,
        explanation: "Encapsulation hides internal data and provides controlled access through methods!",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 85,
        question: "What is the difference between == and .equals()?",
        options: ["No difference", "== compares references, .equals() compares content", "== compares content, .equals() compares references", "Both compare references"],
        correct: 1,
        explanation: "== compares object references, .equals() compares actual content!",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 86,
        question: "What is a package in Java?",
        options: ["A shipping box", "A way to organize related classes", "A method", "A variable"],
        correct: 1,
        explanation: "Packages group related classes and interfaces together!",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 87,
        question: "What does 'private' access modifier do?",
        options: ["Makes everything public", "Restricts access to same class only", "Allows package access", "Allows inheritance access"],
        correct: 1,
        explanation: "'private' means only the same class can access the member!",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 88,
        question: "What is an interface in Java?",
        options: ["A class", "A contract defining methods", "A variable", "An object"],
        correct: 1,
        explanation: "Interfaces define a contract of methods that implementing classes must provide!",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 89,
        question: "What keyword implements an interface?",
        options: ["extends", "implements", "uses", "applies"],
        correct: 1,
        explanation: "Use 'implements' to implement interfaces: class MyClass implements MyInterface",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 90,
        question: "What is polymorphism?",
        options: ["Many forms", "One object taking many forms", "Creating objects", "Deleting objects"],
        correct: 1,
        explanation: "Polymorphism allows objects to be treated as instances of their parent type!",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 91,
        question: "What is an abstract class?",
        options: ["A complete class", "A class that cannot be instantiated", "A interface", "A method"],
        correct: 1,
        explanation: "Abstract classes cannot be instantiated directly and may contain abstract methods!",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 92,
        question: "What does 'super' keyword do?",
        options: ["Creates superheroes", "Refers to parent class", "Makes things super", "Deletes classes"],
        correct: 1,
        explanation: "'super' refers to the parent class and can call parent constructors/methods!",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 93,
        question: "What is method overloading?",
        options: ["Too many methods", "Same method name, different parameters", "Deleting methods", "Copying methods"],
        correct: 1,
        explanation: "Method overloading allows multiple methods with same name but different parameters!",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 94,
        question: "What is a try-catch block?",
        options: ["For catching fish", "For handling exceptions", "For creating loops", "For defining methods"],
        correct: 1,
        explanation: "try-catch blocks handle exceptions and prevent program crashes!",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 95,
        question: "What is an ArrayList?",
        options: ["Fixed-size array", "Dynamic array that can grow", "A string", "A number"],
        correct: 1,
        explanation: "ArrayList is a resizable array that can grow and shrink dynamically!",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 96,
        question: "How do you import classes in Java?",
        options: ["include", "import", "require", "load"],
        correct: 1,
        explanation: "Use 'import' statement: import java.util.ArrayList;",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 97,
        question: "What is the difference between Array and ArrayList?",
        options: ["No difference", "Array is fixed size, ArrayList is dynamic", "Array is dynamic, ArrayList is fixed", "Both are the same"],
        correct: 1,
        explanation: "Arrays have fixed size, ArrayLists can grow and shrink dynamically!",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 98,
        question: "What does 'this' keyword refer to?",
        options: ["Previous object", "Current object", "Next object", "Parent object"],
        correct: 1,
        explanation: "'this' refers to the current object instance!",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 99,
        question: "What is a for-each loop?",
        options: ["A broken loop", "Enhanced for loop for collections", "A while loop", "A do-while loop"],
        correct: 1,
        explanation: "For-each loops iterate through collections: for (int item : array)",
        difficulty: "intermediate",
        language: "java"
      },
      {
        id: 100,
        question: "What does 'protected' access modifier do?",
        options: ["Same as private", "Allows access within package and subclasses", "Same as public", "No access"],
        correct: 1,
        explanation: "'protected' allows access within the same package and by subclasses!",
        difficulty: "intermediate",
        language: "java"
      }
    ],
    advanced: [
      // Java advanced questions (20 questions)
      {
        id: 101,
        question: "What is a lambda expression?",
        options: ["A Greek letter", "Anonymous function", "A class", "A variable"],
        correct: 1,
        explanation: "Lambda expressions provide a concise way to represent anonymous functions!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 102,
        question: "What is a Stream in Java 8?",
        options: ["Water flow", "Sequence of elements for functional operations", "A file", "A network connection"],
        correct: 1,
        explanation: "Streams provide functional-style operations on collections of elements!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 103,
        question: "What is the purpose of Optional class?",
        options: ["Optional features", "Avoid null pointer exceptions", "Optional methods", "Optional classes"],
        correct: 1,
        explanation: "Optional helps avoid NullPointerException by wrapping potentially null values!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 104,
        question: "What is a functional interface?",
        options: ["Any interface", "Interface with exactly one abstract method", "Interface with many methods", "Broken interface"],
        correct: 1,
        explanation: "Functional interfaces have exactly one abstract method and can be used with lambdas!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 105,
        question: "What does @Override annotation do?",
        options: ["Overrides everything", "Indicates method overriding", "Creates methods", "Deletes methods"],
        correct: 1,
        explanation: "@Override annotation indicates that a method overrides a parent class method!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 106,
        question: "What is generics in Java?",
        options: ["Generic code", "Type safety with parameterized types", "General methods", "Basic classes"],
        correct: 1,
        explanation: "Generics provide type safety by allowing parameterized types: List<String>",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 107,
        question: "What is the diamond operator <>?",
        options: ["A shape", "Type inference for generics", "A loop", "An operator"],
        correct: 1,
        explanation: "Diamond operator <> allows type inference: List<String> list = new ArrayList<>();",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 108,
        question: "What is reflection in Java?",
        options: ["Mirror image", "Examining classes at runtime", "Thinking about code", "Debugging"],
        correct: 1,
        explanation: "Reflection allows examining and manipulating classes, methods, and fields at runtime!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 109,
        question: "What is serialization?",
        options: ["Creating series", "Converting objects to byte stream", "Sorting objects", "Counting objects"],
        correct: 1,
        explanation: "Serialization converts objects into byte streams for storage or transmission!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 110,
        question: "What is multithreading?",
        options: ["Multiple threads", "Concurrent execution of multiple threads", "Many strings", "Multiple methods"],
        correct: 1,
        explanation: "Multithreading allows concurrent execution of multiple threads for better performance!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 111,
        question: "What is synchronization?",
        options: ["Timing", "Controlling access to shared resources", "Creating objects", "Deleting objects"],
        correct: 1,
        explanation: "Synchronization controls access to shared resources in multithreaded environments!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 112,
        question: "What is a deadlock?",
        options: ["Dead code", "Two threads waiting for each other indefinitely", "Broken lock", "Fast lock"],
        correct: 1,
        explanation: "Deadlock occurs when threads wait for each other indefinitely!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 113,
        question: "What is garbage collection?",
        options: ["Collecting trash", "Automatic memory management", "Cleaning code", "Removing objects"],
        correct: 1,
        explanation: "Garbage collection automatically frees memory by removing unused objects!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 114,
        question: "What is the volatile keyword?",
        options: ["Explosive", "Ensures visibility across threads", "Unstable", "Temporary"],
        correct: 1,
        explanation: "volatile ensures that variable changes are visible to all threads!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 115,
        question: "What is dependency injection?",
        options: ["Injecting bugs", "Providing dependencies from outside", "Creating dependencies", "Deleting dependencies"],
        correct: 1,
        explanation: "Dependency injection provides object dependencies from external sources!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 116,
        question: "What is the Builder pattern?",
        options: ["Building houses", "Constructing complex objects step by step", "Destroying objects", "Simple construction"],
        correct: 1,
        explanation: "Builder pattern constructs complex objects step by step with a fluent interface!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 117,
        question: "What is the Singleton pattern?",
        options: ["Single person", "Ensuring only one instance of a class", "Multiple instances", "No instances"],
        correct: 1,
        explanation: "Singleton pattern ensures only one instance of a class exists!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 118,
        question: "What is method reference?",
        options: ["Reference book", "Shorthand for lambda expressions", "Method documentation", "Method name"],
        correct: 1,
        explanation: "Method references provide shorthand for lambda expressions: Class::method",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 119,
        question: "What is CompletableFuture?",
        options: ["Complete tasks", "Asynchronous programming support", "Future dates", "Completed methods"],
        correct: 1,
        explanation: "CompletableFuture provides powerful asynchronous programming capabilities!",
        difficulty: "advanced",
        language: "java"
      },
      {
        id: 120,
        question: "What is the difference between HashMap and ConcurrentHashMap?",
        options: ["No difference", "ConcurrentHashMap is thread-safe", "HashMap is thread-safe", "Both are thread-safe"],
        correct: 1,
        explanation: "ConcurrentHashMap is thread-safe, HashMap is not!",
        difficulty: "advanced",
        language: "java"
      }
    ]
  },
  javascript: {
    beginner: [
      {
        id: 121,
        question: "How do you display text in JavaScript?",
        options: ["print()", "console.log()", "display()", "show()"],
        correct: 1,
        explanation: "console.log() displays text in the browser's developer console!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 122,
        question: "How do you declare a variable in JavaScript?",
        options: ["var name", "variable name", "let name", "Both A and C"],
        correct: 3,
        explanation: "Use 'var', 'let', or 'const' to declare variables in JavaScript!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 123,
        question: "What are the comment styles in JavaScript?",
        options: ["// and /* */", "# and ##", "// only", "/* */ only"],
        correct: 0,
        explanation: "JavaScript uses // for single-line and /* */ for multi-line comments!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 124,
        question: "What is a string in JavaScript?",
        options: ["A number", "Text data", "A boolean", "An object"],
        correct: 1,
        explanation: "Strings are text data enclosed in quotes: 'Hello' or \"Hello\"!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 125,
        question: "How do you create a function in JavaScript?",
        options: ["function myFunc()", "def myFunc()", "create myFunc()", "method myFunc()"],
        correct: 0,
        explanation: "Use 'function' keyword: function myFunc() { }",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 126,
        question: "What does === do in JavaScript?",
        options: ["Assigns value", "Compares value and type", "Compares only value", "Does nothing"],
        correct: 1,
        explanation: "=== compares both value and type: 5 === '5' is false!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 127,
        question: "How do you create an array in JavaScript?",
        options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "array(1, 2, 3)"],
        correct: 0,
        explanation: "Arrays use square brackets: [1, 2, 3] or new Array(1, 2, 3)!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 128,
        question: "What is the difference between == and ===?",
        options: ["No difference", "== compares value, === compares value and type", "== is faster", "=== is deprecated"],
        correct: 1,
        explanation: "== allows type conversion, === requires exact type match!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 129,
        question: "How do you get the length of an array?",
        options: ["array.size", "array.length", "array.count", "size(array)"],
        correct: 1,
        explanation: "Use .length property: myArray.length gives the number of elements!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 130,
        question: "What does typeof operator do?",
        options: ["Changes type", "Returns the type of variable", "Creates types", "Deletes types"],
        correct: 1,
        explanation: "typeof returns the data type: typeof 'hello' returns 'string'!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 131,
        question: "How do you write an if statement?",
        options: ["if condition", "if (condition)", "when (condition)", "check (condition)"],
        correct: 1,
        explanation: "if statements use parentheses: if (condition) { }",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 132,
        question: "What is null in JavaScript?",
        options: ["A number", "No value", "A string", "An error"],
        correct: 1,
        explanation: "null represents an intentional absence of value!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 133,
        question: "What is undefined in JavaScript?",
        options: ["A defined value", "A variable with no value assigned", "An error", "A function"],
        correct: 1,
        explanation: "undefined means a variable has been declared but not assigned a value!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 134,
        question: "How do you add an element to an array?",
        options: ["array.add()", "array.push()", "array.append()", "array.insert()"],
        correct: 1,
        explanation: "push() adds an element to the end of an array!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 135,
        question: "What is a boolean in JavaScript?",
        options: ["True or false value", "A number", "A string", "An object"],
        correct: 0,
        explanation: "Booleans can only be true or false!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 136,
        question: "How do you convert a string to a number?",
        options: ["Number()", "parseInt()", "parseFloat()", "All of the above"],
        correct: 3,
        explanation: "Use Number(), parseInt(), or parseFloat() to convert strings to numbers!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 137,
        question: "What does the return statement do?",
        options: ["Ends function and gives back value", "Starts function", "Loops function", "Deletes function"],
        correct: 0,
        explanation: "return ends function execution and returns a value!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 138,
        question: "How do you create an object in JavaScript?",
        options: ["{}", "[]", "()", "new Object()"],
        correct: 0,
        explanation: "Objects use curly braces: {} or new Object()!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 139,
        question: "How do you access object properties?",
        options: ["object.property", "object[property]", "Both A and B", "object->property"],
        correct: 2,
        explanation: "Use dot notation (obj.prop) or bracket notation (obj['prop'])!",
        difficulty: "beginner",
        language: "javascript"
      },
      {
        id: 140,
        question: "What is a for loop used for?",
        options: ["Making decisions", "Repeating code", "Creating functions", "Storing data"],
        correct: 1,
        explanation: "for loops repeat code a specific number of times!",
        difficulty: "beginner",
        language: "javascript"
      }
    ],
    intermediate: [
      // JavaScript intermediate questions (20 questions)
      {
        id: 141,
        question: "What is the difference between let and var?",
        options: ["No difference", "let has block scope, var has function scope", "let is faster", "var is newer"],
        correct: 1,
        explanation: "let has block scope and can't be redeclared, var has function scope!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 142,
        question: "What is hoisting in JavaScript?",
        options: ["Lifting weights", "Variables/functions moved to top of scope", "Creating variables", "Deleting variables"],
        correct: 1,
        explanation: "Hoisting moves variable and function declarations to the top of their scope!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 143,
        question: "What is a closure in JavaScript?",
        options: ["Closing files", "Function with access to outer variables", "Ending programs", "Closing loops"],
        correct: 1,
        explanation: "Closures give functions access to variables from their outer scope!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 144,
        question: "What does 'this' refer to in JavaScript?",
        options: ["Previous object", "Current execution context", "Next object", "Nothing"],
        correct: 1,
        explanation: "'this' refers to the object that owns the currently executing function!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 145,
        question: "What is the difference between map() and forEach()?",
        options: ["No difference", "map() returns new array, forEach() doesn't", "forEach() is faster", "map() is older"],
        correct: 1,
        explanation: "map() creates and returns a new array, forEach() just iterates!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 146,
        question: "What is event bubbling?",
        options: ["Water bubbles", "Events propagating up the DOM tree", "Creating events", "Deleting events"],
        correct: 1,
        explanation: "Event bubbling is when events propagate from child to parent elements!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 147,
        question: "What is the purpose of async/await?",
        options: ["Sleeping", "Handling asynchronous operations", "Creating functions", "Deleting functions"],
        correct: 1,
        explanation: "async/await provides a cleaner way to handle asynchronous operations!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 148,
        question: "What is a Promise in JavaScript?",
        options: ["A guarantee", "Object representing eventual completion of async operation", "A function", "A variable"],
        correct: 1,
        explanation: "Promises represent the eventual completion (or failure) of asynchronous operations!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 149,
        question: "What does the spread operator (...) do?",
        options: ["Spreads butter", "Expands arrays/objects", "Creates dots", "Deletes items"],
        correct: 1,
        explanation: "Spread operator (...) expands arrays/objects into individual elements!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 150,
        question: "What is destructuring in JavaScript?",
        options: ["Breaking things", "Extracting values from arrays/objects", "Creating structures", "Building objects"],
        correct: 1,
        explanation: "Destructuring extracts values from arrays or properties from objects!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 151,
        question: "What is the difference between null and undefined?",
        options: ["No difference", "null is intentional absence, undefined is unassigned", "null is faster", "undefined is newer"],
        correct: 1,
        explanation: "null is intentionally empty, undefined means no value was assigned!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 152,
        question: "What is a callback function?",
        options: ["Calling back", "Function passed to another function", "Phone call", "Return function"],
        correct: 1,
        explanation: "Callback is a function passed as argument to another function!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 153,
        question: "What does JSON.stringify() do?",
        options: ["Creates strings", "Converts objects to JSON string", "Parses JSON", "Deletes objects"],
        correct: 1,
        explanation: "JSON.stringify() converts JavaScript objects to JSON string format!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 154,
        question: "What does JSON.parse() do?",
        options: ["Parses strings", "Converts JSON string to object", "Creates JSON", "Deletes JSON"],
        correct: 1,
        explanation: "JSON.parse() converts JSON strings back to JavaScript objects!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 155,
        question: "What is the difference between arrow functions and regular functions?",
        options: ["No difference", "Arrow functions don't bind 'this'", "Arrow functions are faster", "Arrow functions are older"],
        correct: 1,
        explanation: "Arrow functions don't have their own 'this' binding!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 156,
        question: "What is template literals in JavaScript?",
        options: ["Templates", "Strings with embedded expressions", "Functions", "Objects"],
        correct: 1,
        explanation: "Template literals use backticks and allow embedded expressions: `Hello ${name}`!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 157,
        question: "What does the filter() method do?",
        options: ["Filters water", "Creates new array with elements that pass test", "Removes all elements", "Sorts array"],
        correct: 1,
        explanation: "filter() creates a new array with elements that pass the test function!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 158,
        question: "What is the difference between const and let?",
        options: ["No difference", "const cannot be reassigned", "const is faster", "let is newer"],
        correct: 1,
        explanation: "const creates constants that cannot be reassigned after declaration!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 159,
        question: "What does the reduce() method do?",
        options: ["Reduces size", "Reduces array to single value", "Removes elements", "Sorts array"],
        correct: 1,
        explanation: "reduce() executes a function on each element to reduce array to single value!",
        difficulty: "intermediate",
        language: "javascript"
      },
      {
        id: 160,
        question: "What is event delegation?",
        options: ["Delegating work", "Using event bubbling to handle events efficiently", "Creating events", "Deleting events"],
        correct: 1,
        explanation: "Event delegation uses bubbling to handle events on parent instead of individual children!",
        difficulty: "intermediate",
        language: "javascript"
      }
    ],
    advanced: [
      // JavaScript advanced questions (20 questions)
      {
        id: 161,
        question: "What is the event loop in JavaScript?",
        options: ["A loop", "Mechanism for handling async operations", "Event creation", "Loop events"],
        correct: 1,
        explanation: "Event loop manages execution of asynchronous callbacks in JavaScript!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 162,
        question: "What is prototypal inheritance?",
        options: ["Type of inheritance", "Objects inheriting from other objects", "Class inheritance", "Function inheritance"],
        correct: 1,
        explanation: "JavaScript uses prototypal inheritance where objects inherit from other objects!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 163,
        question: "What is the prototype chain?",
        options: ["Chain of stores", "Series of linked prototype objects", "Chain of functions", "Chain of variables"],
        correct: 1,
        explanation: "Prototype chain is the series of links between objects and their prototypes!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 164,
        question: "What is a generator function?",
        options: ["Power generator", "Function that can pause and resume", "Function creator", "Fast function"],
        correct: 1,
        explanation: "Generator functions can pause execution and resume later using yield!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 165,
        question: "What is the difference between call() and apply()?",
        options: ["No difference", "call() takes individual args, apply() takes array", "call() is faster", "apply() is newer"],
        correct: 1,
        explanation: "call() takes arguments individually, apply() takes them as an array!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 166,
        question: "What is bind() method used for?",
        options: ["Binding variables", "Creating new function with bound 'this'", "Binding events", "Binding objects"],
        correct: 1,
        explanation: "bind() creates a new function with a permanently bound 'this' value!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 167,
        question: "What is a WeakMap in JavaScript?",
        options: ["Weak mapping", "Map with weak references to keys", "Broken map", "Small map"],
        correct: 1,
        explanation: "WeakMap has weak references to keys, allowing garbage collection!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 168,
        question: "What is the difference between Set and Array?",
        options: ["No difference", "Set has unique values, Array allows duplicates", "Set is faster", "Array is newer"],
        correct: 1,
        explanation: "Set automatically ensures all values are unique, Arrays allow duplicates!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 169,
        question: "What is a Proxy in JavaScript?",
        options: ["Proxy server", "Object that intercepts operations on other objects", "Fake object", "Helper object"],
        correct: 1,
        explanation: "Proxy intercepts and customizes operations on objects (property access, assignment, etc.)!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 170,
        question: "What is the Symbol primitive type?",
        options: ["Mathematical symbol", "Unique identifier", "Special number", "Text symbol"],
        correct: 1,
        explanation: "Symbol creates unique identifiers that won't collide with other property names!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 171,
        question: "What is tail call optimization?",
        options: ["Optimizing tails", "Optimizing recursive function calls", "Calling optimization", "Tail function"],
        correct: 1,
        explanation: "Tail call optimization prevents stack overflow in recursive functions!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 172,
        question: "What is the difference between shallow and deep copy?",
        options: ["Depth of water", "Shallow copies top level, deep copies all levels", "Speed difference", "Size difference"],
        correct: 1,
        explanation: "Shallow copy copies only top level, deep copy recursively copies all levels!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 173,
        question: "What is currying in JavaScript?",
        options: ["Indian food", "Transforming function to take one argument at a time", "Curry function", "Spicy function"],
        correct: 1,
        explanation: "Currying transforms a function to take one argument at a time!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 174,
        question: "What is memoization?",
        options: ["Memory technique", "Caching function results", "Memorizing code", "Memory management"],
        correct: 1,
        explanation: "Memoization caches function results to avoid expensive recalculations!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 175,
        question: "What is the Observer pattern?",
        options: ["Watching pattern", "Objects observing changes in other objects", "Pattern recognition", "Visual pattern"],
        correct: 1,
        explanation: "Observer pattern allows objects to subscribe and be notified of changes!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 176,
        question: "What is the Module pattern?",
        options: ["Code organization pattern", "Pattern for creating private scope", "Design pattern", "Import pattern"],
        correct: 1,
        explanation: "Module pattern creates private scope and exposes only selected methods/variables!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 177,
        question: "What is the difference between microtasks and macrotasks?",
        options: ["Size difference", "Priority in event loop execution", "Speed difference", "Function type"],
        correct: 1,
        explanation: "Microtasks (promises) have higher priority than macrotasks (setTimeout) in event loop!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 178,
        question: "What is the Singleton pattern in JavaScript?",
        options: ["Single person", "Ensuring only one instance exists", "Pattern for singles", "One-time pattern"],
        correct: 1,
        explanation: "Singleton ensures only one instance of an object exists throughout the application!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 179,
        question: "What is the difference between Object.freeze() and Object.seal()?",
        options: ["Temperature", "freeze() prevents all changes, seal() allows property changes", "Speed", "Size"],
        correct: 1,
        explanation: "freeze() makes object completely immutable, seal() allows changing existing properties!",
        difficulty: "advanced",
        language: "javascript"
      },
      {
        id: 180,
        question: "What is the Factory pattern?",
        options: ["Manufacturing pattern", "Creating objects without specifying exact class", "Production pattern", "Building pattern"],
        correct: 1,
        explanation: "Factory pattern creates objects without specifying their exact classes!",
        difficulty: "advanced",
        language: "javascript"
      }
    ]
  }
};

// Helper function to get questions for a specific language and difficulty
export const getQuestions = (language: string, difficulty: string): Question[] => {
  return questionBanks[language]?.[difficulty] || [];
};

// Helper function to get a random subset of questions
export const getRandomQuestions = (language: string, difficulty: string, count: number = 20): Question[] => {
  const allQuestions = getQuestions(language, difficulty);
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
};