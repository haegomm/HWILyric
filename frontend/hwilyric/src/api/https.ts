import baseAxios from "axios";
// import { deleteUserInfo, getUserInfo } from "./authInfo";

export const axios = baseAxios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-Type": "application/json",
  },
});

// axios.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${getUserInfo().accessToken}`;
//   return config;
// });

// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     if (error.response && error.response.status) {
//       switch (error.response.status) {
//         case 401:
//           alert("로그인이 필요합니다.");
//           window.location.replace("/login");
//           deleteUserInfo();
//           return new Promise(() => {});
//         default:
//           return Promise.reject(error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export const fileAxios = baseAxios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});


// export async function createProduct(productInfo) {
//   const formData = new FormData();

//   const data = {
//     storeId: productInfo.storeId,
//     titleCategoryName: productInfo.categoryTitle,
//     detailCategoryName: productInfo.categoryDetail,
//     itemName: productInfo.itemName,
//     itemDescription: productInfo.itemDescription,
//     itemPrice: productInfo.itemPrice,
//     itemStock: productInfo.itemStock,
//     imgSrc: productInfo.imgSrc,
//   };
//   formData.append("uploadFile", productInfo.uploadFile);

//   formData.append(
//     "item",
//     new Blob([JSON.stringify(data)], {
//       type: "application/json",
//     })
//   );

//   const config = {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       "Access-Control-Allow-Origin": "",
//       Authorization: { token: sessionStorage.getItem("accessToken") },
//       token: sessionStorage.getItem("accessToken"),
//     },
//   };

// import React, { useRef } from "react";

// import classes from "./style/MyStoreHeader.module.scss";

// import { MdAddCircle } from "react-icons/md";
// import MyStoreHeaderInfo from "./MyStoreHeaderInfo";
// import MyStoreMenu from "./MyStoreMenu";

// const MyStoreHeader = (props) => {
//   const inputBgRef = useRef();
//   const bgImgRef = useRef();

//   const loadBgFile = () => {
//     const file = inputBgRef.current.files[0];
//     bgImgRef.current.src = URL.createObjectURL(file);
//     props.onStoreInfoChange("storeImg", URL.createObjectURL(file));
//     props.onStoreInfoChange("filename", file.name);
//     props.onStoreInfoChange("uploadFile", file);
//   };

//   return (
//     <div className={classes.storeHeader}>
//       <div className={classes.headerBg}>
//         <div className={classes.backdrop}></div>
//         {props.info.storeImg ? (
//           <div className={classes.bgBox}>
//             <img ref={bgImgRef} src={props.info.storeImg} alt="header-bg" />
//           </div>
//         ) : (
//           <div className={classes.noImg}>
//             <img
//               className={classes.hiddenImg}
//               ref={bgImgRef}
//               src=""
//               alt="header-bg"
//             />
//             <span>스토어 이미지를 추가해주세요</span>
//           </div>
//         )}
//       </div>
//       <form className={classes.header}>
//         <label
//           className={!props.isEditting ? classes.hidden : null}
//           htmlFor="select-bg"
//         >
//           <MdAddCircle className={classes.btnAddBg} />
//         </label>
//         <MyStoreHeaderInfo
//           storeName={props.info.storeName}
//           storeDescription={props.info.storeDescription}
//         />
//         {props.info.storeId ? <MyStoreMenu /> : null}
//         <input
//           ref={inputBgRef}
//           id="select-bg"
//           className={classes.imgInput}
//           type="file"
//           accept=".gif, .jpg, .png"
//           name="storeImg"
//           onChange={loadBgFile}
//         />
//       </form>
//     </div>
//   );
// };

// export default MyStoreHeader;