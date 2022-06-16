import React, {useState} from 'react';
import "./style.css";
import PersonForm from './PersonForm';
import PersonTbl from './PersonTbl';

function PersonList(){
    const [persons,setPersons] = useState([]);
    const [action,setAction] = useState('add');
    const [rowId,setRowId] = useState(null)
    let fnameRef = React.useRef(null);
    let lnameRef = React.useRef(null);
    let updateBtnRef = React.useRef(null);

    const handlePersons = (person,inputs) =>{
        let n = [...persons];

        if(action == 'add'){
            n.push(person);
            setPersons(n);
            fnameRef.current.focus();
        }

        if(action == 'update'){
            n[rowId] = {
                firstName:fnameRef.current.value,
                lastName:lnameRef.current.value
            };            
            updateBtnRef.current.innerHTML = "Add";
            setAction("add");
            setPersons(n);
        }
        fnameRef.current.value = '';
        lnameRef.current.value = '';               

        
    }
   
    const handleEdit = (id) =>{
        let pdata = persons[id];
        fnameRef.current.value = pdata.firstName;;
        lnameRef.current.value = pdata.lastName; 
        updateBtnRef.current.innerHTML = 'Update';
        setAction("update");
        setRowId(id);
    }
    
    const handleDelete = (id) =>{
        let n = [...persons];
        n.splice(id, 1);
        setPersons(n);
    }
    
    return (
        <div>
            <PersonForm  
                fnameRef={fnameRef} 
                lnameRef={lnameRef} 
                btnRef={updateBtnRef} 
                takeAction={handlePersons}                
            />
            <PersonTbl people={persons} editAction={handleEdit} removeAction={handleDelete}/>
        </div>
    )
}   

export default PersonList;