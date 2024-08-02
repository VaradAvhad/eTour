import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import {
   MDBBtn,
   MDBContainer,
   MDBRow,
   MDBCol,
   MDBIcon,
   MDBInput,
} from "mdb-react-ui-kit";

function FormExample() {
   const states = [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Delhi",
      "Ladakh",
      "Lakshadweep",
      "Puducherry",
   ];
   const [customer, setCustomer] = useState({
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      mobile: "",
      password: "",
      username: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
   });

   const [validated, setValidated] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [showPopup, setShowPopup] = useState(false);
   const [showConfirmBox, setShowConfirmBox] = useState(false);
   const navigate = useNavigate();

   const handleSubmit = async (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
      }

      setValidated(true);
      try {
         const response = await fetch("http://localhost:8080/customer", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(customer),
         });
         console.log(customer);
         if (!response.ok) {
            const data = await response.json();
            throw new Error(data);
         }

         // Reset the form and state after successful submission
         form.reset();
         setValidated(false);
         setErrorMessage("");
         setShowPopup(false);
         setShowConfirmBox(true);
         // Handle success response
         console.log("Form submitted successfully");
      } catch (error) {
         console.error("Error submitting form:", error);
         setErrorMessage("User Already exists!");
         // Handle error response
      }
   };
   const handleChange = (e) => {
      const { name, value } = e.target;
      setCustomer({
         ...customer,
         [name]: value,
      });
   };
   const handleLogin = () => {
      navigate("/login");
   };
   const handleCheckboxChange = (e) => {
      setShowPopup(e.target.checked);
   };

   const handleAgree = () => {
      setShowPopup(false);
   };

   return (
      <div style={{ margin: "10px", justifyContent: "center" }}>

         <Form noValidate validated={validated}
            style={{
               padding: "3%",
               height: "50%",
               border: "3px solid black",
               justifyContent: "center",
            }}
            onSubmit={handleSubmit}
         >
            <div style={{display:"flex", justifyContent:"space-between"}}>
               <h1 style={{ marginBottom: "20px", textAlign: "center" }}>Register User</h1>
               <MDBIcon>
                  {" "}
                  <img
                     src="https://the7tours.net/wp-content/uploads/2023/07/7-tours-logo-1024x453.png"
                     alt=""
                     style={{ width: "150px", height: "auto", marginRight: "10px" }}
                  />
               </MDBIcon>
            </div>
            <Row className="mb-2">
               <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                     required
                     type="text"
                     placeholder="First name"
                     name="firstname"
                     onChange={handleChange}
                  />
                  <Form.Control.Feedback>Valid</Form.Control.Feedback>
               </Form.Group>

               <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                     required
                     type="text"
                     placeholder="Last name"
                     name="lastname"
                     onChange={handleChange}
                  />
                  <Form.Control.Feedback>Valid</Form.Control.Feedback>
               </Form.Group>
            </Row>

            <Row>
               <Form.Group as={Col} md="4" controlId="formGridGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                     defaultValue="Choose..."
                     name="gender"
                     onChange={handleChange}
                  >
                     <option>Select</option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     <option value="other">other</option>
                  </Form.Select>
               </Form.Group>

               <Form.Group as={Col} md="4" controlId="formGridDate">
                  <Form.Label>Date Of Birth</Form.Label>
                  <Form.Control
                     type="date"
                     placeholder="Enter date of birth"
                     name="dateofbirth"
                     onChange={handleChange}
                  />
               </Form.Group>
            </Row>

            <Row className="mb-2">
               <Form.Group as={Col} md="4" controlId="formGridEmail">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control
                     required
                     type="text"
                     placeholder="Enter username"
                     name="username"
                     onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                     Please enter Username.
                  </Form.Control.Feedback>
               </Form.Group>

               <Form.Group as={Col} md="4" controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                     required
                     type="password"
                     placeholder="Password"
                     name="password"
                     onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                     Please enter Passwprd.
                  </Form.Control.Feedback>
               </Form.Group>
            </Row>

            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
               <Form.Label>Email</Form.Label>
               <Form.Control
                  type="email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  required
                  name="email"
                  onChange={handleChange}
               />
               <Form.Control.Feedback type="invalid">
                  Please enter email.
               </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formGridAddress1">
               <Form.Label>Address</Form.Label>
               <Form.Control
                  required
                  placeholder="1234 Main St"
                  name="address"
                  onChange={handleChange}
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
               <Form.Label>Mobile</Form.Label>
               <Form.Control
                  required
                  placeholder="Enter 10 digit number"
                  name="mobile"
                  onChange={handleChange}
               />
            </Form.Group>

            <Row className="mb-3">
               <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control required name="city" onChange={handleChange} />
               </Form.Group>

               <Form.Group as={Col} md="4" controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select
                     defaultValue="Choose..."
                     name="state"
                     onChange={handleChange}
                  >
                     <option>Choose...</option>
                     {states.map((state, index) => (
                        <option key={index}>{state}</option>
                     ))}
                  </Form.Select>
               </Form.Group>

               <Form.Group as={Col} md="4" controlId="formGridZip">
                  <Form.Label>Pincode</Form.Label>
                  <Form.Control required name="pincode" onChange={handleChange} />
               </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
               <Form.Check
                  type="checkbox"
                  label="I agree to the Terms and Conditions"
                  onChange={handleCheckboxChange}
               />
            </Form.Group>
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <Button variant="primary" type="submit">
               Submit
            </Button>
            <p className="ms-5" style={{ marginTop: "5px" }}>
               Already have an account?{" "}
               <a href="/login" class="link-info">
                  Login here
               </a>
            </p>
         </Form>
      </div>

   );
}

export default FormExample;