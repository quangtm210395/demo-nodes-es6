import Category from './category.model';

export default {
    add: (req, res) => {
        if(!req.body.category) {
            res.status(400).json({
                message: 'Failed'
            });
        } else {
            let category = new Category(req.body.category);
            category.save((err, category) => {
                if (err) {
                    res.status(400).json({message: err.message});
                    return;
                }
                res.status(200).json({message: 'Added new Category successful!'});
            });
        }
    },
    getAll: (req, res) => {
        Category
            .find()
            .select("_id name description")
            .exec((err, categories) => {
                if (err) {
                    res.status(400).json({message: 'Failed!'});
                }
                res.status(200).json({message: 'All Categories', categories: categories});
            })
    }
}