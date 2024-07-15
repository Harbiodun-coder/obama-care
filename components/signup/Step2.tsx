import React, { useState } from "react";
import Input from "../Input";
import { SignUpState } from "@/pages/onboarding";
import OnBoardingLayout from "../OnBoardingLayout";
import Button from "../Button";
import { GoArrowLeft } from "react-icons/go";
import { FaNotesMedical, FaPills, FaAllergies } from "react-icons/fa";

type Step2Props = {
  prev: () => void;
  next: (e: React.FormEvent) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: SignUpState;
};

const Step2: React.FC<Step2Props> = ({ prev, next, change, state }) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    // Add validation if necessary for Step 2 fields
    if (!state.medical_condition) newErrors.medical_condition = "Medical condition is required";
    if (!state.medication) newErrors.medication = "Medication is required";
    if (!state.allergies) newErrors.allergies = "Allergies are required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      next(e);
    }
  };

  return (
    <OnBoardingLayout>
      <div className="p-4">
        <div className="flex p-4 gap-4">
            
      <GoArrowLeft 
              onClick={prev}
              className="text-gray-600 cursor-pointer text-2xl hover:text-gray-700"
            />
            <div className="">Go Back</div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Step 2: Medical Information</h2>
        <form onSubmit={handleNextStep}>
          <Input
            label="Medical Condition"
            name="medical_condition"
            value={state.medical_condition}
            change={change}
            placeholder="Enter your medical condition"
            required
            icon={<FaNotesMedical className="text-[gray]" />}
          />
          {errors.medical_condition && <p className="text-red-500">{errors.medical_condition}</p>}
          <Input
            label="Medication"
            name="medication"
            value={state.medication}
            change={change}
            placeholder="Enter your medication"
            required
            icon={<FaPills className="text-[gray]"/>}
          />
          {errors.medication && <p className="text-red-500">{errors.medication}</p>}
          <Input
            label="Allergies"
            name="allergies"
            value={state.allergies}
            change={change}
            placeholder="Enter your allergies"
            required
            icon={<FaAllergies className="text-[gray]" />}
          />
          {errors.allergies && <p className="text-red-500">{errors.allergies}</p>}
          <div className="mt-4 items-center">
           
            <Button
              intent="primary"
              type="submit"
              action={undefined}
              size="bg"
              text="Next"
              isLoading={false}
            />
          </div>
        </form>
      </div>
    </OnBoardingLayout>
  );
};

export default Step2;
