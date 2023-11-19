import React, { useState } from "react";
import Header from "../Component/Header";
import "./MyInfoPage2.css";
import { Icon } from "@iconify/react";

const MyInfoPage2 = () => {
  // 성별선택
  const [selected, setSelected] = useState(false);

  /***************************************************/
  // 정규식 초기값 세팅 - 아이디, 비번, 비번확인, 이름, 이메일, 폰번호, 생년월일
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwchk, setPwchk] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [birth, setBirth] = useState("");

  // 오류메세지 상태 저장 - 아이디, 비번, 비번확인, 이름, 이메일, 폰번호, 생년월일
  const [idMsg, setIdMsg] = useState("");
  const [pwMsg, setPwMsg] = useState("");
  const [pwchkMsg, setPwchkMsg] = useState("");
  const [nameMsg, setNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");
  // const [birthMsg, setBirthMsg] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isname, setIsName] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isPwConfirm, setIsPwConfirm] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  // const [isBirth, setIsBirth] = useState(false);

  /***************************************************/
  // 아이디
  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMsg("4-12사이 대소문자 또는 숫자만 입력해 주세요.");
      setIsId(false);
    } else {
      setIdMsg("사용가능한 아이디 입니다.");
      setIsId(true);
    }
  };

  // 비밀번호
  const onChangePw = (e) => {
    const currentPw = e.target.value;
    setPw(currentPw);
    const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!pwRegExp.test(currentPw)) {
      setPwMsg("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.");
      setIsPw(false);
    } else {
      setPwMsg("안전한 비밀번호 입니다.");
      setIsPw(true);
    }
  };

  // 비밀번호확인
  const onChangePwConfirm = (e) => {
    const ChangePwConfirm = e.target.value;
    setPwchk(ChangePwConfirm);
    if (pw !== ChangePwConfirm) {
      setPwchkMsg("비밀번호가 같지 않습니다.");
      setIsPw(false);
    } else {
      setPwchkMsg("비밀번호가 일치합니다.");
      setIsPwConfirm(true);
    }
  };

  // 이름
  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);
    const nameRegExp = /^[가-힣]{2,5}$/;
    if (currentName.length < 2 || currentName.length > 5) {
      setNameMsg("이름은 2글자 이상 5글자 이하로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMsg("사용가능한 이름입니다.");
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
      setEmailMsg("이메일의 형식이 올바르지 않습니다.");
      setIsEmail(false);
    } else {
      setEmailMsg("사용 가능한 이메일 입니다.");
      setIsEmail(true);
    }
  };

  //휴대폰번호
  const onChangePhone = (e) => {
    const currentPhone = e.target.value;
    setPhone(currentPhone);
    const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (!setPhone.test(currentPhone)) {
      setPhoneMsg("올바른 형식이 아닙니다.");
      setIsPhone(false);
    } else {
      setPhoneMsg("사용가능한 번호입니다.");
      setPhone(true);
    }
  };

  // const onChangeBirth = (e) => {
  //   const currentBirth = e.target.value;
  //   setBirth;
  // };

  /***************************************************/
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

  return (
    <>
      <div className="myinfopage2-wrapper">
        <Header title="마이페이지" />
        <form action="./submit.html" id="join-form">
          <section className="join-form">
            {/* 아이디 */}
            <div className="join-box-item join-id">
              <p className="label-name">
                아이디<span className="marking">*</span>
              </p>
              <label htmlFor="id">
                <input type="text" name="id" id="id" disabled />
                <button type="button" className="id-chk-btn chk-btn">
                  중복확인
                </button>
              </label>
              <p className="warn"></p>
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
                />
              </label>
              <p className="warn"></p>
            </div>

            {/* 비밀번호 확인 */}
            <div className="join-box-item join-pw-chk">
              <p className="label-name">
                비밀번호 확인<span className="marking">*</span>
              </p>
              <label htmlFor="pwchk">
                <input
                  type="password"
                  name="pwchk"
                  id="pwchk"
                  autoComplete="off"
                  placeholder="비밀번호를 다시 입력해 주세요."
                />
              </label>
              <p className="warn"></p>
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
                />
              </label>
              <p className="warn"></p>
            </div>

            {/* 이메일 */}
            <div className="join-box-item join-email">
              <p className="label-name">
                이메일<span className="marking">*</span>
              </p>
              <label htmlFor="email">
                <input type="text" name="email" id="email" disabled />
                <button type="button" className="email-chk-btn chk-btn">
                  중복확인
                </button>
              </label>
              <p className="warn"></p>
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
                  />
                  <button type="button" className="veri-btn">
                    다른번호 인증
                  </button>
                  <p className="warn"></p>
                </div>

                {/* 인증번호 받기 누른뒤 보이기 */}
                <div className="phonenum-veri">
                  <input type="text" name="phonenum-veri" id="phonenum-veri" />
                  <button type="button" className="veri-chk-btn">
                    인증번호 확인
                  </button>
                </div>
              </label>
              <p className="warn"></p>
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
                />
                <input
                  type="text"
                  name="birth"
                  id="month"
                  placeholder="월(MM)"
                />
                <input type="text" name="birth" id="day" placeholder="일(DD)" />
              </label>
              <p className="warn"></p>
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
