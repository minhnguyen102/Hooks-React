import { useState } from "react";

const gifts = [
    "Iphone 17 Promax",
    "Honda CRV",
    "Voucher discount 40%"
  ]
let count = 0
function App() {
  const [gift, setGift] = useState();
  const handleClick = () => {
    if(count < 3){
      count++
      console.log(count);
      setGift(gifts[Math.floor(Math.random() * gifts.length)])
    }else{
      alert("Hết lượt thay đổi")
    }
  }

  return (
    <div className="App" style={{padding: 20}}>
      <h1>{gift || "Chưa có phần thưởng" }</h1>
      <button onClick={handleClick}>Lấy thưởng</button>
    </div>
  );
}

export default App;
