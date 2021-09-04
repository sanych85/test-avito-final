import {FETCH_COMMENT_REQUEST, FETCH_COMMENT_SUCCESS, FETCH_NEWS_FAIL} from "../actions"
import axios from 'axios';
import { baseUrl } from '../../apiInfo';
export const getComments = async(array)  => {
  if (array) {
    //   dispatch({type:FETCH_COMMENT_REQUEST})
    console.log('array', array);
    try {
      const promises = array.map((item) => {
        return axios.get(`${baseUrl}/item/${item}.json?print=pretty`);
        // console.log(data)
      });
      console.log('comment promices', promises);
      const result = await Promise.all(promises);
      console.log('comments result', result);
    //   dispatch({type:FETCH_COMMENT_SUCCESS, payload:result})
    } catch (err) {
      console.log(err);
    }
  }
  return
};
