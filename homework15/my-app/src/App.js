import './App.css';
import { Post } from './components/Posts.js'


let obj = [{
  name: "Anton",
  fotoAuthor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMAolAwa7gxPwCk9jyFlkloNzA3XJ5N64_iaDw6xWzXidN0KMk8u7iSyhq-Zzii0YsaII&usqp=CAU',
  nickname: '@bin',
  content: "Просто тест",
  fotoContent: 'https://kampot.org.ua/uploads/posts/1425417005_doroga.jpg'
},
{
  name: "Ivan",
  fotoAuthor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzNUj0ZzUsoDZhbkqnlmFP7KPLGtvJczbag&usqp=CAU',
  nickname: '@ill',
  content: "Я все розумію",
  fotoContent: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZm400cBUgz1JQogwhUBaHdfPz4apftmViEJE5lSD2zJlDPI578DbepopC8e6QOhfUrU&usqp=CAU'
}
]
function App() {
  return (
    <div className="App">
      {obj.map((p, i) => <Post key={i}{...p} />)}
    </div>
  );
}

export default App;
