// import React, { Component } from 'react';
// import './Posts.css';

// export default class Posts extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             posts: [],
//         }
//     }
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => this.setState({posts: data}));
//     }
//     // console.log();
//   render() {
//       const postItems = this.state.posts.map(post => (
//           <div key={post.id}>
//               <h3>{post.title}</h3>
//               <p>{post.body}</p>
//           </div>
//       ))
//     return (
//         <div className='text-center'>
//             <h2>Posts</h2>
//             {postItems}
//         </div>
//     )
//   }
// }
