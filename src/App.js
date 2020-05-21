import React from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [book, setBook] = React.useState("");
  const [result, setResult ] = React.useState([]);
  const [apiKey, setApiKey] = React.useState("AIzaSyBQ1jjf9HJSFmS0GmNE867yNNK0jDq5H7Q")

  function handleChange(event){
    const book = event.target.value;

    setBook(book);

  }

  function handleSubmit(event){

    event.preventDefault();

axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40")

.then(data => {
  console.log(data.data.items);
  setResult(data.data.items);
})
  }

  return (
    <div class="container">
      <h1>React Google Book Search</h1>
   <form onSubmit={handleSubmit}>
     <div class="form-group">
     <input type="text" onChange={handleChange} className="form-control mt-10"
      placeholder="JavaScript" autoComplete="off"/>

     </div>
     <button type="submit" className="btn btn-primary">Search</button>
     
   </form>
   {result.map(book => (
     <a target="_blank" href={book.volumeInfo.previewLink}>
       <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
       </a>
     ))}
    </div>
  );
}

export default App;
