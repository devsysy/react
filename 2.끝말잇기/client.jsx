const React = require('react');
const ReactDom = require('react-dom');

// class WordRelay extends React.Component {
//     state = {
//
//     }
// }
const WordRelay = require('./WordRelay');

ReactDom.render(<WordRelay />, document.querySelector('#root'));