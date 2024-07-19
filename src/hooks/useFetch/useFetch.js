import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useFetch(url) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      // datayı parçala, responseData olarak isimlendir!

      console.log(url);
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
      // console.log(responseData);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(); // when component mounts
  }, [url]);

  return {error, loading, data};
}
