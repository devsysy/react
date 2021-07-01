const React = require('react');
const { Component } = React

class WordRelayClass extends Component {
    state = {
        word: '제로초',
        value: '',
        result: '',
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log(this.state.word[this.state.word.length - 1])
        console.log(this.state.value[0])
        if(this.state.word[this.state.word.length - 1] === this.state.value[0]){
            this.setState({
                result: '딩동댕',
                word: this.state.value,
                value: '',
            })
            this.input.focus();
        } else {
            this.setState({
                result: '땡',
                value: ''
            })
            this.input.focus();
        }
    };

    onChangeInput = (e) => {
        this.setState({value: e.target.value});
    };

    input;
    onRefInput = (c) => {
        this.input = c;
    };
    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </>
        )// <h1>{this.state.text}</h1>
    }
}

module.exports = WordRelayClass;