import React, {createRef} from 'react';

function PersonForm({takeAction,fnameRef,lnameRef,btnRef}) {
    const fnameErrRef = createRef();
    const lnameErrRef = createRef();

    const handleAddAction = () =>{
        let fname = fnameRef.current.value.trim();
        let lname = lnameRef.current.value.trim();
        let isErr = [];
        if(fname == ''){
            fnameErrRef.current.innerHTML = "please enter a first name";
            isErr.push(fnameErrRef.current.innerHTML);
        }else{
            fnameErrRef.current.innerHTML = "";            
        }
        if(lname == ''){
            lnameErrRef.current.innerHTML = "please enter a last name";
            isErr.push(lnameErrRef.current.innerHTML);
        }else{
            lnameErrRef.current.innerHTML = "";         
        }
        
        
        if(isErr.length == 0){
            takeAction({
                firstName: fname,
                lastName: lname
            })
        }
    }
    return (
        <div className="person-form-container">
            <div className="form-filed">
                <input type="text" id="firstName" placeholder='First Name' ref={fnameRef} className="form-control" />
                <span className="fnameErr" ref={fnameErrRef}></span>
            </div>
            <div className="form-filed">
                <input type="text" id="lastName" ref={lnameRef} placeholder="Last Name" className="form-control" />
                <span className="lnameErr" ref={lnameErrRef}></span>
            </div>
            <div className="form-action">
                <button className="addBtn" ref={btnRef} onClick={handleAddAction}> + Add</button>
            </div>
        </div>
    )
}

export default PersonForm;