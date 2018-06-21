const inquirer = require('inquirer');
const ContactController = require("./ContactController");


module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "View all contacts",
          "Exit",
          "Get Date"
        ]
      }
    ];
    this.book = new ContactController();

  }

  main(){
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Add new contact":
          this.addContact();
          break;
        case "View all contacts":
          this.getContacts();
          break;
        case "Exit":
          this.exit();
        case "Get Date":
          this.getDate();
          break;
        default:
          console.log("Invalid input");
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  clear(){
    console.log("\x1Bc");
  }

  getDate(){
    this.clear();
    const date = new Date();
    console.log(`Today is ${date}`);
    this.main();
  }

  addContact(){
    this.clear();
    inquirer.prompt(this.book.addContactQuestions).then((answers) => {
      this.book.addContact(answers.name, answers.phone, answers.email).then((contact) => {
        console.log("Contact added successfully!");
        this.main();
      }).catch((err) => {
        console.log(err);
        this.main();
      });
    });
  }

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

}
