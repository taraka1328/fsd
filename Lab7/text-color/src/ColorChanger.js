import React, { Component } from 'react';

class ColorChanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textColor: 'black',
            fontSize: '20px',
            fontstyle: 'normal',
            textDecoration: 'none',
        };
        this.watermarkStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
            opacity: '0.3',
            fontFamily: 'Arial, sans-serif',
            fontSize: 'Normal',
            color: 'blue',
        };
    }

    handleColorChange = (event) => {
        this.setState({ textColor: event.target.value });
    };

    handleFontSizeChange = (event) => {
        this.setState({ fontSize: event.target.value + 'px' });
    };

    handleFontStyleChange = (event) => {
        this.setState({ fontstyle: event.target.value });
    };

    handleDecorationChange = (event) => {
        this.setState({ textDecoration: event.target.value });
    };

    render() {
        const { textColor, fontSize, fontstyle, textDecoration } = this.state;
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <div style={this.watermarkStyle}>K.T.L.Prasanna</div>
                <label htmlFor='colorPicker'>Set The text color:</label>
                <input type="color" onChange={this.handleColorChange} id='colorPicker' value={textColor} />
                <label htmlFor='fontSize'>Set Font Size:</label>
                <input type="number" id='fontSize' value={parseInt(fontSize)} onChange={this.handleFontSizeChange} />
                <label htmlFor='fontStyle'>Set Font Style:</label>
                <select id='fontStyle' value={fontstyle} onChange={this.handleFontStyleChange}>
                    <option value="normal">Normal</option>
                    <option value="italic">Italic</option>
                </select>
                <label htmlFor='textDecoration'>Set Text Decoration:</label>
                <select id='textDecoration' value={textDecoration} onChange={this.handleDecorationChange}>
                    <option value="none">None</option>
                    <option value="underline">Underline</option>
                    <option value="overline">Overline</option>
                    <option value="line-through">Line-through</option>
                </select>
                <div style={{ color: textColor, marginTop: '20px', fontFamily: 'Arial,sans-serif', fontSize: fontSize, fontStyle: fontstyle, textDecoration: textDecoration }}>
                    <h1>It's your choice, see the magic!</h1>
                </div>
            </div>
        );
    }
}

export default ColorChanger;