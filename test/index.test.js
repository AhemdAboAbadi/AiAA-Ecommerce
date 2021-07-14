const cardFilter = require('../script/function')
describe("filter array", () => {
  test("Array to be filtered", () => {
    const array6 = [
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
      }]
      const actual = cardFilter(array6, 'laptop') 
      const expected = [
        {
          id: 0,
          name: "Laptop",
          price: 1000,
          category: "Tech",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio animi a, illum sapiente magnam? Incidunt quisquam illo provident, sunt labore nemo sit non cupiditate consequuntur, optio debitis tempore et.",
          imgUrl: "https://www.notebookcheck.net/uploads/tx_nbc2/SL4_AMD_1.jpg",
        }];
    expect(actual).toEqual(expected);
  });
});
