import React, {useState} from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  const [showmore, setshowmore] = useState(false);
  return (
    <section>
      <div className='title'>
        <h2>Ours Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours && tours.map((item)=> {
          return (
              <Tour key={item.id} item={item} {...item} removeTour={removeTour}/>
        )
        })}
      </div>
      <button>Show More</button>
    </section>
  )
};

export default Tours;

// const obj1 = {
//   name:"abc",
//   age: 25
// }

// const obj2 = {
//   name1:"xyz",
// }

// const obj3 = { ...obj1, {...obj2} };
// // console.log(...obj2);
// console.log(obj3)
