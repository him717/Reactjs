import React from 'react'
import Menu from "./MenuAPI";
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueEle = [
  ...new Set(Menu.map((currentEle) => { // "..." - spread operator
  return currentEle.category;
}
  )),
"All",] // for all button.

console.log(uniqueEle);
function Restaurant() {
  const [menuData, setMenuData] = React.useState(Menu);
  const [menuList, setMenuList] = React.useState(uniqueEle);

    const filterItems = (category) => {

      if(category === "All"){
        setMenuData(Menu);
        return;
      }
        const updatedList = Menu.filter((currentEle) => {
          return currentEle.category === category;
        });
        setMenuData(updatedList);
      }
  // const [menuData, setMenuData] = React.useState(Menu);

  
  return (
    <>
      <Navbar filterItems={filterItems} menuList={menuList}/>

      <MenuCard menuData={menuData}/>
        

    </>
    
  );
}

export default Restaurant
