const React = require('react');
const { useState, useRef } = React;

const Gugudan = () => { //함수 컴포넌트 (Hooks는 아니다.)
    // return <div>Hello, Hooks</div>

    const [first, setFirst] = useState(Math.ceil(Math.random() * 9))
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9))
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    // console.log(first, second, value, result)
    // return <div>{`first: ${first}`} {`second: ${second}`} {`value: ${value}`} {`result: ${result}`}</div>
    const inputRef = useRef(null)

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        // console.log(value, first, second)
        if(parseInt(value) === first * second) {
            setResult(`${first} * ${second} = ${value} 정답!`)
            setFirst(Math.ceil(Math.random() * 9))
            setSecond(Math.ceil(Math.random() * 9))
            setValue('')
            inputRef.current.focus();
        } else {
            setValue('')
            setResult('땡')
            inputRef.current.focus();
        }

    }

    // console.log('렌더링')
    return (
        <React.Fragment>
            <div>{first} 곱하기 {second} 는 ?</div>
            <form onSubmit={onSubmitForm}>
                <input type="number" ref={inputRef} onChange={onChangeInput} value={value} />
                <button type="submit">입력</button>
            </form>
            <div id="result">{result}</div>
        </React.Fragment>
    );
}

module.exports = Gugudan;
