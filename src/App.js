import "./App.css";
import ContentHeader from "./Components/Content/Content-Header/Content-Header";
import Body from "./Components/Content/Content-Body/Body";
import React, { useEffect } from "react";
const axios = require('axios').default;

function App(){

  let data;

  useEffect(
    () => {
      let timerId = setTimeout(async function fetchData(){
        try {
          const response = await axios.get('http://192.168.168.34:9000/api/test');
          data = response.data.res;
          console.log(data)
        } catch (error) {
          console.log(error)
        }
        timerId = setTimeout(fetchData,1000)
      }, 1000)
    })


  return(
    <div className="App">
        <ContentHeader/>
        {/* <Body data = {this.state.data}/> */}
    </div>
  )
}


export default App;
