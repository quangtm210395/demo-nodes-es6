import mongoose from 'mongoose';

// tạo Schema cho Collection Category (giống tạo entity cho 1 bảng trong SQL)
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