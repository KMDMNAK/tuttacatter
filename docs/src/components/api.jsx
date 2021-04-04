import React from 'react'

const API = ({ method, url, color, mColor }) => (
    <div style={{
        height: "60px",
        width: "100%",
        backgroundColor: color,
        display: "inline-block",
        padding: "16px"
    }}>
        <span style={{
            verticalAlign: "middle",
            backgroundColor: mColor,
            textAlign: 'center',
            position: 'absolute',
        }}>
            <span style={{
                padding:'15px',
                color: 'white',
                fontSize: '16px'
            }}>
                {method}
            </span>
        </span>
        <span style={{
            left : "30%",
            position: 'absolute'
        }}>{url}</span>
    </div>
)

export const POST = ({ url }) => <API method="POST" url={url} color="#dcffdc" mColor="#46c890" />