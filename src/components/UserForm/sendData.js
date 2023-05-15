import axios from "axios";

export async function sendData(
  firstName,
  lastName,
  phoneNumber,
  email,
  fieldOfWork,
  resume
) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Headers": "Content-Type",
    },
    mode: "cors",
  };
  var data = new FormData();
  let body = JSON.stringify({
    first_name: firstName,
    last_name: lastName,
    phone_number: phoneNumber,
    email: email,
    job: fieldOfWork,
    description: "something blah blah",
  });
  await data.append("json", body);
  await data.append("file", resume);
  for (var pair of data.entries()) {
    console.log(pair[0] + "  :  " + pair[1]);
  }

  try {
    const response = await fetch(
      "http://192.168.20.35:3000/api/addNewPerson",
      requestOptions,
      data
    );
    // console.log(response);
  } catch (error) {
    // console.log(error);
  }
}
