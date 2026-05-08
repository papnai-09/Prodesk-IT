import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "./schema";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Success from "./components/Success";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [step, setStep] = useState(1);

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: {
      errors,
      isValid,
    },
  } = useForm({
    resolver: zodResolver(formSchema),

    mode: "onChange",

    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const data = watch();

  const nextStep = async () => {
    let fields = [];

    if (step === 1) {
      fields = [
        "firstName",
        "lastName",
        "dob",
      ];
    }

    if (step === 2) {
      fields = [
        "email",
        "password",
        "confirmPassword",
      ];
    }

    const valid = await trigger(fields);

    if (valid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onSubmit = (data) => {
    console.log(
      "Final Submitted Data:",
      data
    );

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container">
        <Success />
      </div>
    );
  }

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <ProgressBar step={step} />

        {step === 1 && (
          <Step1
            register={register}
            errors={errors}
          />
        )}

        {step === 2 && (
          <Step2
            register={register}
            errors={errors}
          />
        )}

        {step === 3 && (
          <Step3 data={data} />
        )}

        <div className="buttons">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
            >
              ← Back
            </button>
          )}

          {step < 3 && (
            <button
              type="button"
              onClick={nextStep}
              disabled={
                (step === 1 &&
                  (!data.firstName ||
                    !data.lastName ||
                    !data.dob)) ||
                (step === 2 &&
                  (!data.email ||
                    !data.password ||
                    !data.confirmPassword))
              }
            >
              Next →
            </button>
          )}

          {step === 3 && (
            <button
              type="submit"
              disabled={!isValid}
            >
              Submit 🚀
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;