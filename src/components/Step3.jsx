const Step3 = ({ data }) => {
  return (
    <div>
      <h2>Review Details</h2>

      <div className="review-box">
        <p>
          <strong>First Name:</strong>{" "}
          {data.firstName}
        </p>

        <p>
          <strong>Last Name:</strong>{" "}
          {data.lastName}
        </p>

        <p>
          <strong>Date of Birth:</strong>{" "}
          {data.dob}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {data.email}
        </p>
      </div>
    </div>
  );
};

export default Step3;