
// simple hello world example using React without JSX
// let header = React.createElement('h1', null, 'Hello, React!');
// let root = document.getElementById('root');
// ReactDOM.render(header, root);

// creating a nested element using React without JSX

let nestedElement = React.createElement('h1', {id:"header1"},[
    React.createElement('span', {id:"span1"}, 'Hello there, '),
    React.createElement('span', {id:"span2"}, 'React!')
])
let root = document.getElementById('root');
ReactDOM.render(nestedElement, root);``