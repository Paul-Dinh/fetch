import './App.css';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import queryString from 'query-string';
import { useState,useEffect } from 'react';
import PostFiltersForm from './components/PostFiltersForm';


// Weather API
const api = {
  key: "0a4b26fe50a993e1063e451603445e52",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  // const [postList,setPostList] = useState();
  // const [pagination,setPagination] = useState({
  //   _page: 1,
  //   _limit: 10,
  //   _totalRows: 1,
  // });
  // const [filters,setFilters] = useState({
  //   _litmit: 10,
  //   _page: 1,
  //   //Ktra title chua tu can tim
  //   title_like: '',
  // });

  // useEffect( () => {
  //   async function fetchPostList() {
  //     try {
  //       //_limit=10&_page=1
  //       const paramsString = queryString.stringify(filters);
  //       //const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
  //       const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
  //       const response = await fetch (requestUrl);
  //       const responseJSON = await response.json();
  //       console.log({responseJSON});

  //       const { data,pagination } = responseJSON;
  //       setPostList(data);
  //       setPagination(pagination);
  //     } catch(error) {
  //       console.log('Failed', error.message);
  //     }
  //   }

  //   fetchPostList();
  // },[filters]);

  // function handlePageChange(newPage) {
  //   console.log('New Page: ',newPage);
  //   setFilters({
  //     ...filters,
  //     _page: newPage,
  //   });
  // }

  // //Handle Search
  // function handleFiltersChange(newFilters) {
  //   console.log('New filters: ', newFilters);
  //   setFilters({
  //     ...filters,
  //     _page: 1,
  //     title_like: newFilters.searchTerm,
  //   });
  // }

  const [search,setSearch] = useState("");
  const [weather,setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
      console.log(result);
    });
  }

  return (
    <div className="App">
      {/* <h1>PostList</h1>
        <PostFiltersForm onSubmit={handleFiltersChange}/>
        <PostList posts={postList}/>
        <Pagination
          pagination={pagination}
          onPageChange = {handlePageChange}
        /> */}

        {/* Header */}
        <h1>Weather App</h1>

        {/* Search */}
        <div>
          <input 
            type='text' 
            placeholder='Enter city..' 
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>

        </div>

        {typeof weather.main !== "undefined" ? (
        <div>
          {/* Location */}
          <p>{weather.name}</p>

          {/* Temperature */}
          <p>{weather.main.temp} °C</p>

          {/* Condition */}
        
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
        </div>
        ) : (
          ""
        )}
    </div>
  );
}

export default App;
