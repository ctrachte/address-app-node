console.log(process.argv);

// use inquirer to interpret user input:

const inquirer = require('inquirer');
const MenuController = require('./controllers/MenuController');
const menu = new MenuController();

menu.clear();
menu.main();
