const mongoose = require("mongoose");

const associationSchema = new mongoose.Schema({
    roll_no: { 
        type: Number,
        required: true
    },
    name: { 
        type: String,
        required: true
    },
    university: { 
        type: String,
        required: true
    },
    tags: [Number]
});