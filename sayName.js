//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  var Person = function(name, age) {
    this.name = name;
    this.age = age;
  }//code here


//Now create three instances of Person with data you make up

  var mark = new Person('Mark', 24);
  var miranda = new Person('Miranda', 22);
  var daren = new Person('Daren', 24);//code here


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function() {
    alert(this.name);
  }
