import React from 'react'
import "./Style.css";


function MenuCard({ menuData }) {
    // console.log(menuData);

    return (
        <>
            <section className="main-card--container">
            {menuData.map((currentEle) => {

                const {id, category, name, description, image } = currentEle //Destructuring.
                return (
                    <>

                        <div className="card-container" key = {id}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-number card-circle subtle">{id}</div>
                                    <span className="card-author subtle">{category}</span>
                                    <h2 className="card-title">{name}</h2>
                                    <span className="card-description subtle">{description}</span>
                                    <div className="card-read">Read</div>
                                    <img src={image} alt="" className="card-media" />
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
