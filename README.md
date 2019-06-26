# ZIMA E-commerce platform (frontend in React)

A React on Rails e-commerce website, ZIMA ("Winter" in Russian) is a project envisioned as a platform of gifts, souvenirs and other items designed and made in Russia, about Russia, and that celebrate Russian cultural contributions and the beauty of the Russian landscape.

It was inspired following a trip to Moscow in 2018, a wish to focus on positive connotations about Russia internationally rather than geopolitics. It currently displays products sourced from Etsy, ebay and Russian food websites, with no copyright infringement intended, these are used as example products, but can be purchased from the relevant sites accordingly.

All products (over 160 in total) are included in a Postgresql database and Rails API backend built for the purpose of this project.

The front-end interface uses the React library and includes a range of components, managing state and props, employing React Router for a multi-page experience, but without the use of Redux.

A number of CSS animations are used for the purposes of the user experience. This includes a home page with a sidebar component only appearing in response to a user click, and a background image changing in response to a user scroll.

A user can browse all products available on the site (and in the database accordingly), or select a theme/category, showing only the products matching this product category. The product order is randomised when a user visits the page.

On hovering over a specific product card and image, a user can see the product description and also a button to add the product to their cart.

The site includes OAuth using a JWT token for user sign up and login.

On visiting the checkout and submitting a order form (only possible once a user has signed up), a user can view their orders in their order history.

This is an ongoing project that I will update periodically (ideas include Stripe integration, Redux refactor, or smaller features such as CSS / UI design changes, or being able to add multiple quantities or switch currencies).

The site will be hosted very shortly with the link added here subsequently.
