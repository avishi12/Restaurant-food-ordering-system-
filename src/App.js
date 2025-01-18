
import './App.css';
import  Navbar  from './componenents/Navbar/Navbar';
import Header from './componenents/Header/Header'; 
import Banner from './componenents/Banner/Banner'; 
import RestaurantInfo from './componenents/RestaurantInfo/RestaurantInfo';
function App() {
  return (
    <div>
      <Navbar/>
      <div className="App"> 
        <Header />
         <main className="App-main"> 
          <Banner /> 
          <RestaurantInfo />
           </main> 
           </div>
     </div>
  );
}

export default App;
