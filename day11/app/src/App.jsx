// import { useState } from "react";

// const App = () => {
//   const [product, setProduct] = useState();// product =
//   const [selectIndex, setSelectIndex] = useState();

//   function handleClick(indexNumber) {
//     console.log(indexNumber);
//     setSelectIndex(indexNumber);
//   }

//   return (
//     <>
//       <h3>{selectIndex}</h3>
//       <button
//         onClick={() => {
//           setProduct([
//             {
//               title: "abibas",
//               price: "120",
//               description: "lorem ipsum dolor sit amet",
//             },

//             {
//               title: "product 2",
//               price: "150",
//               description: "lorem ipsum dolor sit amet",
//             },
//             {
//               title: "product 3",
//               price: "200",
//               description: "lorem ipsum dolor sit amet",
//             },
//             {
//               title: "product 4",
//               price: "250",
//               description: "lorem ipsum dolor sit amet",
//             },
//             {
//               title: "product 5",
//               price: "300",
//               description: "lorem ipsum dolor sit amet",
//             },
//           ]);
//         }}
//       >
//         add products
//       </button>
//       <div className="main-container">
//         {product && product.map((product, index) => {
//           return (
//             <div key={index} className="product-card">
//               <h1>{product.title}</h1>
//               <p>{product.price}</p>
//               <p>{product.description}</p>
//               <button
//                 onClick={() => {
//                   handleClick(index);
//                 }}
//               >
//                 click me
//               </button>
//               <hr />
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default App;

import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error:", error))
        .finally(() => setLoading(false));
    }, 5000);
  }, []);
  return (
    <div>
      {loading && <h2>loading ...</h2>}

      <div className="main-container">
        {product &&
          product.map((product, index) => (
            <div key={index} className="product-card">
              <h1>{product.title}</h1>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
