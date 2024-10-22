import"./Product.css";


function Product({ title, price, features}) {
 //let styles = { backgroundColor: "yellow"};
 let isDiscount = price > 30000;
 let styles = { backgroundColor: isDiscount ? "pink" :""};
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            {isDiscount&& <p>"Discount of 5%"</p>}
            {/* <p>Discount of 5%</p> */}
        </div>
    );
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//         </div>
//     );
// }
}
export default Product;