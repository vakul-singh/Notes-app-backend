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
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
}) 
//create remove command
yargs.command({
    command:'remove',
    description:'Remove a note',
    builder: {
        title : {
            describe : 'Add title to be removed',
            demandOption :true,
            type : 'string'
        }    
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//create list command
yargs.command({
    command:'list',
    description:'List a note',
    handler(){
        notes.listNotes()
    }
})
//create read command
yargs.command({
    command:'read',
    description:'Read a note',
    builder:{
        title: {
            describe :'Note title',
            demandOption : true,
            type:'string'
        }
    }, 
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()
// console.log(yargs.argv)
