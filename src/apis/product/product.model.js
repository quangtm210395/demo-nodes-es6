import mongoose from 'mongoose';

let product = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    description: {
        type: String
    }
});

export default mongoose.model('Product', product);