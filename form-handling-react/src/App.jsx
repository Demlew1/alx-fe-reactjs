import RegistrationForm from "./Components/RegistrationForm";
import FormikForm from "./Components/FormikForm";

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
