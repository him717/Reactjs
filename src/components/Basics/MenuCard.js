import React from 'react'
import "./Style.css";


function MenuCard({ menuData }) {
    // console.log(menuData);

    return (
        <>
            <section className="main-card--container">
            {menuData.map((currentEle) => {
                return (
                    <>

                        <div className="card-container" key = {currentEle}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-number card-circle subtle">{currentEle.id}</div>
                                    <span className="card-author subtle">{currentEle.category}</span>
                                    <h2 className="card-title">{currentEle.name}</h2>
                                    <span className="card-description subtle">{currentEle.description}</span>
                                    <div className="card-read">Read</div>
                                    <img src={currentEle.image} alt="" className="card-media" />
                                    <span className="card-tag">Order Now</span>
                                </div>
                            </div>
                        </div>
                        

                    </>
                )
            })}
            </section>
            


        </>

    )
}

export default MenuCard
