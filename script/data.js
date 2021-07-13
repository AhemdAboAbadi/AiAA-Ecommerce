/* **************************** Storing data in objects ************************************** */
// products array
let products = [
  {
    id: 0,
    name: "Laptop",
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
];
// cart array
let cart = [];
