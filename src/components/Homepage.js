import React, { useState } from 'react';
import { useFormik } from 'formik';

function Homepage({ setPage, setGender, setWeight, setHeight, height, weight }) {

  const [gifs, setGifs] = useState("gif1")

  const changeGif = () => {
    if (gifs == "gif1") {
      setTimeout(() => {
        setGifs("gif2")
      }, 4000)
    } else if (gifs == "gif2") {
      setTimeout(() => {
        setGifs("gif1")
      }, 4000)
    }
  }


   const formik = useFormik({
    initialValues: {
      gender: '',
      height: '',
      weight: '',
    },
    onSubmit: async (values, bag) => {
      // console.log("values :", values)
      // console.log("BAG :", bag)

      const heightAlert = () => {
        if (values.height >= 0 && values.height <= 200) {
          return setHeight(values.height)
        }
        else {
          return false ^ (alert("hata height"))
        }
      }

      const weightAlert = () => {
        if (values.weight >= 0 && values.weight <= 200) {
          return setWeight(values.weight)
        }
        else {
          return false ^ alert("hata weight");
        }
      }

      try {
        heightAlert()
        weightAlert()
        setGender(values.gender)
        bag.resetForm() // inputlardan ayrılınca, formu resetlemek içün

        // setHeight(values.height)
        // setWeight(values.weight)
      } catch (e) {
        bag.setErrors({ general: e.response.data.message });
        console.log('errors :', e);
      }
    },
  });
  // values: Form'daki datalar,
  // bag: O form üzerinde yapabileceğimiz bir takım işlemler var,
  // onları bize sağlıyor; örneğin formu resetlemek gibi  


   return (
    <section className="container">
      <div className="row">

        <div className="col-8 bmi">
          <form onSubmit={formik.handleSubmit}>

            {/* MALE - FEMALE */}
            <div className=" d-flex mt-5 ms-5" >

              <h3 className='pt-2 col-5 ' >Gender: </h3>

              <div className='ms-5'>
                <div className=' form-check' >
                  <input className="form-check-input" type="radio" name="gender" value="Male" id="flexRadioDefault1"
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" value="Female" id="flexRadioDefault2"
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Female
                  </label>
                </div>
              </div>

            </div>



            {/* height  */}
            <div className='col d-flex mt-3 ms-5'>

              <h3 className='pt-3 col-6'>Enter Your Height: </h3>
              <div className="form-floating mt-2 col-4" >
                <input
                  type="number"
                  className="form-control"
                  name='height'
                  placeholder="height"
                  onChange={formik.handleChange} // Bir değişiklik olduğunda formik.handleChange çağrılır.
                  onBlur={formik.handleBlur} // input'tan ayrılırsa eğer handleBlur verilebilir.
                  value={formik.values.height} // Formik değerleri burada kullanılabilir.
                />

                <label htmlFor="floatingInput">height</label>
              </div>

              <div className='col ms-2 cm'>cm (Örn. 180)</div>
            </div>


            {/* weight  */}
            <div className='col d-flex mt-3 ms-5'>

              <h3 className='pt-3 col-6'>Enter Your Weight: </h3>
              <div className="form-floating mt-2 col-4" >
                <input
                  type="number"
                  className="form-control"
                  name='weight'
                  placeholder="weight"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.weight}
                />

                <label htmlFor="floatingInput">weight</label>
              </div>

              <div className='col ms-2 cm'>kg (Örn. 70) </div>
            </div>


            {/* BUTTON*/}
            <div className='col d-flex mt-5'>
              <button
                type='submit'
                className='btn btn-primary'
                style={{ marginLeft: "70%" }}
                onClick={() => setPage(false)}
              >Calculate</button>
            </div>

          </form>


        </div>

        {/* GIFS content */}
        <div className='col-1'></div>
        <div className='col-4'>
          {/* <img src="/assets/bmi.jpg" alt="bmi" height={600} width={800} /> */}
          {
            changeGif()
          }
          {
            gifs == "gif1" ?
              <img src="/assets/w1.gif" alt="bmi"
                height={430} width={400} /> : <img src="/assets/h1.gif" alt="bmi"
                  height={430} width={400}
              />
          }
        </div>



      </div>
    </section>
  );
}

export default Homepage;
