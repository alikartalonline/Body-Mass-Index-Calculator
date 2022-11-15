import React from 'react'

function Calculate({ gender, weight, height, setPage }) {

    let newHeight = height.toString().split("").slice(0, 1) + "." + height.toString().split("").join("").slice(1);

    const bmi = () => {
        return (weight / (newHeight ** 2))
    };

    const bmiResult = () => {
        if (bmi() >= 0 && bmi() <= 18.4) {
            return <p>Zayıf. Kişinin boyuna oranla ağırlığının yetersiz olduğunu ifade eden bu değer ile karşılaşılması durumunda kişinin diyetisyen eşliğinde sağlıklı bir şekilde kilo alması önerilir.</p>
        }
        else if (bmi() >= 18.5 && bmi() <= 24.9) {
            return <p>Normal. Bu değer aralığı kişinin ideal kiloda olduğunu gösterir. Bu değere sahip olan kişilerin düzenli, dengeli ve sağlıklı beslenmeye devam etmeleri önerilir.</p>
        }
        else if (bmi() >= 25 && bmi() <= 29.9) {
            return <p>Fazla Kilolu. Kişinin boyuna oranla kilosunun fazla olduğunu gösteren bu değer aralığında kişinin uygun diyet ile fazla kilolarından kurtulması önerilir.</p>
        }
        else if (bmi() >= 30 && bmi() <= 34.9) {
            return <p>Şişman. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Birinci derece obez kategorisinde değerlendiren değer aralığında, kişinin kilosunun sağlık açısından risk oluşturabilecek düzeyde olduğu anlaşılır. Bu kişilerin diyetisyen yardımıyla kilo vermesi önerilir.</p>
        }
        else if (bmi() >= 35 && bmi() <= 44.9) {
            return <p> Şişman. İkinci derece obez olarak tanımlanan bu değerlere sahip olan kişilerde kalp ve damar hastalıkları bakımından risk artar. Kişinin kilo vermek için diyetisyene başvurması önerilir.</p>
        }
        else if (bmi() > 45) {
            return <p>Aşırı Şişman. Üçüncü derece obez kategorisinde olan bu kişilerde hastalık gelişme riski çok yüksektir. Hekim ve diyetisyen eşliğinde kilo verilmesi önerilir.</p>
        }
    }



    return (
        <section className="container">
            <div className="row">

                <div className='row'>
                    <div 
                    // className="calculate d-flex"
                    className={
                        (bmi() >= 0 && bmi() <= 18.4) ? "border border-2 border-warning calculate d-flex" :
                        (bmi() >= 18.5 && bmi() <= 24.9) ? "border border-2 border-success calculate d-flex" :
                        (bmi() >= 25 && bmi() <= 29.9) ? "border border-2 border-primary calculate d-flex" :
                        (bmi() >= 30 && bmi() <= 34.9) ? "border border-2 border-dark calculate d-flex" :
                        (bmi() > 35) ? "border border-2 border-danger calculate d-flex" : "border border-2 calculate d-flex"
                    }
                    
                    >
                        <div className='col-8'>
                        <h3>Gender: {gender}</h3>
                        <h3>Your Body Surface Area: {newHeight}</h3>
                        <h3>Your Body Weight: {weight}</h3>
                        <h3>Your Ideal Body Weight: 00 </h3>
                        <h3>Your Body Mass Index (BMI): {bmi().toFixed(2)}</h3>
                        <h3>Calculation result: {bmiResult()} </h3>
                        <button className='btn btn-danger' onClick={() => setPage("")}>Reset</button>
                        </div>

                        <div className='col-4 call'>
                        <ul>
                            <h3>Yaş aralığına göre ise kişinin ideal vücut kitle indeksi şu şekildedir:</h3>
                            <li>19-24 Yaş: 19-24 BMI.</li>
                            <li>25-34 Yaş: 20-25 BMI.</li>
                            <li>35-44 Yaş: 21-26 BMI</li>
                            <li>45-54 Yaş: 22-27 BMI.</li>
                            <li>55-64 Yaş: 23-28 BMI.</li>
                            <li>65 Yaş ve üzeri: 24-29 BMI.</li>
                        </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Calculate;