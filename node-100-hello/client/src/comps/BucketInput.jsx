import { useEffect } from "react";
import{useState, useEffect} from "react"


    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bucket),
    };
    fetch("http://localhost:3000/bucket", postData)
    .then((res)=>res.text())
    .then((result)=>{
      if (result ==="OK"){
fetchBuckLIst()
      }
    })
    const onKeyDown = (e) => {
      if (e.keyCode === 13) {
        console.log(e.target.value);
        const bucket = {
          b_bucket: e.target.value,
          b_flag: 0,
          b_sdate: "2022-07-05 13:20:00",
          b_cancel: false,
        };
      }
  
};

const BucketInput = () => {
  const [BucketList, setBuckList] = useState([]);
  const fetchBuckLIst = async () => {
    const response = await fetch("http://localhost:3000/bucket/list");
    const jsonBuck = response.json();
    setBuckList(jsonBuck);
  };
  return (
    <>
    <BucketList bucketList={bucketList}
      <input onKeyDown={onKeyDown} placeholder="BUCKET" className="w3-input" />
    </>
  );
};

export default BucketInput;
