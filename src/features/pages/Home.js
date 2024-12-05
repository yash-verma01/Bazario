import ProductList from "../product/components/ProductList";
import Navbar from "../navbar/Navbar";

function Home() {
    return ( 
        <div>
            <Navbar>
                <ProductList></ProductList>
            </Navbar>
        </div>
     );
}

export default Home;