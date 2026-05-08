import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

const Step2 = ({ register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2>Account Details</h2>

      <input
        type="email"
        placeholder="Email"
        {...register("email")}
      />

      <p className="error">
        {errors.email?.message}
      </p>

      <div className="password-box">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          {...register("password")}
        />

        <span onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <p className="error">
        {errors.password?.message}
      </p>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />

      <p className="error">
        {errors.confirmPassword?.message}
      </p>
    </div>
  );
};

export default Step2;