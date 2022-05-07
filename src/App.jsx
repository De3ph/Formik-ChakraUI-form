import "./App.css";
import { useFormik } from "formik";

import * as Yup from "yup";

const colorPalette = [
  "red",
  "green",
  "blue",
  "yellow",
  "black",
  "purple",
  "pink",
  "white",
];

const validationSchema = Yup.object({
  name: Yup.string().required("İsim kısmı boş bırakılamaz"),
  email: Yup.string()
    .email("Geçerli bir email adresi giriniz")
    .required("Email kısmı boş bırakılamaz"),
  agree: Yup.boolean().required(
    "Lütfen kullanım koşullarını kabul ediniz."
  ),
  favouriteColor: Yup.string()
    .required("Lütfen favori renginizi seçiniz.")
    .oneOf(colorPalette)
})

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      agree: false,
      favouriteColor: "",
    },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      form.reset()
    },
    
  });

  return (
    <div className="App">
      <div className="container">
        <div className="brand-box">
          <h1>Magic form</h1>
          <p>Build forms in React without the tears</p>
        </div>
        <div className="magic-form">
          <form name="form" onSubmit={formik.handleSubmit} >
            <label htmlFor="name">İsim</label>
            <input
              type="text"
              name="name"
              placeholder="Can"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.dirty.name || formik.errors.name ? (
         <div>{formik.errors.name}</div>
       ) : null}

            <br />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.dirty.email || formik.errors.email ? formik.errors.email : null}
            <br />

            <label htmlFor="favouriteColor">Favori Renk</label>
            <select
              name="favouriteColor"
              value={formik.values.favouriteColor}
              onChange={formik.handleChange}
            >
              <option value="" label="Renginizi seçin"></option>
              {colorPalette.map((color) => {
                return <option value={color} label={color}></option>;
              })}
            </select>
            {formik.dirty.favouriteColor || formik.errors.favouriteColor ? formik.errors.favouriteColor : null}
            <br />

            <label htmlFor="checkbox">Sözleşme</label>
            <div>
              <input
                type="checkbox"
                name="checkbox"
                value={formik.values.agree}
                onChange={formik.handleChange}
              />
            </div>
            {formik.dirty.checkbox || formik.errors.checkbox ? formik.errors.checkbox : null}
            <br />

            <button type="submit" disabled={!formik.dirty || formik.isSubmitting}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
