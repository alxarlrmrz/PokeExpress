const React = require('react');

class New extends React.Component {
    render() {
        return (
            <html style={body}>
            <head>
                <title>New Pokemon!</title>
            </head>
            <body style={main}>
                <h1 style={margin1}>You Discovered A New Pokemon!!</h1>
                <h3 style={margin2}>Tell me about the Pokemon!</h3>
                    {/* NOTE: action will be the route, method will be the HTTP verb */}
                    <form action="/pokemon" method="POST">
                        Name: <input style={margin3} type="text" name="name" placeholder='Name'/><br/>
                        Image: <input style={margin3} type="text" name="img" placeholder='Image URL' /><br/>
                        <input type="submit" name="" value="Submit Entry"/>
                    </form>
            </body>
            </html>
        );
    }
}

module.exports = New;