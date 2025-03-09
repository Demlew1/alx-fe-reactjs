import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

const App = () => {
  return (
    <div>
      <h1>User Registration (Controlled Form)</h1>
      <RegistrationForm />

      <h1>User Registration (Formik Form)</h1>
      <FormikForm />
    </div>
  );
};

export default App;
