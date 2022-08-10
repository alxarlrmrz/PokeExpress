const React = require('react');

class Home extends React.Component {
    render() {
        return (
            <html style={body}>
            <head>
                <title>PokeDex</title>
            </head>
            <body style={main}>
                <h1 style={margin1}>Pokedex!</h1>
                <h3 style={margin2}>What would you like to do?</h3>
                <div>
                    <a style={margin3} href='/pokemon'><button style={button}><h3>View Pokemon</h3></button></a>
                    <a style={margin3} href='/pokemon/new'><button style={button}><h3>Add New Entry</h3></button></a>
                </div>
            </body>
            </html>
        );
    }
}

module.exports = Home;