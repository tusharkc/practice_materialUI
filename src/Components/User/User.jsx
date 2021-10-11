import React from "react";
import {
  selectUserFirstName,
  selectUserLastName,
  selectUserDateOfBirth,
  selectUserIsMarried,
  selectUserHasBoat,
  selectUserHasCar,
  selectUserHasBike,
} from "./Slice.User";
import { useSelector } from "react-redux";

function User() {
  const fName = useSelector(selectUserFirstName);
  const lName = useSelector(selectUserLastName);
  const dob = useSelector(selectUserDateOfBirth);
  const isMarried = useSelector(selectUserIsMarried);
  const hasBike = useSelector(selectUserHasBike);
  const hasCar = useSelector(selectUserHasCar);
  const hasBoat = useSelector(selectUserHasBoat);

  return (
    <div>
      <p
        style={{
          marginLeft: 100,
          fontWeight: "bold",
          fontSize: 35,
          fontFamily: "monospace",
          backgroundColor: "skyBlue",
          textAlign: "center",
        }}
      >
        {fName.firstName} {lName.lastName}
      </p>
      <p style={{ marginLeft: 100 }}>
        born in {dob.dateOfBirth} {isMarried.isMarried}
        {hasBike.hasBike || hasCar.hasCar || hasBoat.hasBoat
          ? ` has ${hasBike.hasBike} ${hasCar.hasCar} ${hasBoat.hasBoat}`
          : " "}
      </p>
    </div>
  );
}

export default User;
