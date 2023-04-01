import React from "react";

const FormOne = () => {
  const [formdata, setformdata] = React.useState({
    email: "",
    password: "",
    confirmpwd: "",
    isChecked: true,
  });

  function handleChange(event) {
    const { name, type, checked, value } = event.target;
    setformdata((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formdata.password === formdata.confirmpwd) {
      console.log("Successfully signed up");
    } else {
      console.log("password do not match");
      return;
    }
    if (formdata.isChecked) {
      console.log("Thanks for signing up for news letter");
    }
  }

  return (
    <div className="container9">
      <form className="form9" onSubmit={handleSubmit}>
        <span className="input">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmpwd"
            value={formdata.confirmpwd}
            onChange={handleChange}
          />
        </span>
        <input
          type="checkbox"
          className="checkbox9"
          name="isChecked"
          checked={formdata.isChecked}
          onChange={handleChange}
        />
        <label htmlFor="checked">I want to receive news letter</label>
        <button className="button9">submit</button>
      </form>
    </div>
  );
};

export default FormOne;
