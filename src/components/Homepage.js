import React from 'react';
import { useFormik, Field } from 'formik';

function Homepage() {
  const formik = useFormik({
    initialValues: {
      gender: '',
      height: '',
      weight: '',
    },
    onSubmit: async (values, bag) => {
      console.log("values :", values)
      try {
        console.log(values);
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

        <div className="col-12 bmi">

          <form onSubmit={formik.handleSubmit}>

            <div className="f-flex">

              {/* MALE - FEMALE */}
              <div className="col-12 d-flex mt-3">
                <div className="col"></div>

                <h3>Gender: </h3>

                <div className='ms-3'>
                  <div className=' form-check' >
                    <input class="form-check-input" type="radio" name="gender" value="male" id="flexRadioDefault1"
                      onChange={formik.handleChange}
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gender" value="female" id="flexRadioDefault2" 
                      onChange={formik.handleChange}
                    
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                </div>

                <div className="col"></div>
              </div>



              {/* height  */}
              <div className='col-12 d-flex mt-2'>
                <div className='col'></div>

                <h3>enter your height: </h3>
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

                <div className='col'></div>
              </div>


              {/* weight  */}
              <div className='col-12 d-flex mt-2'>
                <div className='col'></div>

                <h3>enter your weight: </h3>
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

                <div className='col'></div>
              </div>


              {/* BUTTON*/}
              <div className='col-12 d-flex mt-1'>
                <div className='col'></div>

                <div className=" col-1">
                  <button
                    type="submit"
                    className="privacy-button"
                  >
                    Devam
                  </button>
                </div>

                <div className='col'></div>
              </div>


            </div>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Homepage;
