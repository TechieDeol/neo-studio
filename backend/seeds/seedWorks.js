const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Work = require('../models/Work');

dotenv.config({ path: '../config/config.env' }); // Adjust the path if needed

const connectDB = require('../config/db');

const seedWorks = async () => {
    await connectDB();

    // Sample data to seed
    const workData = [
        {
            name: 'STROMA GLASS SET',
            slug: 'stroma-glass-set',
            featuredImage: '/uploads/images/work/stroma-glass-set/main.png',
            projectDescription: 'STROMA GLASS SET',
            projectImages: ['/uploads/images/work/stroma-glass-set/img-1.png', '/uploads/images/work/stroma-glass-set/img-2.png', '/uploads/images/work/stroma-glass-set/img-3.png', '/uploads/images/work/stroma-glass-set/img-4.png'],
            site: 'Italy',
            yearCompleted: 2024,
            projectTypes: ['Products'],
            location: 'Italy',
            status: 'Designed'
        },
        {
            name: 'ONDA THEATRE',
            slug: 'ondatheatre',
            featuredImage: '/uploads/images/work/ondatheatre/main.png',
            projectDescription: 'ONDA THEATRE',
            projectImages: ['/uploads/images/work/ondatheatre/img-1.png', '/uploads/images/work/ondatheatre/img-2.png', '/uploads/images/work/ondatheatre/img-3.png', '/uploads/images/work/ondatheatre/img-4.png', '/uploads/images/work/ondatheatre/img-5.png', '/uploads/images/work/ondatheatre/img-6.png', '/uploads/images/work/ondatheatre/img-7.png', '/uploads/images/work/ondatheatre/img-8.png'],
            site: 'Mexico',
            yearCompleted: 2024,
            projectTypes: ['Architecture'],
            location: 'Mexico',
            status: 'Designed'
        },
        {
            name: 'IRRI',
            slug: 'irri',
            featuredImage: '/uploads/images/work/irri/main.webp',
            projectDescription: 'IRRI',
            projectImages: ['/uploads/images/work/irri/img-1.webp', '/uploads/images/work/irri/img-2.webp', '/uploads/images/work/irri/img-3.webp', '/uploads/images/work/irri/img-4.webp', '/uploads/images/work/irri/img-5.webp', '/uploads/images/work/irri/img-6.webp', '/uploads/images/work/irri/img-7.webp'],
            site: 'London, UK',
            yearCompleted: 2024,
            projectTypes: ['Furniture'],
            location: 'London, UK',
            status: 'Designed'
        },
    ];

    try {
        await Work.deleteMany(); // Clear existing data
        await Work.insertMany(workData); // Insert new data
        console.log('Data inserted successfully');
    } catch (err) {
        console.error('Error inserting data:', err);
    } finally {
        mongoose.connection.close();
    }
};

seedWorks();
