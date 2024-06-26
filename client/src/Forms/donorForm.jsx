import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function DonationForm() {
  const [userType, setUserType] = useState("donor"); // Default to donor

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="bg-[#d7f3f4] min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl mb-4 font-medium">Donation Form</h2>
      <div className="flex items-center mb-4">
        <label className="mr-2">
          <input
            type="radio"
            value="donor"
            checked={userType === "donor"}
            onChange={handleUserTypeChange}
            className="mr-1"
          />
          Donor
        </label>
        <label>
          <input
            type="radio"
            value="recipient"
            checked={userType === "recipient"}
            onChange={handleUserTypeChange}
            className="mr-1"
          />
          Recipient
        </label>
      </div>

      {userType === "donor" && <DonorForm />}
      {userType === "recipient" && <RecipientForm />}

      <button
        onClick={handleSubmit}
        className="bg-[#5eead4] hover:bg-white text-black font-medium py-2 px-4 rounded mt-4"
      >
        Submit
      </button>
    </div>
  );
}

function DonorForm() {
  const backendUrl = "http://localhost:3001";
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {setSignupData} = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    ownerName: "",
    contactNo: "",
    city: "",
    productDetails: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitHandler = async (event) => {
    try {
      if (
        !formData.ownerName ||
        !formData.contactNo ||
        !formData.city ||
        !formData.productDetails
      ) {
        toast.error("Please fill all the fields");
        return;
      }

      event.preventDefault();
      const response = await fetch(`${backendUrl}/donor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);

      if (data.success === true) {
        toast.success("OTP has been sent to your email id");
        navigate("/verify-email");
      } else {
        console.log("Checking this statement");
        toast.error("Account already exists with this email id");
        return;
      }
    } catch (err) {
      console.error(err);
      console.log("Error in signup submit handler");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-96">
      <h3 className="text-lg mb-4 text-center font-normal">
        Donor Information
      </h3>
      <div className="mb-4">
        <label className="block mb-1">Name:</label>
        <input
          type="text"
          className="w-full border rounded px-2 py-1"
          name="ownerName"
          value={formData.ownerName}
          onChang
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Contact No.:</label>
        <input type="text" className="w-full border rounded px-2 py-1" />
      </div>

      <div className="mb-4">
        <label className="block mb-1">City:</label>
        <textarea className="w-full border rounded px-2 py-1"></textarea>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Product Details:</label>
        <textarea className="w-full border rounded px-2 py-1"></textarea>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Upload Image:</label>
        <input type="file" className="border" />
      </div>
    </div>
  );
}

function RecipientForm() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-96">
      <h3 className="text-lg mb-4 text-center font-normal">
        Recipient Information
      </h3>
      <div className="mb-4">
        <label className="block mb-1">Name:</label>
        <input type="text" className="w-full border rounded px-2 py-1" />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Contact No.:</label>
        <input type="text" className="w-full border rounded px-2 py-1" />
      </div>

      <div className="mb-4">
        <label className="block mb-1">City:</label>
        <input type="text" className="w-full border rounded px-2 py-1" />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Annual Income:</label>
        <input type="text" className="w-full border rounded px-2 py-1" />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Why do you need the product?</label>
        <textarea className="w-full border rounded px-2 py-1"></textarea>
      </div>
    </div>
  );
}

export default DonationForm;
