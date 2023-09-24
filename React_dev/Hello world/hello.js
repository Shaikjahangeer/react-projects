const heading = React.createElement('div', {
  className: 'main'
}, [React.createElement('div', {
  className: 'heading'
}, [React.createElement('h1', {
  className: 'child1'
}, 'I am a child'), React.createElement('h2', {
  className: 'child'
}, 'I am a child')]), React.createElement('div', {
  className: 'heading'
}, [React.createElement('h1', {
  className: 'child1'
}, 'I am a child'), React.createElement('h2', {
  className: 'child'
}, 'I am a child')])])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
