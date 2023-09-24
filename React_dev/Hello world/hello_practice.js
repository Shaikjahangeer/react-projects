const root = document.getElementById('root');
const heading = React.createElement('div', { className: 'jahangeer' }, [React.createElement('h1', { className: 'chin' }, `I am child`)]);
const virtualDOM = ReactDOM.createRoot(root);
virtualDOM.render(heading);