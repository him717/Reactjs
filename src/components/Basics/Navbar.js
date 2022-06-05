import React from 'react'
// import Menu from './MenuAPI';
// import MenuCard from './MenuCard';

function Navbar( {filterItems, menuList}) {

  return (
    <>
      <nav className="navbar">
          <div className="btn-group">
            {
              menuList.map((currentEle)=> {
                return (
                  <button 
                          className="btn-group__item" onClick ={() =>filterItems(currentEle)}>{currentEle}
                      </button>
                );
            })
          }

          </div>
        </nav>
      
    </>
  )
}

export default Navbar
