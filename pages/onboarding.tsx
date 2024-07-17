import React, { useState } from "react";
import Step1 from "../components/signup/Step1";
import Step2 from "../components/signup/Step2";
import Step3 from "../components/signup/Step3";
import { useRouter } from "next/router";

export type SignUpState = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  country: string;
  role: string;
  agree_to_terms: boolean;
};


const Signup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  const [state, setState] = useState<SignUpState>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    role: "",
    agree_to_terms: false,
  });

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(state);
    // Perform the submission logic, e.g., API call
  };

  const handleLoginClick = () => {
    router.push("/login"); // Redirect to the login page
  };

  return (
    <div className="p-0 h-fit">
      {currentStep === 0 && (

          <Step1 next={handleNextStep} change={handleChange} state={state} />
          
        
      )}
      {currentStep === 1 && (
        <Step2
          prev={handlePreviousStep}
          next={handleNextStep}
          change={handleChange}
          state={state}
        />
      )}
      {currentStep === 2 && (
        <Step3
          prev={handlePreviousStep}
          submit={handleSubmit}
          change={handleChange}
          state={state}
        />
      )}
    </div>
  );
};

export default Signup;
