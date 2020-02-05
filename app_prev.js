const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

//Create add command
yargs.command({
    command:'add',
    description: 'adding a new note',
    builder : {
        title : {
            describe : "Note title",
            demandOption:true,
            type:"string"
        },
        body : {
            describe : "Body of the note",
            demandOption :true,
            type : 'string'
        }
    },
    handler : function(argv){
        console.log('Title : ' + argv.title)
        console.log('Body : ' + argv.body)
    }
}) 
//create remove command
yargs.command({
    command:'remove',
    description:'Removing a note',
    handler:function(){
        console.log('removing a note')
    }
})
//create list command
yargs.command({
    command:'list',
    description:'List a note',
    handler:function(){
        console.log('Listing out all notes')
    }
})
//create read command
yargs.command({
    command:'read',
    description:'Read a note',
    handler:function(){
        console.log('Reading a note')
    }
})
yargs.parse()
// console.log(yargs.argv)
