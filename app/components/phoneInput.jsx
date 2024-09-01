"use client"
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CustomPhoneInput = () => {
    const [phone, setPhone] = useState("");

  const handleChange = (value) => {
    setPhone(value);
  };
  return (
   <>
    <div className="flex items-center custom-phone ">
      <PhoneInput
        country={'us'}
        value={phone}
        onChange={handleChange}
        inputClass="border-none outline-none focus:outline-none text-lg w-full"
        buttonClass="country-selector"
        containerClass="intl-tel-input w-full"
        dropdownClass="country-dropdown"
        placeholder="Phone Number"
        enableSearch={true}  // Enable search for better UX
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true,
        }}
      />
    </div>
   </>
  )
}

export default CustomPhoneInput