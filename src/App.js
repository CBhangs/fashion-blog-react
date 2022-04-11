import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Article from './components/Article';
// import { Firstpic } from './components/FirstPic';

function App() {
  const navBar= ["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"]
  return (
    <div className="App">
      <Header title='Sartres List' subTitle='Better-Dressed People'/>
      < Nav navBar={navBar} />
      < Article
        date="1/12/2020"
        title="On the Street in Brooklyn" 
        img="https://images.unsplash.com/photo-1562137369-1a1a0bc66744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZHJlc3N8ZW58MHx8MHx8&w=1000&q=80"
        article="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit impedit doloribus quod totam sapiente. Voluptatem possimus illum in ut delectus obcaecati assumenda odio veniam, repudiandae cumque. Natus dolores dolore fugiat?"
      />
      <br></br>
      < Article
        date="1/13/2020"
        title="Three Friends" 
        img="https://imgix.bustle.com/uploads/shutterstock/2020/2/27/db14e1cd-5832-48b3-950a-2adfe92aac92-shutterstock-1501093226.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
        article="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit impedit doloribus quod totam sapiente. Voluptatem possimus illum in ut delectus obcaecati assumenda odio veniam, repudiandae cumque. Natus dolores dolore fugiat?"
      />
      <br></br>
      < Nav navBar={navBar} />
    </div>
  );
}

export default App;
