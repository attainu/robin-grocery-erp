var express = require('express');
var router = express.Router();
const buyerController  = require('../controller/buyerController');
let {ensureAuthenticated ,forwardAuthenticated} = require('../config/auth');

/*GET Login Page */
router.get('/loginbuyer',forwardAuthenticated, buyerController.login);

/* POST Login */
router.post('/loginbuyer',ensureAuthenticated, buyerController.loginUser);

/*GET Home Page */
router.get('/homebuyer',ensureAuthenticated, buyerController.home);

/*GET Detail Product Page */
router.get('/detailproduct',ensureAuthenticated, buyerController.detailProduct);

// /*POST ADD CART */
router.post('/addcart',ensureAuthenticated,buyerController.addtoCart);

/* POST detail product */
//router.post('/detailproduct',ensureAuthenticated,buyerController.addcart);

/*GET Cart page */
router.get('/mycart',ensureAuthenticated, buyerController.viewcart);

/*GET profile Page */
router.get('/myprofile',ensureAuthenticated, buyerController.myprofile);

/* POST profile page */
router.post('/myprofile',ensureAuthenticated,buyerController.updateprofile);

/*GET Wishlist Page */
router.get('/mywishlist',ensureAuthenticated,buyerController.wishlist);

/* POST Wishlist Page */
router.post('/mywishlist',ensureAuthenticated,buyerController.mywishlist);


/*POST  Remove cart*/
router.get('/removecart',ensureAuthenticated,buyerController.removeCart);

/*POST  Remove cart*/
router.get('/removewishlist',ensureAuthenticated,buyerController.removeWishlist);

/*GET CHECKLIST */
router.get('/checkout',ensureAuthenticated,buyerController.checkoutlist);

/*POST CHECKLIST */
router.post('/checkout',ensureAuthenticated,buyerController.checkout);

/*GET orders */
router.get('/myorders',ensureAuthenticated,buyerController.myorders)



module.exports = router;