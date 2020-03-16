const app = new Vue ({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'Keep your feet warm with this pair of beautiful socks',
        image: './img/vmSocks-green-onWhite.jpg',
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        inventory: 25,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './img/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './img/vmSocks-blue-onWhite.jpg'
            }
        ],

        cart: 0
    },

    methods: {
        addToCart(){
            this.cart ++
        },

        removeToCart(){
            this.cart --
        },

        updateProduct(variantImage){
            this.image = variantImage
        }
    },
})

