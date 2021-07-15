/* **************************** Storing data in objects ************************************** */
// products array
const products = [
  {
    id: 0,
    name: "Laptop HP",
    price: 1000,
    category: "Tech",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio animi a, illum sapiente magnam? Incidunt quisquam illo provident, sunt labore nemo sit non cupiditate consequuntur, optio debitis tempore et.",
    imgUrl: "https://www.notebookcheck.net/uploads/tx_nbc2/SL4_AMD_1.jpg",
  },
  {
    id: 1,
    name: "white bootes",
    price: 500,
    category: "Shoes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio animi a, illum sapiente magnam? Incidunt quisquam illo provident, sunt labore nemo sit non cupiditate consequuntur, optio debitis tempore et.",
    imgUrl:
      "https://assets.ajio.com/medias/sys_master/root/h0e/h57/14092954894366/-473Wx593H-460455972-black-MODEL.jpg",
  },
  {
    id: 2,
    name: "black bootes",
    price: 1000,
    category: "Shoes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio animi a, illum sapiente magnam? Incidunt quisquam illo provident, sunt labore nemo sit non cupiditate consequuntur, optio debitis tempore et.",
    imgUrl:
      "https://assets.ajio.com/medias/sys_master/root/20210403/xX5W/6068a008aeb269a9e335b3ef/-473Wx593H-461778987-white-MODEL.jpg",
  },
  {
    id: 3,
    name: "mobile",
    price: 500,
    category: "Tech",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio animi a, illum sapiente magnam? Incidunt quisquam illo provident, sunt labore nemo sit non cupiditate consequuntur, optio debitis tempore et.",
    imgUrl:
      "https://images.samsung.com/is/image/samsung/assets/latin_en/galaxy-s21/pfs/HOME_T_O_KV_Main_Animated_KV_720X1080.jpg?$ORIGIN_JPG$",
  },
  {
    id: 4,
    name: "play station",
    price: 1500,
    category: "Tech",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio animi a, illum sapiente magnam? Incidunt quisquam illo provident, sunt labore nemo sit non cupiditate consequuntur, optio debitis tempore et.",
    imgUrl: "https://cdn.mos.cms.futurecdn.net/rZdpHpsbPHmevFX5QXQuAV.jpg",
  },
  {
    id: 5,
    name: "men in the sun",
    price: 500,
    category: "Books",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio animi a, illum sapiente magnam? Incidunt quisquam illo provident, sunt labore nemo sit non cupiditate consequuntur, optio debitis tempore et.",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51F14Y3KRDL._SX331_BO1,204,203,200_.jpg",
  },
  {
    id: 6,
    name: "Robinson Crusoe",
    price: 1000,
    category: "Books",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio animi a, illum sapiente magnam? Incidunt quisquam illo provident, sunt labore nemo sit non cupiditate consequuntur, optio debitis tempore et.",
    imgUrl:
      "https://kbimages1-a.akamaihd.net/17c13873-3ed8-495a-8066-6fcd0d2e6970/1200/1200/False/robinson-crusoe-books-1-2.jpg",
  },
  {
    id: 7,
    name: "1984",
    price: 1500,
    category: "Books",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio animi a, illum sapiente magnam? Incidunt quisquam illo provident, sunt labore nemo sit non cupiditate consequuntur, optio debitis tempore et.",
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg",
  },
  {
    id: 8,
    name: "pink boots",
    price: 1500,
    category: "Shoes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio animi a, illum sapiente magnam? Incidunt quisquam illo provident, sunt labore nemo sit non cupiditate consequuntur, optio debitis tempore et.",
    imgUrl:
      "https://www.shewear.com.au/wp-content/uploads/2018/03/sheachievespink.jpg",
  },
  {
    id: 9,
    name: "bed",
    price: 1000,
    category: "Furniture",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio animi a, illum sapiente magnam? Incidunt quisquam illo provident, sunt labore nemo sit non cupiditate consequuntur, optio debitis tempore et.",
    imgUrl: "https://cb2.scene7.com/is/image/CB2/DondraQueenBedSHS21_1x1",
  },
  {
    id: 10,
    name: "capboard",
    price: 1500,
    category: "Furniture",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio animi a, illum sapiente magnam? Incidunt quisquam illo provident, sunt labore nemo sit non cupiditate consequuntur, optio debitis tempore et.",
    imgUrl:
      "https://www.ulcdn.net/images/products/293353/original/Miller_Four_Door_Two_Drawer_LP.jpg?1584696384",
  },
  {
    id: 11,
    name: "table",
    price: 500,
    category: "Furniture",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio animi a, illum sapiente magnam? Incidunt quisquam illo provident, sunt labore nemo sit non cupiditate consequuntur, optio debitis tempore et.",
    imgUrl:
      "https://www.royaloakindia.com/thumbimages/ROYIND-royaloak-grand-Coffeetable-Desktop-thumbnail1.webp",
  },

  {
    id: 11,
    name: "alaa star",
    price: 2000,
    category: "Otaku",
    description:
      "Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku ",
    imgUrl:
      "https://cdn.discordapp.com/avatars/401874828111642625/3b72f9e1a5a19803b8df571a768ccb2c.png?size=256",
  },

  {
    id: 11,
    name: "osama star",
    price: 500,
    category: "Otaku",
    description:
      "Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku Otaku ",
    imgUrl:
      "https://cdn.discordapp.com/avatars/401847801270501376/78ada3fb8bc8175a95812cde5a3d9bc5.png?size=256",
  },
];
// cart array
const cart = [];

// data for auto complete

const autoComplete = [
  "alaa",
  "Laptop HP",
  "Laptop HP alaa",
  "white bootes",
  "black bootes",
  "white bootes",
  "black bootes",
  "mobile",
  "play station",
  "men in the sun",
  "Robinson Crusoe",
  "1984",
  "pink boots",
  "bed",
  "capboard",
  "Lorem ipsum dolor sit, amet consectetur adipisicing el",
  "table",
  "a school",
  "t-shirt",
  "tshirt",
  "Laptop HP",
  "white bootes",
  "black bootes",
  "mobile",
  "Tech",
  "play station",
  "men in the sun",
  "Robinson Crusoe",
  "1984",
  "pink boots",
  "bed",
  "capboard",
  "table",
  "Furniture",
  "alaa star",
  "Otaku",
  "osama star",
  "Otaku",
];
