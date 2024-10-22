import Product from "./Product.jsx";

function ProductTab(){
    let options = ["hi-tech","durable","fast"];
   // let Options2 = {a: "hi-tech",b: "durable",c:" fast"};
    return (
        <>
         <Product title="Phone" price={30000}/>
         <Product title="Laptop"price={40000}/>
        <Product title="Pen" price={10}/> 
     </>
    ); 
}

export default ProductTab;