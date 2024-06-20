import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ImSpinner9 } from "react-icons/im";
import wailist_img from '../../assets/images/waitlist.png';
import tick from '../../assets/images/tick.png';
import Model from '../ui/Model';


function WaitList() {

const [isLoading, setIsLoading] = useState(false);
const [revealModal, setRevealModal] = useState(false);

// form data states
const [formData, setFormData] = useState({
  name: "",
  phoneNumber: "",
  email: "",
  city: "",
})

// form error states
const [errors, setErrors] = useState({
  name: "",
  phoneNumber: "",
  email: "",
  city: "",
});

// function for handling change in input state
const handleChange = e => {
  const { name, value } = e.target;
  

  setFormData({
    ...formData,
    [name]: value
  })

  setErrors({
    ...errors,
    [name]: ''
  })

}

// email checker
const checkEmail = email =>{
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

// Validation function
const validateForm = ()=>{
  const newErrors = {}
  
  if (formData.name.trim() === '') {
    newErrors.name = 'Full Name is required!'
  }
 
  if (formData.phoneNumber.trim() === '') {
    newErrors.phoneNumber = 'Phone number is required!'
  }
  if (formData.city.trim() === '') {
    newErrors.city = 'City is required!'
  }
  
  if (formData.email.trim() === '') {
    newErrors.email = 'Email is required!'
  }else {
    // check email format if the email field is not empty
    const emailValidity = checkEmail(formData.email);
    if (!emailValidity) {
      newErrors.email = "Email is in a wrong format!";
    }
  }
  
  //check for errors
  if (Object.values(newErrors).some(error => error !== '')) {
    setErrors(newErrors);
    return false;
  } else{
    return true;
  }
}

// post form data to server
const handleRegistration = async (endpoint, data) => {
  try {
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error) {
    return { error: true, message: error.message };
  }
}

const handleFormSubmission = async (e) =>{
  e.preventDefault();


  if(validateForm()){
    const endpoint = 'https://mg-axeone-email-api.onrender.com/api/v1/send-email';
    setIsLoading(true);
    const result = await handleRegistration(endpoint, formData);

    if(result.error){
      setIsLoading(false);
      toast.error(result.message, {position: "top-right"});
    }else{
      setIsLoading(false);
      setRevealModal(true);
      // Clear form data after successful submission
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        city: "",
      });
    }
  }
}

const handleRevealModal = ()=> {
  setRevealModal(false);
}
  
  return (
    <section id="waitlist" className="bg-secondary flex flex-col sm:items-center md:flex-row md:items-start md:justify-evenly gap-16 py-24 px-4 sm:px-5 md:px-6 lg:px-16">
        <div className="md:max-w-[30%] flex flex-col gap-2 ">
          <h2 className="text-black font-poppins text-2xl md:text-3xl font-semibold uppercase">We&#39;d Love to Hear From You</h2>
          <p className="text-black text-opacity-70 font-roboto text-lg font-normal ">Complete Your Details to Stay Connected</p>
          <div className='w-full max-w-[14rem] mt-4 sm:self-center md:self-start'>
            <img src={wailist_img} alt="waitlist illustration" className='w-full h-full object-cover' />
          </div>
        </div>

        {/* form */}
        <form onSubmit={handleFormSubmission} method="post" className="w-full sm:max-w-[30rem] flex flex-col items-center gap-4">
          <h3 className="text-black font-poppins text-lg font-medium capitalize self-start sm:self-center md:self-start">Start Connecting Now</h3>

          {/* full name */}
          <div className='w-full'>
            <input onChange={handleChange} value={formData.name} className="bg-primary border border-black border-opacity-60 border-solid rounded-lg px-2 py-3 w-full outline-none text-black text-opacity-80" type="text" name="name" placeholder="Full Name"  />
            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
          </div>

          {/* phone number */}
          <div className='w-full'>
            <input onChange={handleChange} value={formData.phoneNumber} className="bg-primary border border-black border-opacity-60 border-solid rounded-lg px-2 py-3 w-full outline-none text-black text-opacity-80" type="tel" name="phoneNumber" placeholder="phone"  />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-2">{errors.phoneNumber}</p>}
          </div>
          
          {/* email */}
          <div className='w-full'>
            <input onChange={handleChange} value={formData.email} className="bg-primary border border-black border-opacity-60 border-solid rounded-lg px-2 py-3 w-full outline-none text-black text-opacity-80" type="email" name="email" placeholder="Email address"  />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
          </div>

          {/* city */}
          <div className='w-full'>
            <input onChange={handleChange} value={formData.city} className="bg-primary border border-black border-opacity-60 border-solid rounded-lg px-2 py-3 w-full outline-none text-black text-opacity-80" type="text" name="city" placeholder="city"  />
            {errors.city && <p className="text-red-500 text-sm mt-2">{errors.city}</p>}
          </div>
         
          <button type="submit" name="newsletter_btn" className="w-full flex justify-center items-center bg-accent hover:bg-accentDark transition-all duration-300 text-primary font-poppins font-medium text-base sm:text-lg md:text-xl rounded-lg py-3 px-4">
            {isLoading ? <ImSpinner9 className="animate-spin text-center" size={22} /> : "Join"}
          </button>
        </form>
        {revealModal && 
          <Model 
            src={tick} 
            modalTitle="Contact successfully sent" 
            modalDescription="Thank you for reaching out Your details have been received and we'll get back to you soon." 
            btnTitle="Close"
            btnAction={handleRevealModal}
          /> 
        }
    </section>
  )
}

export default WaitList;