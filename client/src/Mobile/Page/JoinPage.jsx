import React from "react";
import "./JoinPage.css";

const JoinPage = () => {
  return (
    <>
      <div className="join-wrapper">
        {/* 아이디 */}
        <p className="label-name">
          아이디<span className="marking">*</span>
        </p>
        <label htmlFor="id">
          <input type="text" name="id" id="id" />
          <button type="button" className="id-chk-btn chk-btn">
            중복확인
          </button>
        </label>

        {/* 비밀번호 */}
        <p className="label-name">
          비밀번호<span className="marking">*</span>
        </p>
        <label htmlFor="pw">
          <input type="password" name="pw" id="pw" />
        </label>

        {/* 비밀번호 확인 */}
        <p className="label-name">
          비밀번호 확인<span className="marking">*</span>
        </p>
        <label htmlFor="pw-chk">
          <input type="password" name="pw-chk" id="pw-chk" />
        </label>

        {/* 이름 */}
        <p className="label-name">
          이름<span className="marking">*</span>
        </p>
        <label htmlFor="name">
          <input type="text" name="name" id="name" />
        </label>

        {/* 이메일 */}
        <p className="label-email">
          이메일<span className="marking">*</span>
        </p>
        <label htmlFor="email">
          <input type="text" name="email" id="email" />
          <button type="button" className="email-chk-btn chk-btn">
            중복확인
          </button>
        </label>

        {/* 휴대폰 */}
        <p className="label-phonenum">
          휴대폰<span className="marking">*</span>
        </p>
        <label htmlFor="email">
          <input type="text" name="email" id="email" />
          <button type="button" className="email-chk-btn chk-btn">
            중복확인
          </button>
        </label>
      </div>
    </>
  );
};

export default JoinPage;
