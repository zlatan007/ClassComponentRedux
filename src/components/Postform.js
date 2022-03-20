// import React, { Component } from 'react';
// import './Posts.css';

// class PostForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//             body: '',
//         };
//         this.onChange = this.onChange.bind(this);
//     }
//   render() {
//     return (
//         <div className='text-center'>
//             <h2>Add Posts</h2>
//             <form>
//                 <div>
//                     <label>Title: </label>
//                     <br />
//                     <input
//                     type="text"
//                     name="title"
//                     onChange={this.onChange}
//                     value={this.state.title}
//                     />
//                 </div>
//                 <br />
//                 <div>
//                     <label>Body: </label>
//                     <br />
//                     <textarea
//                     name="body"
//                     onChange={this.onChange}
//                     value={this.state.body}
//                     />
//                 </div>
//                 <br />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
//   }
// }

// export default PostForm;