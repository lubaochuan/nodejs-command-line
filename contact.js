#!/usr/bin/env node

'use strict'

const inquirer = require('inquirer')
const csv = require('csv')
const fs = require('fs')
var Table = require('tty-table')('automattic-cli-table')

const contactList = 'contact_list.csv'

let listContacts = function(){
  let table = new Table({
    head: ['First', 'Last', 'Email'],
    colWidths: [15, 15, 40]})
  let parse = csv.parse
  let rows = []
  let stream = fs.createReadStream(contactList)
    .pipe(parse({ delimiter : ',' }))
  stream.on('data', function(chunk){
    console.log(chunk)
    table.push(chunk)})
  stream.on('end', ()=>{
    console.log(table.toString())
  })
}

let addContact = function(){
  let questions = [{
    type : "input",
    name : "firstName",
    message : "Contact's first name: "
  },{
    type : "input",
    name : "lastName",
    message : "Contact's last name: "
  },{
    type : "input",
    name : "email",
    message : "Contact's email address: "
  }]

  inquirer.prompt(questions).then(function (answers) {
    //console.log(answers)
    let line = answers.firstName+','+
      answers.lastName+','+answers.email+'\n'
    fs.appendFileSync(contactList, line);
  })
}

const LIST_CONTACTS = 'list contacts'
const ADD_CONTACT = 'add a new contact'

inquirer
  .prompt([
    {
      type: 'list',
      name: 'task',
      message: 'What do you want to do?',
      choices: [
        LIST_CONTACTS,
        ADD_CONTACT
      ]
    }])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '))
    if(answers.task == LIST_CONTACTS){
      listContacts()
    }else if (answers.task == ADD_CONTACT){
      addContact()
    }})
