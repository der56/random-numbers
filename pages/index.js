import style from '../styles/main.module.css';
import Head from 'next/head';

const Click = () =>{
  var hasta = document.getElementById("hasta");
  var desde = document.getElementById("desde");
  var hasvalue = hasta.value;
  var desvalue = desde.value;
  var max = Math.floor(hasvalue);
  var min = Math.ceil(desvalue);
  var result = Math.floor(Math.random()*(1 + max - min) + min);
  document.write("<body style='background-color: #535555;'>" + `<h1 style=
  "color: #fcf75e;
   display: grid;
   place-items: center;
   position: relative;
   top: 40vh;
   font-size: 55px;
  "
  >` + result + `</h1>` + "<h1 style='color: white; display: grid; place-items: center; position: relative; top: 12vh;'>" + "your result is:" + "</h1>" +
 "<a href='/'>" + "<button style='background-color: #be2c51; color: white; border: none; position: absolute; left: 50%; transform: translateX(-50%); top: 60vh; width: 300px; height: 50px;'>" 
 + "go back" + "</button>" + "</a>" + "</body>");
}

export default function Home() {
  return (
   <>
      <h1 className={style.text}>random number generator</h1>
        <input type="number" placeholder="desde" className={style.input1} min="0" id="desde"></input>
        <input type="number" placeholder="hasta" className={style.input2} min="0" id="hasta"></input>
        <button className={style.boton} onClick={Click} id="boton">generar</button>
   </>
  )
}




