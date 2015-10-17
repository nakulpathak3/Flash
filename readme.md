# Flash

Flash is an iOS (and future Android app) that provides users with a list of deals in products they are interested in. Once you click on a deal, you get 5 minutes to decide whether you want it or not.
Deals are obtained from Shopify merchants through a Shopify App I am currently building using Node.js and Express.
The project was started at Hack The North, 2015.

## Tools
The app is built using Facebook's [React Native](https://github.com/facebook/react-native).

## Flow

1. It begins by authenticating users through Facebook's Oauth.
![Home screen](/screenshots/home.png?raw=true "Home Screen")

2. User is redirected to their Facebook account for requesting permissions to view their email address and get unique token.                                                                     
![Facebook Redirect](/screenshots/facebook_auth.png?raw=true "Facebook Redirect")

3. Once they click 'Start Buying', they are shown a list of products which have great discounts.
![Product List](/screenshots/product_list.png?raw=true "Product List")

4. If the user finds a product they're interested in, they click on it and a 5 minute timer begins. They can either go 'Back' or click 'Buy Now'. After 5 minutes, the user is redirected to the list.
![Product List](/screenshots/product.png?raw=true "Product List")

5. Once they click 'Buy Now', they pick size, colour, other variations, etc.
![Size Color Pick](/screenshots/size_color_pick.png?raw=true "Size Color Pick")

6. Using Braintree's API, the user then pays for the product with one touch!
![Braintree Payment](/screenshots/existing_payment.png?raw=true "Braintree Payment")

![Braintree Payment](/screenshots/braintree_payment.png?raw=true "Braintree Payment")

## Contributing
I'd love help on the front end/UX of the app. If you'd like to join in on the project, email me at nakulpathak3@hotmail.com or make a PR. Thanks!

