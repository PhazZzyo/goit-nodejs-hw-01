const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allcontacts = await contacts.listContacts();
      console.log(allcontacts);
      break;

    case "get":
      const requestedContact = await contacts.getContactById(id);
      console.log(requestedContact);
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const arr = hideBin(process.argv);
console.log(arr);
const { argv } = yargs(arr);
console.log(argv);
invokeAction(argv);
