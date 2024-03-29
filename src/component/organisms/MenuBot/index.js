import React, { useReducer, useState, useEffect, useContext } from "react";
import Select from "react-select";
import CardHeader from "../../molecules/CardHeader";
import CardProduct from "../../molecules/CardProduct";
import "./index.scss";
import { addCart } from "../../../redux/action/cart";
import { useDispatch } from "react-redux";
import CardModal from "../../molecules/CardModal";
import { dataMenu, dataSortname, dataSortPrice } from "./data.js";
import { LoginContex } from "../../context";
import { addFavorite } from "../../../redux/action/favorite";
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
// custom select
const customStyles = {
  menu: (provided) => ({
    ...provided,
    width: "100%",
    fontSize: "14px",
  }),

  control: () => ({
    width: "100%",
    display: "flex",
    border: "1px solid #a1a1a1",
    borderRadius: "4px",
    fontSize: "14px",
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

const MenuBot = () => {
  const dispatchCart = useDispatch();
  const dispatchLove = useDispatch();
  const [tab, dispatch] = useReducer(reducer, {
    id: 1,
    data: dataMenu[0].data,
  });
  const [limit, setLimit] = useState(4);
  const [showCard, setShowCard] = useState(false);

  const [dataProduct, setDataProduct] = useState(tab.data);
  const [dataCard, setDataCard] = useState([]);

  const { setLogin, userSucsecss } = useContext(LoginContex);

  // click
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

  // sort select
  useEffect(() => {
    setDataProduct(tab.data);
  }, [tab]);

  const getDataPriceSegment = (value) => {
    const data = tab.data;
    if (value.value === 1) {
      setDataProduct(data);
    } else if (value.value === 2) {
      setDataProduct(() =>
        // data.slice(0).sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        data.slice(0).filter((item) => item.price < 10000000)
      );
    } else if (value.value === 3) {
      setDataProduct(
        data
          .slice(0)
          .filter((item) => item.price > 10000000 && item.price < 15000000)
      );
    } else if (value.value === 4) {
      setDataProduct(
        data
          .slice(0)
          .filter((item) => item.price > 15000000 && item.price < 20000000)
      );
    } else if (value.value === 5) {
      setDataProduct(
        data
          .slice(0)
          .filter((item) => item.price > 20000000 && item.price < 25000000)
      );
    } else if (value.value === 6) {
      setDataProduct(data.slice(0).filter((item) => item.price > 25000000));
    }
  };

  const getDataPriceSort = (value) => {
    // const data = dataProduct;
    if (value.value === 1) {
      setDataProduct(dataProduct);
    } else if (value.value === 2) {
      setDataProduct(() =>
        dataProduct
          .slice(0)
          .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      );
    } else if (value.value === 3) {
      setDataProduct(
        dataProduct
          .slice(0)
          .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      );
    }
  };
  // cart data card redux

  // add card to redux
  const handleaddCard = (item) => {
    const action = addCart(item);
    dispatchCart(action);
  };

  const handleaddLove = (item) => {
    const action = addFavorite(item);
    dispatchLove(action);
  };
  return (
    <div className="container">
      <div className="product">
        {/*  menu product */}
        <div className="product_menu">
          <div className="col-12 col-md-4">
            <h4>SẢN PHẨM NỔI BẬT NHẤT</h4>
          </div>
          <div className="col-12 col-md-8 product_menu-left">
            {dataMenu.map((item, index) => {
              return (
                <CardHeader
                  styless={
                    tab.id === item.id
                      ? {
                          background:
                            "transparent linear-gradient(90deg, #009981 0%, #00483d 100%) 0% 0% no-repeat",
                          color: "#fff",
                        }
                      : {}
                  }
                  onClick={() =>
                    dispatch({ type: `${item.tab}`, data: item.data })
                  }
                  key={index}
                  title={item.title}
                />
              );
            })}
          </div>
        </div>
        {/* Sort product */}
        <div className="product_sort">
          <div className="col-7">
            <div className="d-flex">
              <Select
                className="pe-2 col-8 col-md-4"
                defaultValue={{ label: "Mức giá", value: 0 }}
                options={dataSortname}
                components={{ IndicatorSeparator: () => null }}
                onChange={getDataPriceSegment}
                styles={customStyles}
              />

              {/* <Select
                className="px-2 col-2"
                defaultValue={{ label: "Ram", value: 0 }}
                options={dataSortPrice}
                components={{ IndicatorSeparator: () => null }}
                onChange={getDataPriceSort}
                styles={customStyles}
              />
              <Select
                className="ps-2 col-2"
                defaultValue={{ label: "Bộ nhớ trong", value: 0 }}
                options={dataSortPrice}
                components={{ IndicatorSeparator: () => null }}
                onChange={getDataPriceSort}
                styles={customStyles}
              /> */}
            </div>
          </div>
          <div className="col-5 col-md-2">
            <Select
              className="col"
              defaultValue={{ label: "Sắp xếp theo giá", value: 0 }}
              options={dataSortPrice}
              components={{ IndicatorSeparator: () => null }}
              onChange={getDataPriceSort}
              styles={customStyles}
            />
          </div>
        </div>
        <div className="product_list">
          {dataProduct &&
            dataProduct.slice(0, limit).map((item) => (
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 mt-2 mt-md-4 "
                // key={item.id}
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
                  onClickaddCard={() => handleaddCard(item)}
                  onClickaddLove={() => handleaddLove(item)}
                  // loveStatus={loveStatus}
                />
              </div>
            ))}
        </div>

        <div className="LoadMore my-4">
          {dataProduct.length > 4 && (
            <button
              className={`${tab.data.length <= limit ? "d-none" : "d-block"}`}
              onClick={handleLoadMore}
            >
              Xem thêm
            </button>
          )}
          {dataProduct.length > 4 && (
            <button
              className={`${
                tab.data.length <= limit && tab.data.length > 4
                  ? "d-block"
                  : "d-none"
              }`}
              onClick={handleSeeLess}
            >
              Thu Gọn
            </button>
          )}
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
