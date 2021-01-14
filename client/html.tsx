import React from 'react';


const Html = (props) =>
(
    <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Document</title>
        </head>
        <body>
            <div id="root"></div>
        </body>
        <script src="/build/client.bundle.js"></script>
    </html>
)

export default Html;

