import axios from "axios";  
axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    const results = response.data;
    for (const result_in_data of results) {
        console.log(`${result_in_data.id} ${result_in_data.title}`);
    }
});