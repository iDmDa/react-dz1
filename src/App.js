import logo from './logo.svg';
import './App.css';

function App() {
  const txt = "Текст передан через props";
  return (
    <div>
      <h1>Передача текста</h1>
      <Message content = {txt}/>
    </div>
  );
}

function Message({content}) {
  return (
    <p className='paragr'>{content}</p>
  )
}

export default App;
