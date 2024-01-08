import style from './style.module.css'
export default function inputb({add}){
    function textsubmit(v)
    {

        if(v.key=="Enter"){
            if(v.target.value.trim()!=""){
            add(v.target.value);
            v.target.value="";
            }
            else
            alert('Please enter something!!');
        // console.log(v.target.value);
    }
    }
    return(
        <div>
        <h2>Enter the Todo</h2>
        <input type="text" onKeyDown={textsubmit} placeholder="Enter something"/>
        </div>
    )
}