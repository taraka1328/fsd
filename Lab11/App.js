import React, {useState, useEffect} from 'react'; 
function DigiClock() {
  const [mytime, getMytime] = useState(" "); 
  const tick = () => {
      let time = new Date().getHours()-12+":"+new Date().getMinutes()+":"+new Date().getSeconds();
      if (new Date().getHours()< 12)
         time = time+" AM"
      else
          time = time+" PM"
      getMytime(time);
  }
  
  useEffect(() => {
  const t = setInterval(tick,1000);
  
  return () => { clearTimeout(t);
  }
  }, [mytime])
  
  return (
  <div>
  <h1>DigitalClock</h1>
  <h2>{mytime}</h2>
  </div>
)
}
export default DigiClock;

  