const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title:{
        type:string,
        required:true,
        
    },
    description:{
        type:string,
        required:true,
    },
    tag:{
        type:string,
        dafault:'General'
    },
    date:{
        type:date,
        dafault:date.now

    }
  });

  module.exports = mongoose.model('notes',NotesSchema);
