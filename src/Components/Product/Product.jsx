import { useState, useEffect } from "react";

const Product = () => {
    const [product,setProduct] = useState([]);
    console.log(product)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((product) => setProduct(product));
    }, []);
    
    return (
      <div className="grid grid-rows-4 grid-flow-col gap-4 mx-auto w-[90%] mt-20">
        {product.map((p, i) => (
          <div key={i}>
            <div className="w-[300px]  border border-1  mt-8 rounded">
              <div className="p-4">
                <img className="w-[285px] h-[285px]" src={p.image} alt="" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-sans text-text mt-4">
                  {p.title.slice(0, 25)}
                </h2>
                <h3 className="text-xl font-sans text-text mt-2">
                  Price:${p.price}
                </h3>
                <h3 className="font-sans text-text mt-4">
                  <span className="font-bold">Category: </span> {p.category}
                </h3>
                <h3 className="font-sans text-text">
                  <span className="font-bold">Rating: </span> {p.rating.rate}
                </h3>
              </div>
              <button className="w-full bg-[#FF9900] flex justify-center items-center gap-2">
                Add to cart{" "}
                <span>
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2188 11.2222H7.13068L7.33359 12.3333H15.6551C16.1325 12.3333 16.4864 12.8299 16.3806 13.3514L16.2096 14.1943C16.789 14.5093 17.1886 15.1746 17.1886 15.9445C17.1886 17.0279 16.3975 17.9043 15.4269 17.8887C14.5024 17.8738 13.742 17.0334 13.717 15.9982C13.7034 15.4326 13.9057 14.9201 14.2379 14.5555H7.73844C8.06015 14.9085 8.26002 15.4002 8.26002 15.9445C8.26002 17.0491 7.4376 17.9386 6.44114 17.8867C5.55634 17.8407 4.83675 17.04 4.79025 16.0493C4.75435 15.2843 5.11379 14.6099 5.65989 14.2582L3.48209 2.33334H1.31558C0.904649 2.33334 0.571533 1.96025 0.571533 1.5V0.944448C0.571533 0.484205 0.904649 0.111115 1.31558 0.111115H4.49418C4.84764 0.111115 5.15229 0.389622 5.22313 0.777434L5.5073 2.33334H17.6843C18.1618 2.33334 18.5157 2.8299 18.4099 3.35136L16.9443 10.5736C16.8673 10.953 16.5662 11.2222 16.2188 11.2222ZM13.2203 5.94445H11.7322V4.55556C11.7322 4.24872 11.5102 4 11.2362 4H10.7402C10.4662 4 10.2441 4.24872 10.2441 4.55556V5.94445H8.75605C8.48209 5.94445 8.26002 6.19316 8.26002 6.50001V7.05556C8.26002 7.3624 8.48209 7.61112 8.75605 7.61112H10.2441V9.00001C10.2441 9.30685 10.4662 9.55556 10.7402 9.55556H11.2362C11.5102 9.55556 11.7322 9.30685 11.7322 9.00001V7.61112H13.2203C13.4943 7.61112 13.7164 7.3624 13.7164 7.05556V6.50001C13.7164 6.19316 13.4943 5.94445 13.2203 5.94445Z"
                      fill="#0E161A"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Product;