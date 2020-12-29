import logo from './logo.svg';
import './App.css';

import React from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";

const todoItems = [
    {
        id: 1,
        title: "Go to Market",
        description: "Buy ingredients to prepare dinner"
    }, {
        id: 2,
        title: "Study",
        description: "Read Algebra and History textbook for upcoming test"
    }, {
        id: 3,
        title: "Sally's books",
        description: "Go to library to rent sally's books"
    }, {
        id: 4,
        title: "Article",
        description: "Write article on how to use django with react"
    }
];

function App() {
    const [data, setData] = React.useState([]);
    React.useEffect( () => {
        const fetchData = async () =>{
            const result = await axios.get("heroes");
            setData(result.data);
        };
        fetchData();
  }, []);
  const renderItems = () => {
      return data.map(item => {
          return (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <span title={item.name}>
                      {item.alias}
                  </span>
                  <span>
                      <button className="btn btn-secondary mr-2">
                          Edit
                      </button>
                      <button className="btn btn-danger">Delete
                      </button>
                  </span>
              </li>
          )
      })
  };
    return (<main className="content">
        <h1 className="text-white text-uppercase text-center my-4">HEROES</h1>
        <div className="row ">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                    <div className="">
                        <button className="btn btn-primary">Add hero</button>
                    </div>
                    <ul className="list-group list-group-flush">
                        {renderItems()}
                    </ul>
                </div>
            </div>
        </div>
    </main>);
}
export default App;
