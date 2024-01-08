import { useEffect, useState } from 'react'
import TodoItems from './components/TodoItems/Index'
import style from "./style.module.css"
import Inputb from './components/Inputbox/Input'
import Navb from './components/Navbar/index'
const hoster="http://localhost:8000/";
const username=prompt("Enter User Name");
function App() {
  const [arr,setarr]=useState([])
  useEffect(() => {
    console.log(hoster);
    fetch(hoster+"todos?name="+username)
      .then(response => response.json())
      .then(json => setarr(json))
      .catch(err=>console.log(err))
  }, [])
  function updatebox(id)
  {
    fetch(hoster+"update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id:id}),
    }).then(function (response) {
      if (response.status === 200) {
        const indx=arr.findIndex(d=>d.id==id);
        const data=[...arr];
        data[indx].flag=!data[indx].flag;
        setarr(data); 
      } else {
        console.log("Something went wrong");
      }
    });
  }
  function addtodo(value)
  {
    const id=Math.random();
    const obj={id:id,task:value,flag:false,createdBy:username};
    fetch(hoster+"todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    }).then(function(response){
      if(response.status===200)
      {
        const data=[...arr];
        data.push(obj);
        setarr(data);
      } 
      else{
         console.log("err");
      }
   });
  }
  function deltodo(id)
  {
    fetch(hoster+"todo", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    }).then(function (response) {
      if (response.status === 200) {
        const arr2=arr.filter((v)=>{
          return v.id!=id;
        })
        setarr(arr2);
      } else {
        callback("Something went wrong");
      }
    });
  }
  return (<>
  <Navb/>
    <div className={style.container}>
      <div className={style.left}>
        <h2>Task List</h2>
        <p>Add tasks to your list by typing to the right and pressing enter. You may then view the pending task below.</p>
        <ul>
          {arr.map(val=><TodoItems data={val} updatebox={updatebox} key={val.id} deletetodo={deltodo}/>)}
        </ul>
    </div>
    <div className={style.right}>
      <Inputb add={addtodo}/>
    </div>
    </div>
  </>
  )
}
export default App
