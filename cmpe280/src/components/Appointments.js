import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',

    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Message',
        dataIndex: 'message',
        key: 'message',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',

    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',

    },

];
const userdata = []
const userdata1 = [
    {
        key: '1',
        type: "Call back request",
        name: 'Shraddha',
        email: "shraddha.pathradkar@sjsu.edu",
        message: "test call back",
        date: "",
        time: ""

    }
    ,
    {
        key: '2',
        type: "Booked appointment",
        name: 'Shraddha',
        email: "",
        date: "12/09/2022",
        time: "06:00 PM"

    },
    // {
    //     key: '3',
    //     type: "Call back request",
    //     name: 'Akansha',
    //     message: "test call back",
    //     email: "akansha.gupta@sjsu.edu",
    //     date: "",
    //     time: ""
    // },
];
const Appointments = () => {
    let userDetails = localStorage.getItem("userDetails")
    return (
        <Table columns={columns} dataSource={userDetails ? userdata1 : userdata} style={{ backgroundColor: "#FF8A8A", maxWidth: "800px", marginTop: "100px", marginLeft: "270px" }} />
    )
}
export default Appointments;