import React, { useState } from "react";
import Header from "../Component/Header";
import "./MyInfoPage2.css";
import { Icon } from "@iconify/react";

const MyInfoPage2 = () => {
  // 성별선택
  const [selected, setSelected] = useState(false);

  // 성별을 배열에 저장
  const genderInfo = [
    {
      value: 0,
      id: "male",
      title: "남자",
    },
    {
      value: 1,
      id: "female",
      title: "여자",
    },
    {
      value: 2,
      id: "none",
      title: "선택안함",
    },
  ];

  const addClassHandler = (item) => {
    setSelected(item.value);
  };

  /***************************************************/
  // 정규식 초기값 세팅 - 아이디, 비번, 비번확인, 이름, 이메일, 폰번호, 생년월일
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwchk, setPwchk] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  // 오류메세지 상태 저장 - 아이디, 비번, 비번확인, 이름, 이메일, 폰번호, 생년월일
  const [idMsg, setIdMsg] = useState("");
  const [pwMsg, setPwMsg] = useState("");
  const [pwchkMsg, setPwchkMsg] = useState("");
  const [nameMsg, setNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");
  const [phonechk, setPhoneChk] = useState("");
  const [birthMsg, setBirthMsg] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false); // eslint-disable-line no-unused-vars
  const [isname, setIsName] = useState(false); // eslint-disable-line no-unused-vars
  const [isPw, setIsPw] = useState(false); // eslint-disable-line no-unused-vars
  const [isPwConfirm, setIsPwConfirm] = useState(false); // eslint-disable-line no-unused-vars
  const [isEmail, setIsEmail] = useState(false); // eslint-disable-line no-unused-vars
  const [isPhone, setIsPhone] = useState(false); // eslint-disable-line no-unused-vars

  /***************************************************/
  // 아이디
  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMsg(
        <p className="warn" style={{ color: "red" }}>
          4-12사이 대소문자 또는 숫자만 입력해 주세요.
        </p>
      );
      setIsId(false);
    } else {
      setIdMsg(
        <p className="warn" style={{ color: "green" }}>
          사용가능한 아이디 입니다.
        </p>
      );
      setIsId(true);
    }
  };

  // 비밀번호
  const onChangePw = (e) => {
    const currentPw = e.target.value;
    setPw(currentPw);
    const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!pwRegExp.test(currentPw)) {
      setPwMsg(
        <p className="warn" style={{ color: "red" }}>
          숫자+영문자+특수문자 조합으로 8자리 이상 입력해 주세요.
        </p>
      );
      setIsPw(false);
    } else {
      setPwMsg(
        <p className="warn" style={{ color: "green" }}>
          안전한 비밀번호입니다.
        </p>
      );
      setIsPw(true);
    }
  };

  // 비밀번호확인
  const onChangePwConfirm = (e) => {
    const ChangePwConfirm = e.target.value;
    setPwchk(ChangePwConfirm);
    if (pw !== ChangePwConfirm) {
      setPwchkMsg(
        <p className="warn" style={{ color: "red" }}>
          비밀번호가 같지 않습니다.
        </p>
      );
      setIsPwConfirm(false);
    } else if (pw === ChangePwConfirm && ChangePwConfirm.length > 0) {
      setPwchkMsg(
        <p className="warn" style={{ color: "green" }}>
          비밀번호가 일치합니다.
        </p>
      );
      setIsPwConfirm(true);
    } else {
      setPwchkMsg("");
    }
  };

  // 이름
  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);
    const nameRegExp = /^[가-힣]{2,5}$/;
    if (
      currentName.length < 2 ||
      currentName.length > 5 ||
      !nameRegExp.test(currentName)
    ) {
      setNameMsg(
        <p className="warn" style={{ color: "red" }}>
          한글로 2~5글자 사이로 입력해 주세요.
        </p>
      );
      setIsName(false);
    } else {
      setNameMsg(
        <p className="warn" style={{ color: "green" }}>
          사용가능한 이름입니다.
        </p>
      );
      setIsName(true);
    }
  };

  // 이메일
  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMsg(
        <p className="warn" style={{ color: "red" }}>
          이메일의 형식이 올바르지 않습니다.
        </p>
      );
      setIsEmail(false);
    } else {
      setEmailMsg(
        <p className="warn" style={{ color: "green" }}>
          사용 가능한 이메일 입니다.
        </p>
      );
      setIsEmail(true);
    }
  };

  //휴대폰번호
  const onChangePhone = (e) => {
    const currentPhone = e.target.value;
    setPhone(currentPhone);
    const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (!phoneRegExp.test(currentPhone)) {
      setPhoneMsg(
        <p className="warn" style={{ color: "red" }}>
          올바른 형식이 아닙니다.
        </p>
      );
      setIsPhone(false);
    } else {
      setPhoneMsg(
        <p className="warn" style={{ color: "green" }}>
          사용가능한 번호입니다.
        </p>
      );
      setIsPhone(true);
    }
  };

  const phoneBlankAlert = () => {
    if (phone.length === 0) {
      alert("휴대폰번호를 입력해 주세요.");
      setPhoneChk("");
    } else {
      setPhoneChk(
        <div className="phonenum-veri">
          <input type="text" name="phonenum-veri" id="phonenum-veri" />
          <button type="button" className="veri-chk-btn">
            인증번호 확인
          </button>
        </div>
      );
      setPhoneMsg(
        <p className="warn" style={{ color: "#333333" }}>
          인증번호가 오지 않는다면, 통신사 스팸차단 서비스 혹은 휴대 번호 차단
          여부를 확인해 주세요.
        </p>
      );
    }
  };

  // *** 생년월일 ***
  // 년도체크
  const onChangeYear = (e) => {
    const currentYear = e.target.value;
    // value값이 숫자가 아닐경우 빈문자열로 replace
    const onlynumber = currentYear.replace(/[^0-9]/g, "");
    setYear(onlynumber);
    if (currentYear > 2023 || currentYear < 1900) {
      setBirthMsg(
        <p className="warn" style={{ color: "red" }}>
          년도를 정확히 입력해 주세요.
        </p>
      );
    } else {
      setBirthMsg("");
    }
  };

  // 월 체크
  const onChangeMonth = (e) => {
    const currentMonth = e.target.value;
    const onlynumber = currentMonth.replace(/[^0-9]/g, "");
    setMonth(onlynumber);
    if (currentMonth < 1 || currentMonth > 12) {
      setBirthMsg(
        <p className="warn" style={{ color: "red" }}>
          태어난 달을 정확히 입력하세요.
        </p>
      );
    } else {
      setBirthMsg("");
    }
  };

  // 일 체크
  const onChangeDay = (e) => {
    const currentDay = e.target.value;
    const onlynumber = currentDay.replace(/[^0-9]/g, "");
    setDay(onlynumber);
    if (currentDay < 1 || currentDay > 31) {
      setBirthMsg(
        <p className="warn" style={{ color: "red" }}>
          태어난 날을 정확히 입력하세요.
        </p>
      );
    } else {
      setBirthMsg("");
    }
  };

  /***************************************************/

  return (
    <>
      <div className="myinfopage2-wrapper">
        <Header title="내정보관리" />
        <form action="./submit.html" id="join-form">
          <section className="join-form">
            {/* 아이디 */}
            <div className="join-box-item join-id">
              <p className="label-name">
                아이디<span className="marking">*</span>
              </p>
              <label htmlFor="id">
                <input
                  type="text"
                  name="id"
                  id="id"
                  value={id}
                  onChange={onChangeId}
                  disabled
                />
              </label>
              {idMsg}
            </div>

            {/* 비밀번호 */}
            <div className="join-box-item join-pw">
              <p className="label-name">
                비밀번호<span className="marking">*</span>
              </p>
              <label htmlFor="pw">
                <input
                  type="password"
                  name="pw"
                  id="pw"
                  autoComplete="off"
                  placeholder="비밀번호를 입력해 주세요."
                  value={pw}
                  onChange={onChangePw}
                />
              </label>
              {pwMsg}
            </div>

            {/* 비밀번호 확인 */}
            <div className="join-box-item join-pw-chk">
              <p className="label-name">
                비밀번호 확인<span className="marking">*</span>
              </p>
              <label htmlFor="pw-chk">
                <input
                  type="password"
                  name="pwchk"
                  id="pwchk"
                  autoComplete="off"
                  placeholder="비밀번호를 다시 입력해 주세요."
                  value={pwchk}
                  onChange={onChangePwConfirm}
                />
              </label>
              {pwchkMsg}
            </div>

            {/* 이름 */}
            <div className="join-box-item join-name">
              <p className="label-name">
                이름<span className="marking">*</span>
              </p>
              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="이름을 입력해 주세요."
                  value={name}
                  onChange={onChangeName}
                />
              </label>
              {nameMsg}
            </div>

            {/* 이메일 */}
            <div className="join-box-item join-email">
              <p className="label-name">
                이메일<span className="marking">*</span>
              </p>
              <label htmlFor="email">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={onChangeEmail}
                  disabled
                />
              </label>
              {emailMsg}
            </div>

            {/* 휴대폰 */}
            <div className="join-box-item join-phonenum">
              <p className="label-name">
                휴대폰<span className="marking">*</span>
              </p>
              <label htmlFor="phonenum" className="phonenum">
                <div className="phonenum-wrap">
                  <input
                    type="text"
                    name="phonenum"
                    id="phonenum"
                    placeholder="숫자만 입력해 주세요."
                    value={phone}
                    onChange={onChangePhone}
                  />
                  <button
                    type="button"
                    className="veri-btn"
                    onClick={phoneBlankAlert}
                  >
                    다른번호 인증
                  </button>
                  {phoneMsg}
                </div>
                {phonechk}
                {/* 다른번호 인증 누른뒤 보이기 */}
              </label>
              {phoneMsg}
            </div>

            {/* 생년월일 */}
            <div className="join-box-item join-birth">
              <p className="label-name">생년월일</p>
              <label htmlFor="birth" className="birth">
                <input
                  type="text"
                  name="birth"
                  id="year"
                  placeholder="년(YYYY)"
                  value={year}
                  onChange={onChangeYear}
                  maxLength={4}
                />
                <input
                  type="text"
                  name="birth"
                  id="month"
                  placeholder="월(MM)"
                  value={month}
                  onChange={onChangeMonth}
                  maxLength={2}
                />
                <input
                  type="text"
                  name="birth"
                  id="day"
                  placeholder="일(DD)"
                  value={day}
                  onChange={onChangeDay}
                  maxLength={2}
                />
              </label>
              {birthMsg}
            </div>

            {/* 성별 */}
            <div className="join-box-item join-gender">
              <p className="label-name">성별</p>
              <label htmlFor="gender" className="gender">
                {genderInfo.map((item) => (
                  <div
                    key={item.value}
                    className={
                      item.value === selected
                        ? "inputbox btn-primary"
                        : "inputbox"
                    }
                    onClick={() => addClassHandler(item)}
                  >
                    <p>{item.title}</p>
                    <input
                      type="radio"
                      name="gender"
                      value={item.value}
                      id={item.id}
                      defaultChecked
                    />
                  </div>
                ))}
              </label>
            </div>
          </section>

          <div className="gap"></div>

          <section className="terms-form">
            <p className="label-name">
              약관 및 마케팅 수신동의<span className="marking">*</span>
            </p>
            <div className="agree-list">
              <label className="agree-item">
                <input type="checkbox" id="terms-chkbox2" />
                <label htmlFor="terms-chkbox2"></label>
                <span className="agree-text">개인정보 수집 이용 동의</span>
                <span className="text-primary">(선택)</span>
              </label>
              <label className="agree-item">
                <input type="checkbox" id="terms-chkbox3" />
                <label htmlFor="terms-chkbox3"></label>
                <span className="agree-text">마케팅 이메일 수신</span>
                <span className="text-primary">(선택)</span>
              </label>
              <label className="agree-item">
                <input type="checkbox" id="terms-chkbox4" />
                <label htmlFor="terms-chkbox4"></label>
                <span className="agree-text">마케팅 SNS 수신</span>
                <span className="text-primary">(선택)</span>
              </label>
            </div>
            <div className="withdraw">
              <span>탈퇴하기</span>
              <Icon icon="ion:chevron-up" rotate={1} className="chevron" />
            </div>
            <button type="submit" id="join-btn">
              가입하기
            </button>
          </section>
        </form>
      </div>
    </>
  );
};

export default MyInfoPage2;
