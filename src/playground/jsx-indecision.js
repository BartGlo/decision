console.log("App is running!");

//JSX - JavaScript

const app = {
  title: 'ToDo List',
  subtitle: 'Just do it!',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    renderCounterApp();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderCounterApp();
};

const chooseRandom = () => {
  const min = Math.ceil(0);
  const max = Math.floor(app.options.length-1);
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
};

const onMakeDecision = () => {
  if (app.options.length){
    alert("Do: '" + app.options[chooseRandom()] + "' ciulu!");
  } else {
    alert("Add TODO's kutasiarzu jeden");
  }
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>Tasks tracker: {app.options.length > 0 ?  app.options.length : 'No tasks you lazy mofo!'}</p>
      <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do? </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <p>{app.options.length > 0 ? 'Here are your TODO\'s: ': 'No TODO\'s'}</p>
      <ol>
        {
          app.options.map((option, iterator) => <li key={iterator}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" placeholder="type TODO..."/>
        <button>Add Task</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
renderCounterApp();
