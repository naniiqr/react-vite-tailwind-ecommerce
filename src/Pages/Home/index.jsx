import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
      if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => ( 
        <Card key={item.id} data={item}/>
        )
        ))
      } else {
        return (
          <div className="flex">We dont have anything 😥</div>
        )
      }
    } 

  return (
    <Layout>
       <div className="flex items-center justify-center relative w-full mb-4">
          <h1 className="font-medium text-2xl bg-teal-600">Exclusive Products... Only for you!</h1>
        </div>
        <input 
        type="text" placeholder="Search a product"
        className="rounded-lg border-2 border-cyan-950 w-80 p-4 mb-4 font-light"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>  
  )
}


export default Home;
