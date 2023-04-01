import React from "react";
import "./App.css";
import FormOne from "./component9/formone";

const AppFive = () => {
  //   const [firstname, setFirstname] = React.useState("");
  //   const [lastname, setLastname] = React.useState("");
  //   console.log(firstname, lastname);

  // const [formdata, setformdata] = React.useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   textarea: "",
  //   isTrue: true,
  //   employement: "",
  //   selectColor: "",
  // });
  //   function handlechanefirstname(event) {
  //     console.log(event.target.value);
  //     setFirstname(event.target.value);
  //   }
  //   function handlechanelastname(event) {
  //     console.log(event.target.value);
  //     setLastname(event.target.value);
  //   }
  // the use of form state object
  // console.log(formdata.selectColor);
  // function handlechange(event) {
  //   const { name, type, value, checked } = event.target;
  //   setformdata((prev) => {
  //     return {
  //       ...prev,
  //       [name]: type === "checkbox" ? checked : value,
  //     };
  //   });
  // }

  // function handlesubmit(event) {
  //   event.preventDefault();
  //   console.log(formdata);
  // }
  return (
    // <div>
    //   <form onSubmit={handlesubmit}>
    //     <label>firstname</label>
    //     <input
    //       type="text"
    //       className="firstname_el8"
    //       onChange={handlechange}
    //       //   onChange={handlechanefirstname}
    //       name="firstname"
    //       value={formdata.firstname}
    //     />
    //     <label>lastname</label>
    //     <input
    //       type="text"
    //       className="lastname_el8"
    //       name="lastname"
    //       onChange={handlechange}
    //       value={formdata.lastname}
    //       //   onChange={handlechanelastname}
    //     />
    //     <label>email</label>
    //     <input
    //       type="email"
    //       className="email_8"
    //       name="email"
    //       onChange={handlechange}
    //       value={formdata.email}
    //       //   onChange={handlechanelastname}
    //     />
    //     <textarea
    //       type="textarea"
    //       value={formdata.textarea}
    //       className="textarea_8"
    //       onChange={handlechange}
    //       name="textarea"
    //     />

    //     <input
    //       type="checkbox"
    //       className="checkbox_8"
    //       checked={formdata.isTrue}
    //       onChange={handlechange}
    //       id="checkbox"
    //       name="isTrue"
    //       //   onChange={handlechanelastname}
    //     />
    //     <label htmlFor="checkbox">I already have an account</label>
    //     <fieldset>
    //       <legend>current employee status</legend>
    //       <input
    //         type="radio"
    //         id="unemployed"
    //         value="unemployed"
    //         name="employement"
    //         checked={formdata.employement === "unemployed"}
    //         onChange={handlechange}
    //       />
    //       <label htmlFor="unemployed">unemployed</label>
    //       <input
    //         type="radio"
    //         id="part-time"
    //         value="part-time"
    //         name="employement"
    //         checked={formdata.employement === "part-time"}
    //         onChange={handlechange}
    //       />
    //       <label htmlFor="part-time">part time</label>
    //       <input
    //         type="radio"
    //         id="employed"
    //         value="employed"
    //         name="employement"
    //         onChange={handlechange}
    //         checked={formdata.employement === "employed"}
    //       />
    //       <label htmlFor="employed">employed</label>
    //     </fieldset>
    //     <select
    //       name="selectColor"
    //       value={formdata.selectColor}
    //       onChange={handlechange}
    //     >
    //       <option value="">---choose---</option>
    //       <option value="red">red</option>
    //       <option value="blue">blue</option>
    //       <option value="green">green</option>
    //       <option value="yellow">yellow</option>
    //       <option value="purple">purple</option>
    //     </select>
    //     <button>submit</button>
    //   </form>
    // </div>
    <>
      <FormOne />
    </>
  );
};

export default AppFive;
