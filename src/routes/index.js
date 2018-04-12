import categoryApi from '../apis/category';

export default (app) => {
    // routing /api/category tới các endpoint được viết ở ./apis/category/index.js
    app.use('/api/category', categoryApi);
};