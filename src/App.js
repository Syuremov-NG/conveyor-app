import "./App.css";
import ContentHeader from "./Components/Content/Content-Header/Content-Header";
import Body from "./Components/Content/Content-Body/Body";
import React, { useEffect, useState } from "react";
const axios = require('axios').default;

function App(){

  const [posts, setPosts] = useState([]);

  useEffect(
    () => {
      let timerId;
      async function fetchData(){
        try {
          const response = await axios.get('http://192.168.168.34:9000/api/test');
          setPosts(response.data.res);
        } catch (error) {
          console.log(error);
        }
        return timerId = setTimeout(fetchData,2000);
      }
      fetchData();
      return clearTimeout(timerId);
    }, [])
    
  return(
    <div className="App">
        <ContentHeader data = {posts}/>
        <Body data = {posts}/>
    </div>
  )
}


export default App;
