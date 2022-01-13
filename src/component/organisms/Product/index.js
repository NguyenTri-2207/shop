// import React, { useReducer, useState, useEffect, useContext } from "react";
// import Select from "react-select";
// import CardHeader from "../../molecules/CardHeader";
// import CardProduct from "../../molecules/CardProduct";
// import "./index.scss";
// import { addCart } from "../../../redux/action/cart";
// import { useDispatch } from "react-redux";
// import CardModal from "../../molecules/CardModal";
// import { dataMenu, dataSortname, dataSortPrice } from "../MenuBot/data.js";
// import { LoginContex } from "../../context";

// // custom select
// const customStyles = {
//   menu: (provided) => ({
//     ...provided,
//     width: "100%",
//     fontSize: "14px",
//   }),

//   control: () => ({
//     width: "100%",
//     display: "flex",
//     border: "1px solid #a1a1a1",
//     borderRadius: "4px",
//     fontSize: "14px",
//   }),

//   singleValue: (provided, state) => {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = "opacity 300ms";

//     return { ...provided, opacity, transition };
//   },
// };

// const MenuBot = ({ title }) => {
//   const [limit, setLimit] = useState(4);

//   // click
//   const handleLoadMore = () => {
//     setLimit(limit + 4);
//   };
//   const handleSeeLess = () => {
//     setLimit(4);
//   };
//   const HandleClickSee = (item) => {
//     // setShowCard(true);
//     // setDataCard(item);
//   };
//   return (
//     <div className="container">
//       <div className="product">
//         {/*  menu product */}
//         <div className="product_menu">
//           <div className="col-4">
//             <h4>{title}</h4>
//           </div>
//           <div className="col-8 product_menu-left d-flex">
//             <Select
//               // className="pe-2 col-3"
//               defaultValue={{ label: "Mức giá", value: 0 }}
//               options={dataSortname}
//               components={{ IndicatorSeparator: () => null }}
//               // onChange={getDataPriceSegment}
//               styles={customStyles}
//             />
//             <Select
//               className="col"
//               defaultValue={{ label: "Sắp xếp theo giá", value: 0 }}
//               options={dataSortPrice}
//               components={{ IndicatorSeparator: () => null }}
//               // onChange={getDataPriceSort}
//               styles={customStyles}
//             />
//           </div>
//         </div>
//         {/* Sort product */}

//         <div className="product_list">
//           {dataMenu &&
//             dataMenu[0].data.slice(0, limit).map((item) => (
//               <div
//                 className="col-12 col-md-6 col-lg-4 col-xl-3 mt-2 mt-md-4 "
//                 key={item.id}
//               >
//                 <CardProduct
//                   img={item.src}
//                   title={item.title}
//                   price={item.price}
//                   des={item.des}
//                   discount={item.discount}
//                   priceDiscount={item.priceDiscount}
//                   onClicSee={() => HandleClickSee(item)}
//                   start={item.start}
//                   // onClickaddCard={() => handleaddCard(item)}
//                 />
//               </div>
//             ))}
//         </div>

//         <div className="LoadMore my-4">
//           {dataMenu.length > 4 && (
//             <button
//               className={`${dataMenu.length <= limit ? "d-none" : "d-block"}`}
//               onClick={handleLoadMore}
//             >
//               Xem thêm
//             </button>
//           )}
//           {dataMenu.length > 4 && (
//             <button
//               className={`${
//                 dataMenu.length <= limit && dataMenu.length > 4
//                   ? "d-block"
//                   : "d-none"
//               }`}
//               onClick={handleSeeLess}
//             >
//               Thu Gọn
//             </button>
//           )}
//         </div>
//       </div>
//       {/* <CardModal
//         show={showCard}
//         onHide={() => setShowCard(false)}
//         title={dataCard?.title}
//         price={dataCard?.price}
//         src={dataCard?.src}
//         dataImg={dataCard?.dataImg}
//         dataRam={dataCard?.dataRam}
//         start={dataCard?.start}
//       /> */}
//     </div>
//   );
// };
// export default MenuBot;
