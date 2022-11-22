// function User(userName) {
//   this.userName = userName;

//   this.sayName = function () {
//     console.log(this.userName);
//   };
// }

// let user1 = new User("John");
// user1.sayName();

// function createUser(userName) {
//   return {
//     userName: userName,
//     sayName: function () {
//       console.log(userName);
//     },
//   };
// }

// function User(userName) {
//   this.userName = userName;

//   this.sayName = function () {
//     console.log(this.userName);
//   };
// }

// let user1 = createUser("john");
// user1.sayName();

// class User {
//   constructor(userName, age) {
//     this.userName = userName;
//     this.userAge = age;
//   }

//   sayName() {
//     console.log(`My name is ${this.userName}`);
//   }

//   sayAge() {
//     console.log(`I am ${this.userAge}`);
//   }
// }

// class Admin extends User {
//   constructor(userName, age, userRole) {
//     super(userName, age);
//     this.userRole = userRole;
//   }

//   sayRole() {
//     document.write(`I am ${this.userRole}`);
//   }
// }

// let user1 = new User("john", 45);
// user1.sayName();
// user1.sayAge();

// let user2 = new User("masha", 18);
// user2.sayName();
// user2.sayAge();

// let admin1 = new Admin("Vasya", 20, "admin");
// admin1.sayName();
// admin1.sayAge();
// admin1.sayRole();

// 1. Создать класс ресторана. Класс должен содержать два атрибута: название, тип кухни. В классе должен быть метод который выводит сообщение о названии и типе кухни. Добавить еще метод который должен выводить ресторан открыт или закрыт.

class Restaurant {
  constructor(name, type, isOpen) {
    this.name = name;
    this.type = type;
    this.isOpen = isOpen;
    this.served = 51;
  }

  sayName() {
    document.write(`<h1>Restaurant name is "${this.name}"</h1>`);
  }

  sayType() {
    document.write(`<p>Restaurant type is ${this.type}</p>`);
  }

  sayIsOpen() {
    if (this.isOpen) {
      document.write(`<p>Restaurant is open</p>`);
    } else {
      document.write(`<p>Restaurant is closed</p>`);
    }
  }

  serve() {
    ///
  }

  setServed() {
    ///
  }

  showTotal() {
    //
  }
}

const restaurant1 = new Restaurant("Besh Barmak", "kyrgyz", false);
restaurant1.sayName();
restaurant1.sayType();
restaurant1.sayIsOpen();
restaurant1.serve();
restaurant1.serve();

restaurant1.setServed(5);
restaurant1.setServed(45);

const restaurant2 = new Restaurant("Ala Too", "french", true);
restaurant2.sayName();
restaurant2.sayType();
restaurant2.sayIsOpen();
