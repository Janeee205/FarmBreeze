import React from "react";

const JoinPage = () => {
  return (
    <>
      <div className="join-wrapper">
        <label htmlFor="">
          <input type="text" name="id" id="id" />
          <button type="button">중복확인</button>
        </label>
      </div>
    </>
  );
};

export default JoinPage;
