import React, { useState } from 'react';
import dscrd from './imgs/DIS.png';
import icoEN from './imgs/ENG.png';
import icoHE from './imgs/HEB.png';
const locEN = async ()=>{
	let data = await fetch('locales/en/translation.json');
	let json = data.json();
	console.log("1: ")
	console.log(json);
	return json;
}
const locHE =()=>{
	fetch('locales/he/translation.json'
		,{
			headers : {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
	.then(function(response){
		console.log(response)
		return response.json();
	}).then(function(myJson){
		console.log(myJson)
	})
}
// const getLang = () =>{
// 	let jData = locEN().then((res) => return res);
// 	return jData;
// }
//import { useTranslation } from 'react-i18next';
export async function Menu1(){
	var lFlag;
	if(!(lFlag = localStorage.getItem('langf')))
		lFlag=false;
	const [locale, setLocale] = useState("en");
	const changeLang = () => {
		setLocale(lastLocale => {
			if(lastLocale === "en")
				return "he"
			return "en"
		})
	}
	function lang(){
		if(locale === "he")
    return icoHE;
  return icoEN;
	}
	let curLang = await locEN();
	let title = curLang["lang"];
	return (
			<div className="App">
	      <div>
	      	{console.log(title), console.log("dat")}
	      </div>
    	  <table>
        	<tbody>
	          <tr>
    	        <td>
        	      <a href="c/HTML"><img alt="HTML" src="https://appschool.co.il/assets/moxifile/courses_pics/html.jpeg" width="250" height="250"/></a>
            	</td><td>
	              <a href="c/CSS" id="mid"><img alt="CSS" src="https://appschool.co.il/assets/moxifile/courses_pics/modern-css.png" width="250" height="250"/></a>
    	        </td>
        	  </tr>
	          <tr>
    	        <td colSpan="2">
        	      <div>
        	      	<button onClick={changeLang} Style="background-color:transparent;border:0;"><img alt="LANG" src={lang()} id="LANG"/></button>
            	    {/*<a href="/" onClick={changeLang} id="ALANG"><img alt="LANG" src={lang()} id="LANG"/></a>*/}
                	<a href="https://discord.gg/2wzY3wCd9C" id="ADIS"><img alt="DISCORD" src={dscrd} id="DIS"/></a>
        	      </div>
    	        </td>
	          </tr>
        	</tbody>
    	  </table>
	    </div>
		);
}