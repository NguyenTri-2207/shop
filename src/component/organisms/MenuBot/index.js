import React, { useReducer, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardHeader from "../../molecules/CardHeader";
import CardProduct from "../../molecules/CardProduct";
import "./index.scss";
import CardModal from "../../molecules/CardModal";
import iphone_13_1 from "../../../images/product/iphone13/than_chi.jpg"
import iphone_13_2 from "../../../images/product/iphone13/trang.jpg"
import iphone_13_3 from "../../../images/product/iphone13/vang.jpg"
import iphone_13_4 from "../../../images/product/iphone13/xanh.jpg"
import iphone_13_normal_1 from "../../../images/product/iphone13/13.jpg"
import iphone_13_normal_2 from "../../../images/product/iphone13/13_trang.jpg"
import iphone_13_normal_3 from "../../../images/product/iphone13/13_128gb_hong.jpg"
import iphone_13_normal_4 from "../../../images/product/iphone13/13_128gb_do.jpg"
const dataMenu = [
  {
    id: 1,
    tab: "tab1",
    title: "IPhone",
    data: [
      {
        title: "iPhone 13 Pro Max",
        src: iphone_13_1,
        price: "33490000",
        discount: "35000000",
        des: "Thông số kĩ thuật  ",
        id: 1,
        start: 5,
        priceDiscount: 5,
        dataRam: ["128GB", "256GB", "512GB", "1T"],
        dataImg: [
          {
            src: iphone_13_1,
          },
          {
            src: iphone_13_2,
          },
          {
            src: iphone_13_3,
          },
          {
            src: iphone_13_4,
          },
        ],
      },
      {
        title: "iPhone 13 128GB",
        src: iphone_13_normal_1,
        price: "23000000",
        discount: "24000000",
        des: "Thông số kĩ thuật  ",
        id: 2,
        start: 4,
        dataRam: ["128GB", "256GB", "512GB"],
        dataImg: [
          {
            src: iphone_13_normal_1,
          },
          {
            src: iphone_13_normal_2,
          },
          {
            src: iphone_13_normal_3,
          },
          {
            src: iphone_13_normal_4,
          },
        ],
      },
      {
        title: "Iphone 11",
        src: "https://hoanghamobile.com/i/preview/Uploads/2020/11/06/apple-iphone-12-mini-3.png",
        price: "1500",
        discount: "1400",
        des: "Thông số kĩ thuật  ",
        id: 3,
        start: 3,
      },
      {
        title: "Iphone 10",
        src: "https://hoanghamobile.com/i/preview/Uploads/2020/11/27/yellow.png",
        price: "1500",
        discount: "1400",
        des: "Thông số kĩ thuật  ",
        id: 4,
        start: 1,
      },
      {
        title: "Iphone 10",
        src: "https://hoanghamobile.com/i/preview/Uploads/2020/11/27/yellow.png",
        price: "1500",
        discount: "1400",
        des: "Thông số kĩ thuật  ",
        id: 5,
        start: 5,
      },
      {
        title: "Iphone 10",
        src: "https://hoanghamobile.com/i/preview/Uploads/2020/11/27/yellow.png",
        price: "1500",
        discount: "1400",
        des: "Thông số kĩ thuật  ",
        id: 6,
      },
    ],
  },
  {
    id: 2,
    tab: "tab2",
    title: "Apple Watch",
    data: [
      {
        title: "Củ sạc nhanh Mophie 20w PD Type C",
        src: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/c/u/cu-sac-nhanh-mophie-20w-pd-type-c_1_1.jpg",
        price: "1000",
        discount: "1400",
        des: "Thông số kĩ thuật  ",
        id: 1,
      },
      {
        title: "Củ sạc nhanh Mophie 20w PD Type C",
        src: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/c/u/cu-sac-nhanh-anker-powerport-iii-nano-20w-pd-a2633_1.jpg",
        price: "150",
        discount: "300",
        des: "Thông số kĩ thuật  ",
        id: 2,
      },
      {
        title: "Củ sạc nhanh Mophie 20w PD Type C",
        src: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/c/u/cu-sac-nhanh-mophie-20w-pd-type-c_1_1.jpg",
        price: "1000",
        discount: "1400",
        des: "Thông số kĩ thuật  ",
        id: 3,
      },
      {
        title: "Củ sạc nhanh Mophie 20w PD Type C",
        src: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/c/u/cu-sac-nhanh-mophie-20w-pd-type-c_1_1.jpg",
        price: "1000",
        discount: "1400",
        des: "Thông số kĩ thuật  ",
        id: 4,
      },
      {
        title: "Củ sạc nhanh Mophie 20w PD Type C",
        src: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/c/u/cu-sac-nhanh-mophie-20w-pd-type-c_1_1.jpg",
        price: "1000",
        discount: "1400",
        des: "Thông số kĩ thuật  ",
        id: 5,
      },
    ],
  },
  {
    id: 3,
    tab: "tab3",
    title: "MacBook",
    data: [
      {
        title: "Loa Bluetooth Huawei CM51",
        src: "https://cdn.cellphones.com.vn/media/catalog/product/h/_/h_nh_ch_nh_m_u_d__master.jpg",
        price: "1500",
        discount: "2000",
        des: "Thông số kĩ thuật  ",
        id: 1,
      },
      {
        title: "Loa Bluetooth Marshall Emberton ",
        src: "https://cdn.cellphones.com.vn/media/catalog/product/p/o/pos_desktop_emberton_large-1.png",
        price: "1500",
        discount: "1400",
        des: "Thông số kĩ thuật  ",
        id: 2,
      },
      {
        title: "Loa Bluetooth SRS-XB13",
        src: "https://cdn.cellphones.com.vn/media/catalog/product/x/b/xb13.jpg",
        price: "1500",
        discount: "1400",
        des: "Thông số kĩ thuật  ",
        id: 3,
      },
      {
        title: "Loa Bluetooth Marshall Emberton ",
        src: "https://cdn.cellphones.com.vn/media/catalog/product/p/o/pos_desktop_emberton_large-1.png",
        price: "1500",
        discount: "1400",
        des: "Thông số kĩ thuật  ",
        id: 4,
      },
      {
        title: "Loa Bluetooth Huawei CM51",
        src: "https://cdn.cellphones.com.vn/media/catalog/product/h/_/h_nh_ch_nh_m_u_d__master.jpg",
        price: "1500",
        discount: "2000",
        des: "Thông số kĩ thuật  ",
        id: 5,
      },
    ],
  },
  {
    id: 4,
    tab: "tab4",
    title: "Accessories",
    data: [
      {
        title: "Samsung Galaxy A52 5G",
        src: "https://hoanghamobile.com/i/preview/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg",
        price: "1500",
        discount: "1400",
        des: "Thông số kĩ thuật  ",
        id: 1,
      },
      {
        title: "Iphone 12",
        src: "https://hoanghamobile.com/i/preview/Uploads/2020/11/06/iphone-12-pro-max.png",
        price: "1500",
        discount: "1400",
        des: "Thông số kĩ thuật  ",
        id: 2,
      },
      {
        title: "Iphone 11",
        src: "https://hoanghamobile.com/i/preview/Uploads/2020/11/06/apple-iphone-12-mini-3.png",
        price: "1500",
        discount: "1400",
        des: "Thông số kĩ thuật  ",
        id: 3,
      },
      {
        title: "Iphone 10",
        src: "https://hoanghamobile.com/i/preview/Uploads/2020/11/27/yellow.png",
        price: "1500",
        discount: "1400",
        des: "Thông số kĩ thuật  ",
        id: 4,
      },
    ],
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "tab1":
      return {
        ...state,
        tab: "tab1",
        id: 1,
        data: action.data,
      };
    case "tab2":
      return {
        ...state,
        id: 2,
        data: action.data,
      };
    case "tab3":
      return {
        ...state,
        id: 3,
        data: action.data,
      };
    case "tab4":
      return {
        ...state,
        id: 4,
        data: action.data,
      };
    case "tab5":
      return {
        ...state,
        id: 5,
        data: action.data,
      };
    default:
      return state;
  }
};

const MenuBot = () => {
  const [tab, dispatch] = useReducer(reducer, {
    id: 1,
    data: dataMenu[0].data,
  });
  const [limit, setLimit] = useState(4);
  const [showCard, setShowCard] = useState(false);
  const [dataCard, setDataCard] = useState();
  const handleLoadMore = () => {
    setLimit(limit + 4);
  };
  const handleSeeLess = () => {
    setLimit(4);
  };
  const HandleClickSee = (item) => {
    setShowCard(true);
    setDataCard(item);
  };
  // console.log(dataCard);
  const dataLength = tab.data.length;
  // console.log(dataLength);
  return (
    <div className="container">
      <div className="MenuBot mt-4">
        {dataMenu.map((item) => {
          return (
            <CardHeader
              styless={tab.id === item.id ? { background: "#333" } : {}}
              onClick={() => dispatch({ type: `${item.tab}`, data: item.data })}
              key={item.id}
              title={item.title}
            />
          );
        })}

        <div className="row">
          {tab.data.slice(0, limit).map((item) => (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-3 mt-5"
              key={item.id}
            >
              <CardProduct
                img={item.src}
                title={item.title}
                price={item.price}
                des={item.des}
                discount={item.discount}
                priceDiscount={item.priceDiscount}
                onClicSee={() => HandleClickSee(item)}
                start={item.start}
              />
            </div>
          ))}
        </div>
        <div className="LoadMore my-4">
          <button
            className={`${dataLength <= limit ? "d-none" : "d-block"}`}
            onClick={handleLoadMore}
          >
            Load More
          </button>
          <button
            className={`${dataLength <= limit && dataLength > 4 ? "d-block" : "d-none"
              }`}
            onClick={handleSeeLess}
          >
            Thu GỌn
          </button>
        </div>
      </div>
      <CardModal
        show={showCard}
        onHide={() => setShowCard(false)}
        title={dataCard?.title}
        price={dataCard?.price}
        src={dataCard?.src}
        dataImg={dataCard?.dataImg}
        dataRam={dataCard?.dataRam}
        start={dataCard?.start}
      />
    </div>
  );
};
export default MenuBot;
