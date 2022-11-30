import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, AlertTitle } from '@mui/material';

const RequestCallBack = () => {
    const [alert, setAlert] = React.useState(false);

    const form = useRef();


    // const successMessage = () => {
    //     return <Alert severity="success">'Call back requested, we will get back to you shortly!!</Alert>

    // }
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm('service_0mc55bc', 'template_emn91s4', form.current, 'e4VV_8gwjRaPCQZBk')
            .then((result) => {
                console.log(result.text);
                setAlert(true)
                document.getElementById("form").reset();
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <div>    <form id="form" ref={form} onSubmit={sendEmail} style={{
            background: "#FF8A8A",
            padding: "1.5em",
            borderRadius: "1em",
            justifyContent: "center"

        }}>
            <label style={{ paddingRight: "46px" }}>Name</label>
            <input type="text" name="user_name" />
            <br />
            <label style={{ paddingRight: "48px" }}>Email</label>
            <input type="email" name="user_email" />

            <label style={{ paddingRight: "23px" }} >Message</label>
            <input name="message" />
            <br />

            <input type="submit" value="Send" style={{
                backgroundColor: "red",
                border: "none",
                color: "white",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                margin: "4px 2px",
                cursor: "pointer",
                borderRadius: "10px"
            }} />

        </form>

            {alert && <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                <strong>We got your booking.</strong>
            </Alert>}
        </div>

    );
};


export default RequestCallBack;











// import { Button, TextField } from '@mui/material';
// import { Box } from '@mui/system';
// import React from 'react';
// import emailjs from 'emailjs-com';

// const RequestCallBack = () => {
//     const [email, setEmail] = React.useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

//         emailjs.sendForm('service_0mc55bc', 'template_emn91s4', email, 'e4VV_8gwjRaPCQZBk')
//             .then((result) => {
//                 window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
//             }, (error) => {
//                 console.log(error.text);
//             });
//     }
//     return (
//         <Box
//             component="form"
//             sx={{
//                 '& .MuiTextField-root': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off"
//         >
//             <div>
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="First Name"
//                     InputLabelProps={{
//                         shrink: true,
//                     }}

//                 />
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Last Name"
//                     InputLabelProps={{
//                         shrink: true,
//                     }}
//                 />
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Email"
//                     type="email"
//                     InputLabelProps={{
//                         shrink: true,
//                     }}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <TextField
//                     id="outlined-number"
//                     label="Contact Number"
//                     InputLabelProps={{
//                         shrink: true,
//                     }}
//                 />


//                 <TextField
//                     id="outlined"
//                     label="Description"
//                     InputLabelProps={{
//                         shrink: true,
//                     }}
//                 />
//                 <Button onClick={(e) => handleSubmit(e)}>Request Call</Button>
//             </div>
//         </Box>
//     );
// }

// export default RequestCallBack;
