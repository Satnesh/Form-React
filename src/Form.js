import React ,{useState}from 'react'

function Form() {

    const[update,setUpdate]=useState(

        {
            username:"",
            Password:"",
            Mobile_No:"",
            address:"",
            city:""
        }
    );

    const handleinput=(e)=>{
         const name=e.target.name;
         const value=e.target.value;
        //  console.log(name,value)
         setUpdate({...update,[name]:value})
    }

    const handlesubmit=(e)=>{
          e.preventDefault();
          const record={...update}
          console.log(record)
          setUpdate({username:"",
          Password:"",
          Mobile_No:"",
          address:"",
          city:""})
    }
    return (
        
        <>
        <form action="" onSubmit={handlesubmit}>
            <div>
            <label htmlFor="username">Username</label><br></br>
            <input type="text" autoComplete="off" name="username"
            value={update.username}
            onChange={handleinput}
            id="username" ></input>
            </div>

            <br></br>

            <div>
            <label htmlFor="username">Password</label><br></br>
            <input type="Password" name="Password" id="username" 
            
            value={update.Password}
            onChange={handleinput}
            autoComplete="off"></input>
            </div>
            <br></br>

            <div>
            <label htmlFor="username">Abcd</label><br></br>
            <input type="text" name="Mobile_No" id="username"
             value={update.Mobile_No}
             onChange={handleinput}
            autoComplete="off"></input>
            </div>

            <br></br>

            <div>
            <label htmlFor="username">Address</label><br></br>
            <input type="text" name="address" id="username" 
             value={update.address}
             onChange={handleinput}
            autoComplete="off"></input>
            </div>
            <br></br>

            <div>
            <label htmlFor="username">City</label><br></br>
            <input type="text" name="city" id="username" 
             value={update.city}
             onChange={handleinput}
            autoComplete="off"></input>
            </div>
            <br></br>

            <button type="submit">Submit</button>
            </form>  
          
        </>
    )
}

export default Form
