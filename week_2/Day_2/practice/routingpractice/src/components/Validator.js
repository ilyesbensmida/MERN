import React from 'react';
import Number from './Number';
import Word from './Word';

const WordNum = ({input}) => {
    return (
        isNaN(+input) ? <Word word={input} /> : <Number num={input}/>
    )
}

export default WordNum;