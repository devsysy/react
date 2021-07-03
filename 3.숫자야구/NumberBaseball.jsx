import React, { Component } from 'react';
import Try from './Try'

function getNumbers() { // 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i=0; i<4; i+=1) {
        const chosen =  candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen)
    }
    return array;
}
// state만 바꿔주면 rendering은 리액트가 알아서 해줌
// let arr1 = []
// let arr2 = [...arr1, 1]
// arr1 === arr2 
// false
// 이 개념을 알고 있으면 됨
// true 가 되면 state에 변화가 없기 때문에 리액트가 랜더링을 안해줌
class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(), // ex: [1,3,5,7]
        tries: [] // 몇번 시도 했는지 넣을 배열, push 쓰면 안됨(리액트 불변성때문에)
    };

    onSubmitForm = (e) => {
        //this 안쓰기위해 구조분해
        const {value, result, tries, answer} = this.state
        e.preventDefault();
        if(value === answer.join('')) {
            console.log(value)
            this.setState({
                result: '홈런',
                tries: [...tries, {try: value, result: '홈런'}]
            })
            alert('게임을 다시 시작합니다.');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
        } else { // 답 틀렸으면,
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9) { //10번 이상 틀렸을 때
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`
                });
                alert('게임을 다시 시작합니다.');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else { // 10회 이내 몇 스트라이크, 몇 볼인지 알려주는 알고리즘
                for (let i=0; i<4; i+=1) {
                    if(answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if(answer.includes(answerArray[i])) {
                        ball += 1
                    }
                }
                this.setState({
                    tries: [...tries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}],
                    value: ''
                })
            }
        }
    };

    onChangInput = (e) => {
        console.log(this.state.answer)
        this.setState({
            value: e.target.value,
        })


    };
    input;



    // fruits = [
    //     {fruit: '사과', taste: '맛있다'},
    //     {fruit: '감', taste: '맛없다'},
    //     {fruit: '귤', taste: '맛있다'},
    //     {fruit: '밤', taste: '맛없다'},
    //     {fruit: '배', taste: '맛있다'},
    //     {fruit: '무화과', taste: '맛없다'},
    // ];

    render() {
        //this 안쓰기위해 구조분해
        const {value, result, tries} = this.state
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={value} onChange={this.onChangInput}/>
                </form>
                <div>시도: {tries.length}</div>
                <ul>
                    {tries.map((v, i) => {
                        return (
                            <Try key={`${i+1}차 시도:`} tryInfo={v}/>
                        )
                    })}
                    {/*{this.fruits.map((v, i) => {*/}
                    {/*    return (*/}
                    {/*        <Try key={v.fruit + v.taste} value={v} index={i} />*/}
                    {/*    );*/}
                    {/*})}*/}
                </ul>
            </>
        )
    }
}

export default NumberBaseball;
