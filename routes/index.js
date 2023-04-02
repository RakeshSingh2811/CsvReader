const express =require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
//calling the home controller from controllers
console.log('Router linked');
router.get('/',homeController.home);
// getting the form to home page
router.post('/upload',homeController.upload);
// on submitting the form 

module.exports = router ;