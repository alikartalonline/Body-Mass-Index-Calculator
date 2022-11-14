import React from 'react'

function Calculate({ gender, weight, height }) {

let newHeight = height.toString().split("").slice(0,1) + "," + height.toString().split("").join("").slice(1);


// const bmi = () => {
//     if ()
// }


    return (
        <section className="container">
            <div className="row">

                <div className="bmi">
                    <h3>Gender: {gender}</h3>
                    <h3>Your Body Surface Area: {newHeight}</h3>
                    <h3>Your Body Weight: {weight}</h3>
                    <h3>Your Body Mass Index (BMI): 0</h3>
                </div>

            </div>
        </section>
    )
}

export default Calculate;