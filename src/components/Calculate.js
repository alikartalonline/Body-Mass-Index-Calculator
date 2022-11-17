import React from 'react';
import Footer from './Footer';

function Calculate({ gender, weight, height, setPage, setHeight, setGender, setWeight }) {

    let newHeight = height.toString().split("").slice(0, 1) + "." + height.toString().split("").join("").slice(1);

    let inchHeight = (height / 2.54).toFixed(2);



    const idealKgMale = () => {
        if (gender == 'Male') {
            return ((2.3 * (inchHeight - 60)) + 50)
        }
    };

    const idealKgFemale = () => {
        if (gender == 'Female') {
            return ((2.3 * (inchHeight - 60)) + 45.5)
        }
    };

    const bmi = () => {
        return (weight / (newHeight ** 2))
    };

    const bmiResult = () => {
        if (bmi() >= 0 && bmi() <= 18.4) {
            return <p><span className='bg-secondary text-white'>Zayıf.</span> <br />Kişinin boyuna oranla ağırlığının yetersiz olduğunu ifade eden bu değer ile karşılaşılması durumunda kişinin diyetisyen eşliğinde sağlıklı bir şekilde kilo alması önerilir.</p>
        }
        else if (bmi() >= 18.5 && bmi() <= 24.9) {
            return <p> <span className='bg-success text-white'>Normal</span> <br /> Bu değer aralığı kişinin ideal kiloda olduğunu gösterir. Bu değere sahip olan kişilerin düzenli, dengeli ve sağlıklı beslenmeye devam etmeleri önerilir.</p>
        }
        else if (bmi() >= 25 && bmi() <= 29.9) {
            return <p> <span className='bg-primary text-white'>Fazla Kilolu</span> <br />Kişinin boyuna oranla kilosunun fazla olduğunu gösteren bu değer aralığında kişinin uygun diyet ile fazla kilolarından kurtulması önerilir.</p>
        }
        else if (bmi() >= 30 && bmi() <= 34.9) {
            return <p><span className='bg-warning text-dark'>Şişman</span> <br />Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Birinci derece obez kategorisinde değerlendiren değer aralığında, kişinin kilosunun sağlık açısından risk oluşturabilecek düzeyde olduğu anlaşılır. Bu kişilerin diyetisyen yardımıyla kilo vermesi önerilir.</p>
        }
        else if (bmi() >= 35 && bmi() <= 44.9) {
            return <p><span className='bg-danger text-white'>Şişman</span><br />İkinci derece obez olarak tanımlanan bu değerlere sahip olan kişilerde kalp ve damar hastalıkları bakımından risk artar. Kişinin kilo vermek için diyetisyene başvurması önerilir.</p>
        }
        else if (bmi() > 45) {
            return <p><span className='bg-dark text-white'>Aşırı Şişman</span><br /> Üçüncü derece obez kategorisinde olan bu kişilerde hastalık gelişme riski çok yüksektir. Hekim ve diyetisyen eşliğinde kilo verilmesi önerilir.</p>
        }
    };


    // RESET BUTTON 
    const resetOnClick = () => {
        setPage(true)
        setGender("")
        setHeight([])
        setWeight([])
    };

    return (
        <section className="container">
            <div className="row">

                <div className='row'>
                    <div
                        className={
                            (bmi() >= 0 && bmi() <= 18.4) ? "border border-2 border-warning calculate d-flex" :
                                (bmi() >= 18.5 && bmi() <= 24.9) ? "border border-2 border-success calculate d-flex" :
                                    (bmi() >= 25 && bmi() <= 29.9) ? "border border-2 border-primary calculate d-flex" :
                                        (bmi() >= 30 && bmi() <= 34.9) ? "border border-2 border-dark calculate d-flex" :
                                            (bmi() > 35) ? "border border-2 border-danger calculate d-flex" : "border border-2 calculate d-flex"
                        }
                    >

                        <div className='col-8 mt-3 ms-2'>

                            <h3>
                                Gender: <span className={gender == "Male" ? 'calculate-result text-primary' : 'calculate-result text-danger'}>
                                    {
                                        gender == "" ? <span className='alert alert-danger fs-6' role="alert">"Error ! - Choose Gender"</span> : gender
                                    }</span>
                            </h3>

                            <h3>
                                Your Body Surface Area:
                                <span className='calculate-result text-success'>
                                    {
                                        height == "" ? <span className='alert alert-warning fs-5' role="alert">"Error ! - height is between 0-200"</span> : newHeight
                                    }
                                </span>
                            </h3>

                            <h3>
                                Your Body Weight:
                                <span className='calculate-result bg-dark text-warning rounded-circle'>
                                    <strong>
                                        {
                                            weight == "" ? <span className='alert alert-primary fs-6' role="alert">"Error ! - weight is between 0-200"</span> : weight
                                        }
                                    </strong>
                                </span>
                            </h3>

                            <h3>
                                Your Ideal Body Weight:
                                <span className='calculate-result bg-dark text-info rounded-circle fs-4'>
                                    {
                                        gender == "Male" ? Math.floor(idealKgMale()) : Math.floor(idealKgFemale())
                                    }
                                </span>
                            </h3>

                            <h3>
                                Your Body Mass Index (BMI):
                                <span className='calculate-result text-primary'>
                                    {
                                        bmi().toFixed(2)
                                    }
                                </span>
                            </h3>

                            <h3 className='mt-4'><mark>Calculation result:</mark>
                                <span className='calculate-result'>
                                    {
                                        bmiResult()
                                    }
                                </span>
                            </h3>


                            <button type='submit' className='btn btn-danger mb-3' onClick={() => resetOnClick()}>
                                Reset
                            </button>
                        </div>

                        <div className='col-4 call'>
                            <ul>
                                <h3 className='text-dark'>Yaş aralığına göre ise kişinin <span className='text-primary'>ideal vücut kitle indeksi</span> şu şekildedir:</h3>

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

                {/* alikartalonline footer  */}
                <Footer />

            </div>
        </section>
    )
}

export default Calculate;