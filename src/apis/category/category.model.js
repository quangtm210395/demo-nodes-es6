import mongoose, { mongo } from 'mongoose';

let category = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

export default mongoose.model('Category', category);