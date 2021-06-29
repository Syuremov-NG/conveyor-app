import "./App.scss";
import ContentHeader from "./Components/Content/Content-Header/Content-Header";
import Body from "./Components/Content/Content-Body/Body";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import BodyHeader from './Components/Content/Content-Body/Body-header/Body-header';

function App(){

  const [posts, setPosts] = useState();

  useEffect(
    () => {
      let timerId;
      async function fetchData(){
        try {
          const response = await axios.get('http://localhost:9000/api/test'); //http://192.168.168.34:9000/api/test
          setPosts(response.data.res);
        } catch (error) {
          console.log(error);
          setPosts()
        }
        return timerId = setTimeout(fetchData,2000);
      }
      fetchData();
      return clearTimeout(timerId);
    }, [])

  return(
    <div className="App">
        <ContentHeader division = {posts?.division} area = {posts?.area}/>
        <BodyHeader plan = {posts?.plan} fact = {posts?.fact} shiftEnds = {posts?.shiftEnds}/>
        <Body data = {posts}/>
    </div>
  )
}


export default App;
