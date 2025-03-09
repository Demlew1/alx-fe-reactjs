import { useState } from "react";
function RegistrationForm() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  function validateForm() {
    const newErrors = {};
    if (!formValue.name) newErrors.name = "Name is required";
    if (!formValue.email) newErrors.email = "Email is required";
    if (!formValue.password) newErrors.password = "Password is required";
    return newErrors;
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    const validationErrors = validateForm();
    e.preventDefault();
    if (Object.keys(validationErrors).length === 0) console.log(formValue);
    setError(validationErrors);
    setFormValue({
      name: "",
      email: "",
      passWord: "",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={formValue.name}
            name="name"
            type="text"
            placeholder="Your Name"
          />
          {error.name && <p>{error.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={formValue.email}
            name="email"
            type="text"
            placeholder="example@gmail.com"
          />
          {error.email && <p>{error.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={formValue.passWord}
            name="password"
            type="password"
            placeholder="Your Password"
          />
          {error.password && <p>{error.password}</p>}
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
