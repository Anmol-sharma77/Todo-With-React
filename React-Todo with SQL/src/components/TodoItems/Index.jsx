import style from './style.module.css'
export default function TodoItems({data,updatebox,deletetodo}){
    // data=data.data;
    function update(){
        updatebox(data.id);
    }
    function deltodo()
    {
        deletetodo(data.id);
    }
   return(
    <>
    <li>
    {(data.flag)?<strike><p>{data.task}</p></strike>:<p>{data.task}</p>}
    <button onClick={deltodo}>X</button>
    <input type="checkbox" checked={data.flag} onChange={update}/>
    </li>
    </>
   )
}