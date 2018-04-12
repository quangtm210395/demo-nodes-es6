import Category from './category.model';

export default {
    /**
     * @param req: request gửi lên
     * @param res: response để trả về
     * add: add thêm 1 category mới
     */
    add: (req, res) => {
        // check xem có category gửi từ request lên trong request body không
        if(!req.body.category) {
            res.status(400).json({
                message: 'Failed'
            });
        } else {
            // tạo instance Category
            let category = new Category(req.body.category);
            // insert vào mongodb
            category.save((err, category) => {
                if (err) {
                    res.status(400).json({message: err.message});
                    return;
                }
                res.status(200).json({message: 'Added new Category successful!', category: category});
            });
        }
    },
    /**
     * getAll: lấy ra thông tin tất cả category
     */
    getAll: (req, res) => {
        Category
            .find()
            .select('_id name description')
            .exec((err, categories) => {
                if (err) {
                    res.status(400).json({message: 'Failed!'});
                }
                res.status(200).json({message: 'All Categories', categories: categories});
            });
    }
};