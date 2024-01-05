import style from './style.module.css'
export default function inputb({add}){
    function textsubmit(v)
    {

        if(v.key=="Enter"){
            v.target.value=v.target.value.trim();
            if(v.target.value!=""){
            add(v.target.value);
            v.target.value="";
            }
            else
            alert('Please enter something');
        // console.log(v.target.value);
    }
    }
    return(
        <div>
        <h2>Enter the Todo</h2>
        <input type="text" onKeyDown={textsubmit} placeholder="Enter something"/>
        {/* <button onClick={textsubmit}>Submit</button> */}
        </div>
    )
}