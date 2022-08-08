const React = require('react');
const Pokemon = require('../models/pokemon');


class Edit extends React.Component {
    render() {
        const pokemon = this.props.pokemon;
        return (
            <html style={body}>
            <head>
                <title>Edit Pokemon!</title>
            </head>
            <body style={main}>
                <h1 style={margin1}>Update Your Pokedex Entry</h1>
                <h3 style={margin2}>Tell me about the Pokemon!</h3>
                    {}
                    <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="POST">
                        Name: <input style={margin3} type="text" name="name" placeholder='Name'/><br/>
                        Image: <input style={margin3} type="text" name="img" placeholder='Image URL' /><br/>
                        <input type="submit" name="" value="Edit Entry"/>
                    </form>
            </body>
            </html>
        );
    }
}

module.exports = Edit;