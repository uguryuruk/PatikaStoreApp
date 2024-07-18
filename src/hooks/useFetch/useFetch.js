import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useFetch(url) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      // datayı parçala, responseData olarak isimlendir!

      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
      console.log(url);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData(); // when component mounts
  }, []);

  return {error, loading, data};
}
