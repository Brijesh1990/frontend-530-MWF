import React,{useState} from "react";
import Data from "./Data";
function ProductGrid() {
  const [filteredData, setFilteredData] = useState(Data);
  // same idea as your tShirts function
  const tShirts = () => {
    const result = Data.filter((item) => item.category === "t-shirt");
    setFilteredData(result);
  };

  // same idea as your shorts function
  const shorts = () => {
    const result = Data.filter((item) => item.category === "short");
    setFilteredData(result);
  };

  // same idea as your shorts function
  const paint = () => {
    const result = Data.filter((item) => item.category === "paints");
    setFilteredData(result);
  };

  // same idea as your shorts function
  const boot = () => {
    const result = Data.filter((item) => item.category === "shoes");
    setFilteredData(result);
  };

  const showAll = () => {
    setFilteredData(Data);
  };

 return(
    <>
      <div className="app"> 
        <h1>Products filter app</h1>
        <button type="button" onClick={showAll}>All</button>
        <button type="button" onClick={tShirts}>T-Shirts</button>
        <button type="button" onClick={shorts}>Short</button>
        <button type="button" onClick={paint}>Paints</button>
        <button type="button" onClick={boot}>Boots</button>
        {/* fetch data  */}
        <div className="product-grid">
            {filteredData.map((item,index)=>{
                return(
                    <>
                   <div className="prod-app">
                    <p><img src={item.photo} alt="photo" /></p>
                    <p><b>{item.name}</b></p>
                    <p><b>Category:</b>{item.category}</p>
                    <p>Rs.{item.price}</p>
                   </div>
                </>
                )
            })}
            
            
        </div>
      </div>        
    </>
 )   
}

export default ProductGrid