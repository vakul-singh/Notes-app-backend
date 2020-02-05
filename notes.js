const fs=require('fs')
const chalk=require('chalk')
                                                                    //addNote's job is to get the data saved 
const addNote=(title,body)=>{
    const notes=loadNotes()                                         //there is no data file loaded ,lets load them
    // const duplicateNotes = notes.filter( (note) =>  note.title === title  )         
    const duplicateNote =notes.find((note) => note.title === title)   //lets see if there is a dublicate title name,so we won't store it!!
    
    if(!duplicateNote)  {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }    
    else {
        console.log(chalk.red.inverse('Note title already taken!'))
    }
}
const removeNote=(title) => {
    
    const notes=loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length > notesToKeep.length)  {      
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse("Note removed"))
    } else {
        console.log(chalk.red.inverse("No note found."))
    }
}

const listNotes=() => {
    console.log(chalk.inverse('Your notes : '))
    const notes=loadNotes()
    notes.forEach( note => {
            console.log(note.title)
    })
}

const readNote=(title) => {
    const notes=loadNotes()
    const note = notes.find( note => note.title===title )
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse("Note not found."))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    //lets check if file exsist or not so we use JavaScript "Try" and "Catch" statement
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}   

module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}