import React, { useState } from 'react'

function Data() {

    const [update, setUpdate] = useState({
        email: "",
        password: "",
        mobile_no: "",
        address: "",
        city: "",
        state: ""
    });
    const [record, setRecord] = useState([])




    const handleclick = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name,value)
        setUpdate({ ...update, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault();
        const records = { ...update }
        setRecord([records])
        console.log(records)

        setUpdate({
            email: "",
            password: "",
            mobile_no: "",
            address: "",
            city: "",
            state: ""
        })

    }

    return (
        <>
            <form action="" onSubmit={submit}>

                <label htmlFor="email">Email</label><br></br>
                <input type="text" value={update.email}

                    onChange={handleclick}
                    name="email"></input><br></br>

                <label htmlFor="password">Password</label><br></br>
                <input type="password" value={update.password}
                    onChange={handleclick}
                    name="password"></input><br></br>

                <label htmlFor="mobile">MobileNo</label><br></br>
                <input type="text" value={update.mobile_no}
                    onChange={handleclick}
                    name="mobile_no"></input><br></br>

                <label htmlFor="address">Address</label><br></br>
                <input type="text" value={update.address}
                    onChange={handleclick}
                    name="address"></input><br></br>

                <label htmlFor="city">City</label><br></br>
                <input type="text" value={update.city}
                    onChange={handleclick}
                    name="city"></input><br></br>

                <label htmlFor="state">State</label><br></br>
                <input type="text" value={update.state}

                    onChange={handleclick}
                    name="state"></input><br></br><br></br>

                <button type="text">Submit</button>

            </form>

            <div>
                {record.map((element,id) => {
                    const {email,password,mobile_no,address,city,state}=element;
                        
                     return(
                           <div key={id}>
                               <p>{email}</p>
                               <p>{password}</p>
                               <p>{mobile_no}</p>
                               <p>{address}</p>
                               <p>{city}</p>
                               <p>{state}</p>

                        </div>
                     )
                 })}
             </div>

          
        </>
    )
}

export default Data

