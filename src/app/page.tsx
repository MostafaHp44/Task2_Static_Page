import BurgerMenu from "./Components/BurgerList/BurgerList";
import ItemCard from "./Components/ItemCard/ItemCard";
import NavBar from "./Components/NavBar/NavBar";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import QRCard from "./Components/QRCard/QRCard";

 const Home=()=>{
  return (
    
     <div className="grid 	">

     <div className="grid  ">
      <NavBar/>
      <BurgerMenu/>
     </div>

     <div className="grid sm:flex justify-around ">

     <div className="grid">
     <ProfileCard />
     <QRCard/>
     </div>

     <div className="grid">
      <ItemCard/>
     </div>


     </div>
    

     </div>
  );
}
export default Home