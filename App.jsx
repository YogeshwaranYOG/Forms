import "./App.css";
import { useFormik, Formik, Form, Field } from "formik";
import { signupValidation } from "./signupValidation";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};

function App() {
  // const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: signupValidation,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });
  return (
    <div className="App">
      <Formik initialValues={initialValues} validationSchema={signupValidation}>
        {({ errors }) => (
          // onSubmit={handleSubmit}
          <Form>
            <label htmlFor="name">Name</label>
            <br />
            {/* <input
            type="text"
            name="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          /> */}
            <Field type="text" name="name"></Field>
            <br />
            {errors.name && <small>{errors.name}</small>}
            <br />

            <label htmlFor="email">Email</label>
            <br />
            {/* <input
            type="email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          /> */}
            <Field type="email" name="email"></Field>
            <br />
            {errors.email && <small>{errors.email}</small>}
            <br />

            <label htmlFor="password">Password</label>
            <br />
            {/* <input
            type="password"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          /> */}
            <Field type="password" name="password"></Field>
            <br />
            {errors.password && <small>{errors.password}</small>}
            <br />

            <label htmlFor="confirmpassword">Confirm Password</label>
            <br />
            {/* <input
            type="password"
            name="confirmpassword"
            value={values.confirmpassword}
            onBlur={handleBlur}
            onChange={handleChange}
          /> */}
            <Field type="password" name="confirmpassword"></Field>
            <br />
            {errors.confirmpassword && <small>{errors.confirmpassword}</small>}
            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
