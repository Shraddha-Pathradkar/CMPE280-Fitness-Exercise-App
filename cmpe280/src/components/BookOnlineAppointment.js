import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Alert, AlertTitle, Button } from '@mui/material';

function BookOnlineAppointment() {

    const [alert, setAlert] = React.useState(false);
    const [value, setValue] = React.useState(
        dayjs('2022-12-01T21:11:54')
    );

    const handleChange = (newValue) => {
        setValue(newValue);
    };


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <Stack spacing={3} >
                <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                    label="Time"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                <Button style={{
                    marginTop: "20px",
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
                }} onClick={() => setAlert(true)} >Book Appointment</Button>
            </Stack>
            {alert && <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                <strong>We got your booking.</strong>
            </Alert>}
        </LocalizationProvider>
    );
}
export default BookOnlineAppointment;
