import React, {Component} from 'react';

class Try extends Component {
    render() {
        const {tryInfo} = this.props
        return (
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
            // <div>
            //     <b>{this.props.value.fruit}</b> - {this.props.value.taste} - {this.props.index} - {this.props.value.fruit.toString()}
            //     <div>컨텐츠</div>
            //     <div>컨텐츠1</div>
            //     <div>컨텐츠2</div>
            //     <div>컨텐츠3</div>
            // </div>
        );
    }
}

export default Try;