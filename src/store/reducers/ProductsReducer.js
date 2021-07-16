const initailState = {
  products: [
    {
      id: 1,
      category: "home",
      name: "man t-shirt summer",
      img: "1.jpg",
      price: 500,
      discount: 5,
      discountPrice: 500 - (5 / 100) * 500,
      quantity: 1,
      disc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    },

    {
      id: 2,
      category: "home",
      name: "man Air shoes",
      img: "2.jpg",
      price: 1520,
      discount: 10,
      discountPrice: 1520 - (10 / 100) * 1520,
      quantity: 1,
      disc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    },

    {
      id: 3,
      category: "home",
      name: "man t-shirt summer",
      img: "3.jpg",
      price: 620,
      discount: 4,
      discountPrice: 620 - (4 / 100) * 620,
      quantity: 1,
      disc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    },

    {
      id: 4,
      category: "fashion",
      name: "man bata shoes",
      img: "4.jpg",
      price: 1800,
      discount: 12,
      discountPrice: 1800 - (12 / 100) * 1800,
      quantity: 1,
      disc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    },

    {
      id: 5,
      category: "home",
      name: "man t-shirt summer",
      img: "5.jpg",
      price: 820,
      discount: 2,
      discountPrice: 820 - (2 / 100) * 820,
      quantity: 1,
      disc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    },

    {
      id: 6,
      category: "fashion",
      name: "man trouser summer",
      img: "6.jpg",
      price: 720,
      discount: 8,
      discountPrice: 720 - (8 / 100) * 720,
      quantity: 1,
      disc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    },

    {
      id: 7,
      category: "home",
      name: "Women t-shirt summer",
      img: "7.jpg",
      price: 920,
      discount: 6,
      discountPrice: 920 - (6 / 100) * 920,
      quantity: 1,
      disc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    },

    {
      id: 8,
      category: "home",
      name: "women jeket winter",
      img: "8.jpg",
      price: 1520,
      discount: 10,
      discountPrice: 1520 - (10 / 100) * 1520,
      quantity: 1,
      disc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    },
    
  ],

  singleProduct: {},
};

const ProductsReducers = (state = initailState, action) => {
  switch (action.type) {
    case "SINGLE_PRODUCT":
      return {
        ...state,
        singleProduct: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
      };

    default:
      return state;
  }
};

export default ProductsReducers;
