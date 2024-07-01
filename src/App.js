import './App.css';

const Search = ()=>{
  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text'/>
    </div>
  );
} 

const List = (props) =>{
  return(
      <ul>
        {props.list.map((item)=>(
          <li key={props.item.objectID}>
            <span>{props.item.url}</span>
            <span>{props.item.author}</span>
            <span>{props.item.num_comments}</span>
            <span>{props.item.points}</span>
          </li>
        ))};
      </ul>
  );
}

function App() {
  const stories = [ 
    {
      title: 'React',
      url: 'https/google.com',
      author: 'Sallifan Nyagaka',
      num_comments: 3,
      points: 4,
      objectID:0,
    },
    {
      title: 'React',
      url: 'https/google.com',
      author: 'Sallifan Nyagaka',
      num_comments: 3,
      points: 4,
      objectID:1,
    },
    {
      title: 'React',
      url: 'https/google.com',
      author: 'Sallifan Nyagaka',
      num_comments: 3,
      points: 4,
      objectID:2,
    }
  ]

  return (
    <div className="App">
      <h1>Hacker stories</h1>
      <Search />
      <List list={stories} />

    </div>
  );
}

export default App;
