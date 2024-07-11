const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    featuredImage: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
        required: true
    },
    projectImages: {
        type: [String],
        required: true
    },
    site: {
        type: String,
        required: true
    },
    yearCompleted: {
        type: Number,
        required: true
    },
    projectTypes: {
        type: [String],
        enum: ['Architecture', 'Digital', 'Fashion', 'Furniture', 'Interiors', 'Products', 'Urbanism'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Completed', 'Designed', 'In Progress', 'Under Construction'],
        default: 'Completed'
    }
});

const Work = mongoose.model('Work', workSchema);

module.exports = Work;
