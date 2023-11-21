import React from "react";
import DaumPostcode from "react-daum-postcode";
import "./JoinPage.css";

const KakaoMap = (props) => {
  const complete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);

    props.setcompany({
      ...props.company,
      address: fullAddress,
    });
  };

  return (
    <div>
      <DaumPostcode
        className="postmodal"
        autoClose
        onComplete={complete}
        style={{ width: "100%", height: "100vh" }}
      />
    </div>
  );
};

export default KakaoMap;
