import React, { Component } from 'react';
import Try from './Try'

function getNumbers() { // 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [] // 몇번 시도 했는지 넣을 배열
    };

    onSubmitForm = (e) => {
        e.defaultPrevented();
        console.log(this.state.value)

    };

    onChangInput = (e) => {
        this.setState({
            value: e.target.value,
        })


    };
    input;



    fruits = [
        {fruit: '사과', taste: '맛있다'},
        {fruit: '감', taste: '맛없다'},
        {fruit: '귤', taste: '맛있다'},
        {fruit: '밤', taste: '맛없다'},
        {fruit: '배', taste: '맛있다'},
        {fruit: '무화과', taste: '맛없다'},
    ];

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.fruits.map((v, i) => {
                        return (
                            <Try key={v.fruit + v.taste} value={v} index={i} />
                        );
                    })}
                </ul>
            </>
        )
    }
}

export default NumberBaseball;
