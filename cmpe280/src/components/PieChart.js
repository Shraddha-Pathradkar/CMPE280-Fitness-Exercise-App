import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import { Typography } from '@mui/material';

const PieChart = () => {
    const data = [
        {
            type: 'Cardio',
            value: 27,
        },
        {
            type: 'Upper arms',
            value: 25,
        },
        {
            type: 'Upper legs',
            value: 18,
        },
        {
            type: 'Waist',
            value: 15,
        },
        {
            type: 'Back',
            value: 10,
        },
        {
            type: 'Shoulders',
            value: 5,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return (
        <div>


            <Typography style={{
                position: "absolute",
                right: "40px",
                top: "30px",
                width: "700px",
                height: "700px",
                marginTop: "-10px",
                paddingLeft: "300px"
            }} fontSize="22px" fontFamily="Alegreya" lineHeight="35px" >Public Exercises Pattern</Typography>

            <Pie {...config} style={{
                position: "absolute",
                right: "40px",
                top: "30px",
                width: "500px",
                height: "500px",
                marginTop: "-50px"
            }} />



        </div>
    );
};

export default PieChart