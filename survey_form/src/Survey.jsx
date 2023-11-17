import React, { useState } from "react";

const Survey = () => {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState();
  const [contry, setContry] = useState("Select Country");
  const [prof, setProf] = useState();
  const [num, setNum] = useState();
  const [que1, setQue1] = useState();
  const [que2, setQue2] = useState();
  const [rate, setRating] = useState("");
  const [sugg, setSugg] = useState();
  const FirstName = (e) => {
    setName(e.target.value);
  };

  const NewMail = (e) => {
    setMail(e.target.value);
  };

  const ChangeGender = (e) => {
    setGender(e.target.value);
  };
  const HandleDOB = (e) => {
    setDOB(e.target.value);
  };
  const HandleContry = (e) => {
    setContry(e.target.value);
  };
  const HnadleNumber = (e) => {
    const input = e.target.value;
    const mobNoRange = /^\d{10}$/;
    if (mobNoRange.test(input || input === "")) {
      setNum(input);
    }
  };
  const HandleProf = (e) => {
    setProf(e.target.value);
  };
  const HandleQue = (e) => {
    setQue1(e.target.value);
  };
  const HandleQue2 = (e) => {
    setQue2(e.target.value);
  };
  const HandleRating = (e) => {
    setRating(e.target.value);
  };
  const HandleSuggestion = (e) => {
    setSugg(e.target.value);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || mail === "" || dob === "") {
      alert("Please fill in all required fields.");
    } else if (!/^[A-Z][a-z]*$/i.test(name)) {
      alert("Invalid name format. Use only alphabets.");
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(mail)) {
      alert("Invalid email format.");
    } else {
      alert("Submitted Successfully!");
    }
  };
  const HandleReset = () => {
    setName();
    setMail();
    setGender();
    setDOB();
    setContry("Select Contry");
    setProf();
    setQue1();
    setQue2();
    setRating();
  };
  return (
    <div>
      <h1>CUSTOMER SURVEY FORM</h1>
      <form onSubmit={HandleSubmit}>
        <div>
          <br />
          <label>
            Name <input type="text" onChange={FirstName} value={name} />
          </label>
          <br />
          <label>
            Email
            <input type="email" onChange={NewMail} value={mail} />
          </label>
          <br />
          <label>
            DOB
            <input type="date" onChange={HandleDOB} value={dob} />
          </label>
          <br />
          <label>Gender</label>
          <br />
          <label>
            <input
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={ChangeGender}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={ChangeGender}
            />
            Male
          </label>
          <br />
          <label>
            Contry
            <select onChange={HandleContry} value={contry}>
              <option value="Select Contry" disabled>
                Select Contry
              </option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
              <option value="Nepal">Nepal</option>
              <option value="China">China</option>
              <option value="Norway">Norway</option>
            </select>
          </label>
          <br />
          <label>
            Mob No
            <input type="number" onChange={HnadleNumber} value={num} />
          </label>
          <br />
          <label>
            Profession
            <input type="text" onChange={HandleProf} value={prof} />
          </label>
          <br />
          <label>
            Is this First time your using our comp project or services ?
            <br />
            <label>
              <input
                type="radio"
                value="YES"
                checked={que1 === "YES"}
                onChange={HandleQue}
              />
              YES
            </label>
            <label>
              <input
                type="radio"
                value="NO"
                checked={que1 === "NO"}
                onChange={HandleQue}
              />
              NO
            </label>
            <br />
          </label>
          <label>
            would you suggest to your friend ?
            <br />
            <label>
              <input
                type="radio"
                onChange={HandleQue2}
                value="YES"
                checked={que2 === "YES"}
              />
              YES
            </label>
            <label>
              <input
                type="radio"
                onChange={HandleQue2}
                value="NO"
                checked={que2 === "NO"}
              />
              NO
            </label>
          </label>
          <br />
          <label>
            How satisfied are you with our company overall?
            <br />
            <label>
              <input
                type="radio"
                value="Satisfied"
                checked={rate === "Satisfied"}
                onChange={HandleRating}
              />
              Satisfied
            </label>
            <label>
              <input
                type="radio"
                value="Not-Decided"
                checked={rate === "Not-Decided"}
                onChange={HandleRating}
              />
              Not-Decided
            </label>
            <label>
              <input
                type="radio"
                value="Unsatisfied"
                checked={rate === "Unsatisfied"}
                onChange={HandleRating}
              />
              Unsatisfied
            </label>
          </label>
          <br />
          <label>
            Suggestion
            <br />
            <input type="text" onChange={HandleSuggestion} value={sugg} />
          </label>
          <br></br>
          <button type="submit">SUBMIT</button>
          <button type="button" onClick={HandleReset}>
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};
export default Survey;
