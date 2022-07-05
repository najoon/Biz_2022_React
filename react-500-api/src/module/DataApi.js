const apiURL = "/get/1360000/WthrWrnInfoService/getWthrWrnList";
const apiServiceKey =
  "MSIoRtHuJkjmq4MsGf3pEmYXNVkyF69Jd0JyuyXoMh0VWnBTYayd7FDsQkktLvb1tcT%2FIgf1bwwju4GEFRykTQ%3D%3D";

const fetchData = async () => {
  const serviceURL = `${apiURL}?serviceKey=${apiServiceKey}&dataType=JSON&pageNo=1&numOfRows=100`;
  const response = await fetch(serviceURL);
  console.log(serviceURL);
  const json = await response.json();
  return json;
};

export { fetchData };
