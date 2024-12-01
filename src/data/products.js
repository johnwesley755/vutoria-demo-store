import productImg1 from "../assets/product-1.svg";
import productImg2 from "../assets/product-2.svg";
import productImg3 from "../assets/product-3.svg";
import productImg4 from "../assets/product-4.svg";
import productImg5 from "../assets/product-5.svg";
import productImg6 from "../assets/product-6.svg";
import productImg7 from "../assets/product-7.svg";
import productImg8 from "../assets/product-8.svg";

const products = [
  {
    id: "1",
    name: "Printed Shirt",
    category: "Men's Fashion",
    img: productImg1,
    description: "Comfortable and stylish printed shirt for men.",
    price: "₹409",
    sizes: ["S", "M", "L", "XL"], // Added sizes
    colors: ["#FF6347", "#4CAF50", "#1E90FF"], // Added colors
    reviews: [
      { rating: 4, comment: "Nice shirt, great for casual wear!" },
      { rating: 5, comment: "Good quality fabric, very comfortable." },
      {
        rating: 4,
        comment: "The fit was great, but it could be a bit longer.",
      },
    ], // Added reviews
  },
  {
    id: "2",
    name: "Men's Formal Shirt",
    category: "Men's Fashion",
    img: productImg2,
    description: "Perfect formal shirt for business meetings.",
    price: "₹599",
    sizes: ["M", "L", "XL"],
    colors: ["#ffffff", "#000000", "#808080"],
    reviews: [
      { rating: 5, comment: "Very elegant and professional." },
      { rating: 4, comment: "Fits well but a little tight on the shoulders." },
      {
        rating: 4,
        comment: "The fit was great, but it could be a bit longer.",
      },
    ],
  },
  {
    id: "3",
    name: "Men's Summer Polo",
    category: "Men's Fashion",
    img: productImg3,
    description: "A cool and comfy polo shirt for summer.",
    price: "₹499",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#FFC107", "#2196F3", "#009688"],
    reviews: [
      { rating: 4, comment: "Great for hot weather, very breathable." },
      { rating: 5, comment: "Perfect fit and great color options." },
      {
        rating: 4,
        comment: "The fit was great, but it could be a bit longer.",
      },
    ],
  },
  {
    id: "4",
    name: "Men's Denim Jeans",
    category: "Men's Fashion",
    img: productImg4,
    description: "Classic denim jeans for everyday wear.",
    price: "₹699",
    sizes: ["28", "30", "32", "34"],
    colors: ["#3B3B3B", "#5D5D5D", "#1A1A1A"],
    reviews: [
      { rating: 5, comment: "Great fit and very comfortable." },
      { rating: 4, comment: "Good quality, but a little tight on the waist." },
      {
        rating: 4,
        comment: "The fit was great, but it could be a bit longer.",
      },
    ],
  },
  {
    id: "5",
    name: "Women's Summer Dress",
    category: "Women's Fashion",
    img: productImg5,
    description: "A beautiful dress for summer days.",
    price: "₹799",
    sizes: ["S", "M", "L"],
    colors: ["#FF69B4", "#FFC0CB", "#FF6347"],
    reviews: [
      {
        rating: 5,
        comment: "Perfect summer dress, very light and comfortable!",
      },
      {
        rating: 4,
        comment: "The fit was great, but it could be a bit longer.",
      },
      {
        rating: 4,
        comment: "The fit was great, but it could be a bit longer.",
      },
    ],
  },
  {
    id: "6",
    name: "Women's Cocktail Dress",
    category: "Women's Fashion",
    img: productImg6,
    description: "Elegant dress for formal events.",
    price: "₹1499",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#8B0000", "#4B0082", "#000000"],
    reviews: [
      { rating: 5, comment: "Absolutely gorgeous dress, perfect for parties!" },
      { rating: 4, comment: "Very elegant, but a bit expensive." },
      {
        rating: 4,
        comment: "The fit was great, but it could be a bit longer.",
      },
    ],
  },
  {
    id: "7",
    name: "Women's Casual Blouse",
    category: "Women's Fashion",
    img: productImg7,
    description: "A chic blouse for everyday wear.",
    price: "₹499",
    sizes: ["S", "M", "L"],
    colors: ["#FFFFFF", "#D3D3D3", "#A9A9A9"],
    reviews: [
      { rating: 4, comment: "Comfortable and cute, perfect for casual wear." },
      { rating: 5, comment: "Love the fabric and the fit!" },
      {
        rating: 4,
        comment: "The fit was great, but it could be a bit longer.",
      },
    ],
  },
  {
    id: "8",
    name: "Women's Work Suit",
    category: "Women's Fashion",
    img: productImg8,
    description: "Sophisticated suit for professional settings.",
    price: "₹2499",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000080", "#8B4513", "#A52A2A"],
    reviews: [
      { rating: 5, comment: "Great suit, fits like a glove!" },
      {
        rating: 4,
        comment: "Looks very professional, but the pants were too long.",
      },
      {
        rating: 4,
        comment: "The fit was great, but it could be a bit longer.",
      },
    ],
  },
];

export default products;
