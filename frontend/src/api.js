import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('/');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default fetchData;
