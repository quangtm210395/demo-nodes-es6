import categoryApi from '../apis/category';

export default (app) => {
    app.use('/api/category', categoryApi);
}