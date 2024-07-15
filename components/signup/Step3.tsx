import React from "react";
import Input from "../Input";
import { SignUpState } from "@/pages/onboarding";
import OnBoardingLayout from "../OnBoardingLayout";
import Button from "../Button";
import Checkbox from "./checkbox";
import { GoArrowLeft } from "react-icons/go";
import { FaUser, FaEnvelope, FaNotesMedical, FaPills, FaAllergies } from "react-icons/fa"

type Step3Props = {
  prev: () => void;
  submit: (e: React.FormEvent) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: SignUpState;
};

const Step3: React.FC<Step3Props> = ({ prev, submit, change, state }) => {
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
        <h2 className="text-2xl font-bold mb-4">Step 3: Review Information</h2>
        <form onSubmit={submit}>
          <Input
            label="First Name"
            name="first_name"
            value={state.first_name}
            change={change}
            placeholder="Enter your first name"
            readOnly
            icon={<FaUser className="text-[gray]" />}
          />
          <Input
            label="Last Name"
            name="last_name"
            value={state.last_name}
            change={change}
            placeholder="Enter your last name"
            readOnly
            icon={<FaUser className="text-[gray]" />}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={state.email}
            change={change}
            placeholder="Enter your email"
            readOnly
            icon={<FaEnvelope className="text-[gray]" />}
          />
          <Input
            label="Medical Condition"
            name="medical_condition"
            value={state.medical_condition}
            change={change}
            placeholder="Enter your medical condition"
            readOnly
            icon={<FaNotesMedical  className="text-[gray]"/>}
          />
          <Input
            label="Medication"
            name="medication"
            value={state.medication}
            change={change}
            placeholder="Enter your medication"
            readOnly
            icon={<FaPills  className="text-[gray]"/>}
          />
          <Input
            label="Allergies"
            name="allergies"
            value={state.allergies}
            change={change}
            placeholder="Enter your allergies"
            readOnly
            icon={<FaAllergies className="text-[gray]" />}
          />
          <Checkbox
            name="agree_to_terms"
            value={state.agree_to_terms ? "yes" : "no"}
            id="agree_to_terms"
            label="Agree to Terms"
            handleChange={change}
          />
          <div className="flex justify-between mt-4">
            <Button
              intent="primary"
              type="submit"
              action={undefined}
              size="bg"
              text="Submit"
              isLoading={false}
            />
          </div>
        </form>
      </div>
    </OnBoardingLayout>
  );
};

export default Step3;
