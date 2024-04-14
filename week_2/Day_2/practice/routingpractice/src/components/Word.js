import React from 'react';


function Word(props) {
    const {word, color1, color2} = props;

    return (
        <h1 style={{color: color1, backgroundColor: color2}}>The word is: {word}</h1>
    );
}

export default Word;