import { ADD } from './type'
import { SUB } from './type'

export const addvalue = (payload) => {
    console.log('payload', payload);
        return{
          type: ADD,
          payload
        }
};

export const subvalue = (payload) => {
    console.log('payload', payload);
        return{
          type: SUB,
          payload
        }
};

export const mulvalue = (payload) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: 'MUL',
        payload,
        data: posts,
      })
    );
}