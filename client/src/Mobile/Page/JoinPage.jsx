import React from "react";
import "./JoinPage.css";

const JoinPage = () => {
  return (
    <>
      <div className="join-wrapper">
        <form action="./submit.html" id="join-form">
          <section className="join-form">
            {/* 아이디 */}
            <p className="label-name">
              아이디<span className="marking">*</span>
            </p>
            <label htmlFor="id">
              <input
                type="text"
                name="id"
                id="id"
                placeholder="아이디를 입력해 주세요."
              />
              <button type="button" className="id-chk-btn chk-btn">
                중복확인
              </button>
            </label>

            {/* 비밀번호 */}
            <p className="label-name">
              비밀번호<span className="marking">*</span>
            </p>
            <label htmlFor="pw">
              <input
                type="password"
                name="pw"
                id="pw"
                placeholder="비밀번호를 입력해 주세요."
              />
            </label>

            {/* 비밀번호 확인 */}
            <p className="label-name">
              비밀번호 확인<span className="marking">*</span>
            </p>
            <label htmlFor="pw-chk">
              <input
                type="password"
                name="pw-chk"
                id="pw-chk"
                placeholder="비밀번호를 입력해 주세요."
              />
            </label>

            {/* 이름 */}
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

            {/* 이메일 */}
            <p className="label-name">
              이메일<span className="marking">*</span>
            </p>
            <label htmlFor="email">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="예: FarmBreeze@FB.com"
              />
              <button type="button" className="email-chk-btn chk-btn">
                중복확인
              </button>
            </label>

            {/* 휴대폰 */}
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
                  인증번호 받기
                </button>
              </div>

              {/* 인증번호 받기 누른뒤 보이기 */}
              <div className="phonenum-veri">
                <input type="text" name="phonenum-veri" id="phonenum-veri" />
                <button type="button" className="veri-chk-btn">
                  인증번호 확인
                </button>
              </div>
            </label>

            {/* 주소 */}
            <p className="label-name">
              주소<span className="marking">*</span>
            </p>
            <label htmlFor="address" className="address">
              <input
                type="text"
                name="address"
                id="address"
                placeholder="도로명, 지번, 건물명 검색"
              />
              <input
                type="text"
                name="address-detail"
                id="address-detail"
                placeholder="상세주소"
              />
            </label>

            {/* 생년월일 */}
            <p className="label-name">생년월일</p>
            <label htmlFor="birth" className="birth">
              <input
                type="text"
                name="birth"
                id="year"
                placeholder="년(YYYY)"
              />
              <input type="text" name="birth" id="month" placeholder="월(MM)" />
              <input type="text" name="birth" id="day" placeholder="일(DD)" />
            </label>

            {/* 성별 */}
            <p className="label-name">성별</p>
            <label htmlFor="gender" className="gender">
              <div className="inputbox">
                <p>남자</p>
                <input type="radio" name="gender" id="male" value="0" checked />
              </div>
              <div className="inputbox">
                <p>여자</p>
                <input type="radio" name="gender" id="female" value="1" />
              </div>
              <div className="inputbox">
                <p>선택안함</p>
                <input type="radio" name="gender" id="no-gender" value="2" />
              </div>
            </label>
          </section>

          <div className="gap"></div>

          <section className="terms-form">
            <p className="label-name">
              이용약관동의<span className="marking">*</span>
            </p>

            <div className="total-agree">
              <label className="total-agree-item">
                <input type="checkbox" id="terms-chkbox" />
                <label htmlFor="terms-chkbox"></label>
                <span className="agree-text">전체 동의합니다.</span>
              </label>
              <p>
                선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
                이용할 수 있습니다.
              </p>
            </div>

            <div className="agree-list">
              <label className="agree-item">
                <input type="checkbox" id="terms-chkbox" />
                <label htmlFor="terms-chkbox"></label>
                <span className="agree-text">이용약관 동의</span>
                <span className="text-primary">(필수)</span>
              </label>
              <label className="agree-item">
                <input type="checkbox" id="terms-chkbox" />
                <label htmlFor="terms-chkbox"></label>
                <span className="agree-text">개인정보 수집 ˑ 이용 동의</span>
                <span className="text-primary">(필수)</span>
              </label>
              <label className="agree-item">
                <input type="checkbox" id="terms-chkbox" />
                <label htmlFor="terms-chkbox"></label>
                <span className="agree-text">개인정보 수집 ˑ 이용 동의</span>
                <span className="text-primary">(선택)</span>
              </label>
              <label className="agree-item">
                <input type="checkbox" id="terms-chkbox" />
                <label htmlFor="terms-chkbox"></label>
                <span className="agree-text">본인은 만 14세 이상입니다.</span>
                <span className="text-primary">(필수)</span>
              </label>
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

export default JoinPage;
