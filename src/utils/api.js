import axios from "axios";

const BASE_URL ="https://api.themoviedb.org/3";

const TMDB_TOKEN ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzBmNjczOGQ0NzZlYTZlNzQ3ZGE0NGU0MmUyODM0MiIsInN1YiI6IjY1NDQ5YTE1ZmQ0ZjgwMDBhZTI5OTA0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sCDyuij6pWPlmtDAIZnmdxLg6vKZmz5qRxBP98CDu7U';

const headers ={
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try{
        const {data} = await axios.get(BASE_URL + url ,{
            headers,
            params
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}