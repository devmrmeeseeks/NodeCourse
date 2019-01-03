console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
console.log(`Command: ${command}`);
// console.log('Process',process.argv);
// console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note === undefined)
        console.log('Note', argv.title, 'Do not exists or is duplicate');
    else {
        console.log('Note Created');
        notes.logNote(note);
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var note = notes.readNote(argv.title);
    if (note === undefined)
        console.log('Note not found');
    else {
        console.log('Note found');
        notes.logNote(note);
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note note found';
    console.log(message);
} else {
    console.log('Command not recognized');
}