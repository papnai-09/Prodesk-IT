const Step1 = ({ register, errors }) => {
  return (
    <div>
      <h2>Personal Info</h2>

      <input
        type="text"
        placeholder="First Name"
        {...register("firstName")}
      />

      <p className="error">
        {errors.firstName?.message}
      </p>

      <input
        type="text"
        placeholder="Last Name"
        {...register("lastName")}
      />

      <p className="error">
        {errors.lastName?.message}
      </p>

      <input
        type="date"
        {...register("dob")}
      />

      <p className="error">
        {errors.dob?.message}
      </p>
    </div>
  );
};

export default Step1;
