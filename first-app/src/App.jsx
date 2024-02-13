import Navbar from "./ components/Navbar"
import Footer from "./ components/Footer"
import Cards from "./ components/Cards"


function App() {


  return (
    <>
  <Navbar/>
 
  <div className="cards">
    <Cards title ="card 1" description ="card 1 desc" />
    <Cards title ="card 2" description ="card 2 desc" />
    <Cards title ="card 3" description ="card 3 desc" />
    <Cards title ="card 4" description ="card 4 desc" />
    </div>
    <Footer/>

    </>
  ) 
}

export default App
