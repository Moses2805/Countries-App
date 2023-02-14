import React from 'react'

const Card = (props) => {
    return (
        <div className='col-6 col-md-4 col-lg-3 card-box mb-3'>
            <div className="card">
                <img src={props.img} className="card-img-top" alt="..." />
                <div className={props.darkMode ? "dark-mode-cards card-body" : "card-body"}>
                    <h5 className={props.darkMode ? "light-mode-select card-title" : "card-title"}>{props.title}</h5>
                    <p className={props.darkMode ? "light-mode-select card-text" : "card-text"}>Population: <span>{props.people}</span></p>
                    <p className={props.darkMode ? "light-mode-select card-text" : "card-text"}>Region: <span>{props.region}</span></p>
                    <p className={props.darkMode ? "light-mode-select card-text" : "card-text"}>Capital: <span>{props.capital}</span></p>

                </div>
            </div>
        </div>
    )
}

export default Card