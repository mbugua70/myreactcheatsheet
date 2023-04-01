// import logo from './logo.svg';
import React from 'react';
import './App.css';
import ListReducer from './rctbookcomponent/ListReducer';
// import { v4 as uuidv4 } from 'uuid';
// // // exercuting functions

// // function getGift(gift) {
// //   return gift;
// // }




// // // creating the list of arrays

// // const lists = [
// //   {
// //     title: 'john',
// //     author: 'njeri',
// //     url: 'https://webcome.com',
// //     year: 1988,
// //     object_id: 'new_el'
// //   },
// //   {
// //     title: 'mary',
// //     author: 'raya',
// //     url: 'https://copia.com',
// //     year: 2022
// //   }
// // ]

// // const web_one = [
// //   {
// //     title: "freecodecamp",
// //     url: "https//www.freecodecamp.com",
// //     students: 209,
// //     teachers: 29,
// //     course1: "html",
// //     course2: "javascript",
// //     webID: "tutorial_el"
// //   }
// // ]
// // // displaying objects
// // const welcome_msg = {
// //   'name': 'john',
// //   'mother': 'njeri',
// //   'age': 25,
// //   'children': 5
// // }
// // const title = 'React';
//  const App = () => (

// //   <div>

// //     <div class="header">
// //       <ul>
// //         <li>HOME</li>
// //         <li>CONTACT</li>
// //         <li>SERVICES</li>
// //         <li>ABOUT</li>
// //       </ul>
// //     </div>
// //     <div class="container">
// //       <p> The authors name is {welcome_msg.name} and is {welcome_msg.age} years old</p>
// //       {/* learning about JSX and HTML Attributes */}
// //       {/* we have used htmlFor instead of for in html */}

// //       <div>
// //         {/* below code shows how you can display a variable inside the the returned components we use the {} braces */}
// //         <p>Hello {title}</p>
// //         <p> She gave me {getGift('flowers')} as christmas gift</p>
// //       </div>
// //     </div>
// //     <div className="container_two">
// //       <ul>
// //         <li>{lists.author}</li>
// //         {/* the use of key attribute which help in re-ordering */}
// //         {lists.map((items) => (
// //           <li key={items.object_id}>{items.author}</li>
// //         ))}

// //       </ul>
// //     </div>
// //     <Search />
// //     {/* we can use our List component inside our App component */}
// //     <List />
// //   </div >



// // );

// // // creating another component
// // // we will call it List component

// // function List() {
// //   return (
// //     <div className="webstaff">
// //       {web_one.map(function (web) {
// //         return (
// //           <li key={web.webID}>
// //             <span>{web.course1}</span>
// //             <span>{web.course2}</span>
// //             <span>{web.students}</span>
// //             <span>{web.teachers}</span>
// //           </li>
// //         );
// //       })}
// //     </div>
// //   );

// // }

// // const Search = () => {
// //   const handleChange = (event) => {
// //     console.log(event);
// //   };
// //   return (
// //     <div>
// //       <label htmlFor='firstname'></label>
// //       <input type="text" name="firstname" onChange={handleChange} />
// //     </div>

// //   );
// // }

// // // learing about react component and how one can render a react component

// // const App = () => {

// //   // creating list

// //   const programmingLang = [
// //     {
// //       title: 'React',
// //       url: 'https://reactjs.org/',
// //       author: 'Jordan Walke',
// //       num_comments: 3,
// //       points: 4,
// //       objectID: 0,
// //     },
// //     {
// //       title: 'Redux',
// //       url: 'https://redux.js.org/',
// //       author: 'Dan Abramov, Andrew Clark',
// //       num_comments: 2,
// //       points: 5,
// //       objectID: 1,
// //     },
// //   ];


// //   // const handleSearch = (event) => {
// //   //   console.log(event.target.value);
// //   // };

// //   //passing the state up the component.
// //   const [searchTerm, setSearchTerm] = React.useState('');

// //   const handleSearch = (event) => {
// //     setSearchTerm(event.target.value);
// //   };

// //   const filteredLang = programmingLang.filter((lang) => {
// //     return lang.title.toLowerCase().includes(searchTerm.toLowerCase());
// //   })
// //   // const filteredLang = programmingLang.filter((lang) => {
// //   //   return lang.javascript.toLowerCase().includes(searchTerm.toLowerCase());
// //   // })


// //   // const [text, setText] = React.useState('');
// //   // const handleInputThree = (event) => {
// //   //   setText(event.target.value);
// //   // };
// //   // const courses = [
// //   //   {
// //   //     projectID: 'list_elements',
// //   //     webdevelopment: 'freecodecamp',
// //   //     lang_one: 'HTML',
// //   //     lang_two: 'javascript',
// //   //     lang_three: 'css'
// //   //   },
// //   //   {
// //   //     framework: 'techies',
// //   //     frame_one: 'bootstrap',
// //   //     frame_two: 'tailwind',
// //   //     frame_three: 'React'
// //   //   }
// //   // ]
// //   return (
// //     <div>
// //       {/* <Search />
// //       <Button />
// //       <ButtonTwo />
// //       <InputOne /> */}
// //       {/* <InputTwo />
// //       <InputThree inpuValue={text} onInputChange={handleInputThree} />
// //       {text}

// //       <List list={courses} />
// //       <Search /> */}
// //       <SearchTwo onSearch={handleSearch} />
// //       <SearchThree onSearch={handleSearch} search={searchTerm} />
// //       <List list={filteredLang} />
// //       <FormOne />
// //       <SearchFour search={searchTerm} onSearch={handleSearch} />
// //       <ListTwo list={filteredLang} />
// //     </div>

// //   );

// // }

// // const Search = () => {
// //   const handleChange = (event) => {
// //     console.log(event);
// //   };
// //   return (
// //     <div>
// //       <label htmlFor="firstname">firstname</label>
// //       <input type="text" id="firstName" onChange={handleChange} />
// //     </div>
// //   );
// // }
// // // event handler
// // const Button = () => {
// //   const handleClick2 = () => {
// //     console.log('button clicked');
// //   }
// //   return (
// //     <form>
// //       <input type="button" name="button_el" onClick={handleClick2} />
// //     </form>
// //   );
// // }

// // const ButtonTwo = () => {
// //   // updating some state using userState() method
// //   const [count, setCount] = React.useState(0);
// //   function handleClick3() {
// //     setCount(count + 1);
// //   }

// //   return (
// //     <div>
// //       Count:{count};
// //       <button type="button" onClick={handleClick3}>submit</button>
// //     </div>
// //   );
// // }

// // const InputOne = () => {
// //   const [text, setText] = React.useState('');
// //   const handleInputOne = (event) => {
// //     setText(event.target.value);
// //   };
// //   return (
// //     <div>
// //       <input type="text" value={text} onChange={handleInputOne} />
// //       {text}
// //     </div>
// //   );
// // }

// // inline event handler
// // inline event handler can be used to pass the parameter to the function that is calling code to tht event
// // const InputTwo = () => {
// //   console.log('inputTwo');
// //   const [count, setCount] = React.useState(0);
// //   function handleInputTwo(event) {
// //     setCount(count + 1);
// //   }
// //   return (
// //     <div>
// //       {count}
// //       <button type="button" onClick={(event) => handleInputTwo(event)}>submit</button>
// //     </div>
// //   );
// // }

// // // callback event handlers

// // const InputThree = ({ inpuValue, onInputChange }) => {
// //   console.log('inputThree');
// //   return (
// //     <input type="text" value={inpuValue} onChange={onInputChange} />
// //   );
// // }

// // const List = (props) => {
// //   return (
// //     <div>
// //       <ul>
// //         {props.list.map((items) => (
// //           <li key={items.projectID}>
// //             <span>{items.webdevelopment}</span>
// //             <span>{items.lang_one}</span>
// //             <span>{items.lang_three}</span>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>

// //   );
// // }

// // const Search = () => {
// //   const [searchTerm, setSearchTerm] = React.useState('');
// //   const handleState = (event) => {
// //     setSearchTerm(event.target.value);
// //   }
// //   return (
// //     <div>
// //       <label htmlFor='search'>
// //         Search:
// //       </label>
// //       <input id="search" type="text" onChange={handleState} />
// //       <p>
// //         search for <strong>{searchTerm}</strong>
// //       </p>
// //     </div>
// //   );
// // }

// // const SearchTwo = (props) => {
// //   const [searchTerm, setSearchTerm] = React.useState('');
// //   const handlechange = (event) => {
// //     setSearchTerm(event.target.value);
// //     props.onSearch(event);
// //   }

// //   return (
// //     <div>
// //       <label htmlFor='search'>
// //         Search:
// //       </label>
// //       <input id="search" type="text" onChange={handlechange} />
// //       <p>
// //         searching for <strong>{searchTerm}</strong>
// //       </p>
// //     </div>
// //   );
// // }

// // use of state up the component example

// // const SearchTwo = (props) => {
// //   return (
// //     <div>
// //       <label htmlFor="search">search:</label>
// //       <input type="text" id="search_el" onChange={props.onSearch} />
// //     </div>
// //   );
// // };

// // const List = (props) => {
// //   return (
// //     <div>
// //       <ul>
// //         {props.list.map((items) => (
// //           <li key={items.title}>
// //             {items.title}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>

// //   );
// // }

// // // react controlled component
// // const SearchThree = (props) => {
// //   return (
// //     <div>

// //       <input type="text" id="input_el" name="username" value={props.search} onChange={props.onSearch} />
// //     </div>
// //   )
// // }


// // // PROPS HANDLING
// // //Object destructuring

// // const FormOne = () => {
// //   const user = {
// //     nameOne: 'john',
// //     nameTwo: 'mbugua',
// //   };
// //   // without object destructuring

// //   const firstName = user.nameOne;
// //   const secondName = user.nameTwo;
// //   console.log(firstName + '' + secondName);
// //   const user_two = {
// //     firstname: 'raya',
// //     secondname: 'kaori',
// //   };
// //   // with object destructuring.
// //   const { engName, lastName } = user_two;
// //   console.log(engName + ' ' + lastName);
// // };
// // //  the use of object destructuring in props

// // const SearchFour = (props) => {
// //   const { search, onSearch } = props;
// //   return (
// //     <div>
// //       <input type="text" id="search" value={search} onChange={onSearch} />
// //     </div>
// //   );
// // }

// // // object destructuring

// // const ListTwo = ({ list }) => (
// //   <div>
// //     <ul>
// //       {list.map((item) => (
// //         <Item key={item.objectID} item={item} />
// //       ))}
// //     </ul>
// //   </div>
// // );

// // const Item = ({ item }) => (
// //   <div>
// //     <li>
// //       <span> {item.author}</span>
// //     </li>
// //   </div>
// // );

// // React with List key
// // const InitialLists = [
// //   'learn React', 'learn web'
// // ]

// // use of stable identifier to solve the index array problem
// const InitialLists = [
//   {
//     id: 'a',
//     name: 'learn React'
//   },
//   {
//     id: 'b',
//     name: 'learn GraphQl'
//   }

// ]

// const AlteredList = [
//   {
//     id: 'a',
//     name: 'john'
//   },
//   {
//     id: 'b',
//     name: 'mary'
//   }
// ]

// const list = [
//   {
//     title: 'React',
//     url: 'https://freecodecamp.com',
//     author: 'john',
//     num_comments: 4,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'redux',
//     url: 'https://redux.js.come',
//     author: 'mbugua',
//     num_comments: 3,
//     points: 5,
//     objectID: 1
//   }
// ]

// const updateList = [
//   {
//     id: 'a',
//     task: 'learn React',
//     isComplete: false,
//   },
//   {
//     id: 'b',
//     task: 'learn Redux',
//     isComplete: true,
//   },
// ];

// const removelist = [
//   {
//     id: 'a',
//     firstname: 'john',
//     lastname: 'mbugua',
//     year: 1990,
//   },
//   {
//     id: 'b',
//     firstname: 'mary',
//     lastname: 'njeri',
//     year: 1997,
//   },
// ];


// const asyndata = [
//   {
//     title: 'React',
//     url: 'https://freecodecamp.com',
//     author: 'john',
//     num_comments: 4,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'redux',
//     url: 'https://redux.js.come',
//     author: 'mbugua',
//     num_comments: 3,
//     points: 5,
//     objectID: 1
//   }


// ]

// // javascript fake api
// // we will first create a list

// const idOne = uuidv4();
// const idTwo = uuidv4();


// let users = {
//   [idOne]: {
//     id: '1',
//     firstName: 'John',
//     lastName: 'mbugua',
//     isDeveloper: true,
//   },

//   [idTwo]: {
//     id: '2',
//     firstName: 'mary',
//     lastName: 'raya',
//     isDeveloper: false,
//   },

// }
// // the code below will return our object values as arrys
// const getUser = () => {
//   return new Promise((resolve, reject) => {
//     if (!users) {
//       return setTimeout(() => {
//         return reject(new Error('Users not found'));
//       }, 250);

//     }
//     // resolve(Object.values(users));
//     setTimeout(() => {
//       return resolve(Object.values(users));
//     });
//   });
//   // return Object.values(users);
// }

// getUser()
//   .then(result => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

// console.log(getUser('1'));


// // our custom hook is just function around useState and useEffect

// // const useCustomManageState = (initialState) => {
// //   // const [searTerm, setSearchTerm] = React.useState(
// //   // for usability we will use generic value
// //   const [value, setValue] = React.useState(
// //     // we will provide initial state and pass it as our parameter
// //     localStorage.getItem('value') || initialState
// //   );

// //   React.useEffect(() => {
// //     localStorage.setItem('value', value);
// //   }, [value]);

// //   // we wil return values needed by our App as an array
// //   return [value, setValue];
// // };


// // using flexible key to fix problem with local storage.

// const useCustomManageState = (key, initialState) => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem(key) || initialState
//   );

//   React.useEffect(() => {
//     localStorage.setItem(key, value);
//   }, [value, key]);
//   return [value, setValue];
// };

// // CONDITIONAL RENDERING
// // Conditional rendering if

// const renderList = [
//   // { id: '1', firstName: 'john', lastName: 'mbugua' },
//   // { id: '2', firstName: 'denis', lastName: 'kamau' },
// ];

// const nestedlist = [
//   { id: '1', firstName: 'john', lastName: 'mbugua' },
//   { id: '2', firstName: 'mary', lastName: 'kamau' },
// ];

// // reducer function and useReducer

// // const storiesReducer = (state, action) => {
// //   if (action.type === 'SET_STORIES') {
// //     return action.payload;
// //   } else {
// //     throw new Error();
// //   }
// // }


// const App = () => {
//   // conditional rendering
//   const isEdit = false;

//   // conditional rendering : enum

//   // const Notification_status = {
//   //   info: 'Did you knwo...',
//   //   warning: 'Be careful here...',
//   //   error: 'Something went wrong...',
//   // };


//   // adding an Item to list
//   // handler function
//   const [list, setList] = React.useState(AlteredList);
//   const [name, setName] = React.useState('');
//   function handleChange(event) {
//     setName(event.target.value);
//   }
//   function handleAdd() {
//     // we will use the object property shorthand becoz the variable name is equal to the object property name
//     const newList = list.concat({ name, id: uuidv4() });
//     setList(newList);
//     setName('');
//   }

//   const initialstories = [
//     {
//       title: 'React',
//       url: 'https://freecodecamp.com',
//       author: 'john',
//       num_comments: 4,
//       points: 4,
//       objectID: 0,
//     },
//     {
//       title: 'redux',
//       url: 'https://redux.js.come',
//       author: 'mbugua',
//       num_comments: 3,
//       points: 5,
//       objectID: 1
//     }
//   ];

//   // creation of custom hook

//   // lifting the state up so that can be able to used by other components down the tree and not only the Search component

//   // const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search') || 'React');

//   const [searchTerm, setSearchTerm] = useCustomManageState('search', 'React');

//   const [inputTerm, setInputTerm] = React.useState(
//     localStorage.getItem('search') || 'initial'
//   );


//   // useReducer
//   // the use of useReducer instead of usestate below

//   // const [story, dispatchStories] = React.useReducer(storiesReducer, []);
//   // const handleRemovestrories = (item) => {
//   //   const newStories = story.filter((story) => item.objectID !== story.objectID);
//   //   dispatchStories({
//   //     type: 'SET_STORIES',
//   //     action: 'newStories',
//   //   });
//   // };

//   const [stories, setStories] = React.useState(initialstories);
//   const handleRemoveStory = (item) => {
//     const newStories = stories.filter((story) => item.objectID !== story.objectID);
//     setStories(newStories);

//   }
//   const onSubmit = username => console.log(username);

//   // const [username, setusername] = React.useState('');

//   // const handleInput = (event) => {
//   //   setusername(event.target.value)
//   // }


//   // we will use React.useEffect to trigger the side effects

//   // React.useEffect(() => {
//   //   localStorage.setItem('search', searchTerm);
//   // }, [searchTerm]);

//   React.useEffect(() => {
//     localStorage.setItem("search", inputTerm);
//   }, [inputTerm]);

//   const handleSearchTwo = (event) => {
//     setInputTerm(event.target.value);
//     // localStorage.setItem('search', event.target.value);
//   }
//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     // localStorage.setItem('search', event.target.value);
//   }
//   const [toggle, setToggle] = React.useState(true);
//   const handleToggle = () => {
//     setToggle(!toggle);
//   };
//   const searchedList = initialstories.filter((story) => {
//     return story.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
//   });


//   // reusable components
//   // inorder to make this button more reusable we will have to extract it to its own component
//   // const handleClick = () => {
//   //   return console.log("clicked");
//   // }

//   return (
//     <div>
//       <List />
//       {/* <ListTwo list={stories} /> */}
//       <ListThree item={stories} />
//       <ListFour lists={searchedList} onRemoveItem={handleRemoveStory} />
//       {/* <InputOne search={searchTerm} onSearch={handleSearch} /> */}
//       {/* <Search search={searchTerm} onSearch={handleSearch} /> */}

//       <Toggler toggle={toggle} onToggle={handleToggle} />

//       <Togglers toggle={toggle} onToggle={handleToggle} />

//       <Toggle toggle={toggle} onToggle={handleToggle} />

//       {/* <Form search={searchTerm} onSearch={handleSearch} /> */}
//       {/* <FormIn search={searchTerm} onSearch={handleSearch} /> */}
//       {/* reusable component */}
//       <InputWithLabel
//         id="search"
//         // label="Search"
//         value={searchTerm}
//         isFocused
//         onInputChange={handleSearch}
//       >
//         Search:
//       </InputWithLabel>

//       <InputWithSearch
//         type="text"
//         id="search_input"
//         values={inputTerm}
//         onSearchChange={handleSearchTwo}
//       >
//         Fetch:
//       </InputWithSearch>

//       <Button handleClick={() => console.log('clicked btn one')}>
//         clicked btn one
//       </Button>
//       <Button type="submit" handleClick={() => console.log('clicked btn two')} >
//         clicked btn two
//       </Button>
//       <Button handleClick={() => console.log('clicked button three')}>
//         Clicked btn three!
//       </Button>

//       {/* React component composition */}

//       {/* <UsernameForm value={username} onSubmit={handleInput}></UsernameForm> */}

//       <UsernameForm onSubmit={onSubmit} />

//       {/* refs in React */}

//       <Counter />

//       <ComponentWithRefInstanceVariable />

//       <ListWithStableIndex />

//       <AddList
//         name={name}
//         onChange={handleChange}
//         onAdd={handleAdd}
//       />

//       <Lists list={list} />

//       <UpdateList />

//       <RemoveList />
//       <AsyncData />

//       {/* conditional rendering */}

//       <RenderIf />

//       <RenderTernary isEdit={isEdit} />
//       <NestedList />

//       {/* <StoryRemove dispatchStories={dispatchStories} story={story}/> */}

//     </div>
//   );
// }

// const List = () => {
//   return (

//     <ul>
//       {list.map(function (items) {
//         return (
//           <div>
//             <li key={items.objectID}>
//               <span>
//                 <a href={items.url}>{items.title}</a>
//               </span>
//               <span>{items.author}</span>
//               <span>{items.num_comments}</span>
//               <span>{items.points}</span>
//             </li>
//           </div>
//         );

//       })}
//     </ul>

//   );
// }
// //  instead of using React prop itself we can choose to use the props information instead.
// // const ListTwo = ({ list }) => {
// //   return (
// //     <ul>
// //       {list.map((items) => {
// //         return (
// //           <li key={items.objectID}>
// //             <span>
// //               <a href={items.url}>{items.title}</a>
// //             </span>
// //             <span>{items.author}</span>
// //             <span>{items.num_comments}</span>
// //             <span>{items.points}</span>
// //           </li>
// //         );
// //       })}
// //     </ul>
// //   );
// // }

// // passing the list items to the child component of listthree component

// const ListThree = (props) => {
//   return (
//     <ul>
//       {props.item.map((items) => {
//         return (

//           <Item key={items.objectID} item={items} />

//         );
//       })}
//     </ul>
//   );
// }
// // lifting of state . and filtering of searchTerm b4 displaying it to listFour

// // const ListFour = ({ lists }) => {
// //   return (
// //     <ul>
// //       {/* to separate objectID from items we will use rest operator */}
// //       {lists.map(({ objectID, ...items }) => {
// //         return (

// //           // <Items key={items.objectID} items={items} />
// //           // below we have used the spread operator
// //           <Items key={objectID} {...items} />
// //         );
// //       })}
// //     </ul>
// //   );
// // }

// const ListFour = ({ lists, onRemoveItem }) => {
//   return (
//     <ul>
//       {lists.map((items) => {
//         return (
//           <Items key={items.objectID} items={items} onRemoveItem={onRemoveItem} />
//         )
//       })}
//     </ul>

//   );
// }

// // below we have used object destructuring
// // the item below has the same property as the props object.it will show the obejct properties to the element
// // the item is not used the Item component
// const Item = ({ item }) => {
//   return (
//     <li>
//       <span>
//         <a href={item.url}>{item.title}</a>
//       </span>
//       <span>{item.author}</span>
//       <span>{item.num_comments}</span>
//       <span>{item.points}</span>
//     </li>
//   );
// }

// // how we can use nested destructuring with Items component

// // const Items = (
// //   {
// //     title,
// //     url,
// //     author,
// //     num_comments,
// //     points,
// //   }
// // ) => {
// //   return (
// //     <li>

// //       <span>
// //         <a href={url}>{title}</a>
// //       </span>
// //       <span>{author}</span>
// //       <span>{num_comments}</span>
// //       <span>{points}</span>
// //     </li>
// //   );
// // }

// const Items = ({ items, onRemoveItem }) => {
//   // inline handler
//   // const handleRemoveItem = () => {
//   //   onRemoveItem(items)
//   // }
//   return (
//     <>
//       <li>

//         <span>
//           <a href={items.url}>{items.title}</a>
//         </span>
//         <span>{items.author}</span>
//         <span>{items.num_comments}</span>
//         <span>{items.points}</span>
//         {/* <span> <button type="submit" onClick={handleRemoveItem}>click me</button></span> */}
//         {/* the use of javascript bind method(inline handler) */}
//         {/* <span><button type="button" onClick={onRemoveItem.bind(null, items)}>remove</button></span> */}
//         <span><button type="button" onClick={() => onRemoveItem(items)}>Remove</button></span>
//       </li>

//     </>

//   );
// }

// //uncontrolled component

// // const InputOne = (props) => {
// //   return (
// //     <div>
// //       <label htmlFor='search'>input search</label>
// //       <input type="text" id="searchTwo" onChange={props.onSearch} />
// //     </div>
// //   );

// // }

// // const Search = (props) => {
// // const [searchTerm, setSearchTerm] = React.useState('');
// // const handleChange = (event) => {
// //   setSearchTerm(event.target.value);
// //   // when an event handler is passed as a prop in the component it becomes a callback handler
// //   // the use state can be now used up the component now.
// //   // props.onSearch(event);
// // }

// // object destructuring with props
// //   const { search, onSearch } = props;
// //   return (
// //     <div>
// //       <label htmlFor='search'>search:</label>
// //       <input id="search" type="text" onChange={onSearch} value={search} />
// //       <p>
// //         The output of the input field are as shown below:{search}
// //       </p>
// //     </div >
// //   );
// // };

// // useEffect hook
// const Toggler = ({ toggle, onToggle }) => {
//   // the function will run on the first render of the component (also called on mount or mounting of the component) and on every re-render of the component(also called update or updating the component)

//   const [title, setTitle] = React.useState('Hello React');

//   React.useEffect(() => {
//     console.log('I run on every render: mount + update.');
//   }, [toggle, title]);

//   const handleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={title} onChange={handleChange} />
//       <button type="button" onClick={onToggle}>Toggle</button>
//       {/* {toggle && <div> Hello React</div>} */}
//       {toggle && <div> {title}</div>}
//     </div>
//   );
// };
// // The use of useRef
// const Togglers = ({ toggle, onToggle }) => {
//   const nowMount = React.useRef(false);
//   React.useEffect(() => {
//     if (nowMount.current) {
//       console.log('i will run only if the toggle changes');
//     } else {
//       nowMount.current = true;
//     }
//   }, [toggle]);
//   return (
//     <div>
//       <button type="button" onClick={onToggle}>Toggle</button>
//       {toggle && <div>Hello React</div>}
//     </div>
//   );
// };

// const Toggle = ({ toggle, onToggle }) => {
//   const onceCalled = React.useRef(false);
//   React.useEffect(() => {
//     if (onceCalled.current) {
//       return;
//     }
//     if (toggle === false) {
//       console.log('i run only once ');
//       onceCalled.current = true;
//     }
//   }, [toggle]);

//   return (
//     <div>
//       <button type="button" onClick={onToggle}>Toggle</button>
//       {toggle && <div>Hello React</div>}
//     </div>
//   );
// };


// // learning about React fragment
// //  one can use [] to render multiple top level  element
// //  each element will have React key attribute

// // const Form = ({ search, onSearch }) => [
// //   <label htmlFor='search' key="1">search:</label>,
// //   <input type="text" key="2" value={search} onChange={onSearch} />
// // ];

// // // we can also use React fragment to render multiple top level element
// // const FormIn = ({ search, onSearch }) => (
// //   <>
// //     <label htmlFor='search' key="1">search:</label>,
// //     <input type="text" key="2" value={search} onChange={onSearch} />
// //   </>
// // );

// // reusable react component

// const InputWithLabel = ({ id, children, onInputChange, value, type = 'text', isFocused }) => {
//   // A
//   const inputRef = React.useRef();

//   // C
//   React.useEffect(() => {
//     if (isFocused && inputRef.current) {
//       // D
//       inputRef.current.focus();
//     }
//   }, [isFocused]);
//   return (

//     <>
//       {/* <label htmlFor={id}>{label}</label> */}
//       {/* we can use the label search text/information by passing is as a prop from above (children) */}
//       <label htmlFor={id}>{children}</label>
//       <input
//         id={id}
//         type={type}
//         value={value}
//         //  B
//         ref={inputRef}
//         onChange={onInputChange}
//       />
//     </>

//   )
// };

// const InputWithSearch = ({ id, children, onSearchChange, values, type }) => (
//   <>
//     <label htmlFor={id}>{children}</label>
//     &nbsp;
//     <input
//       type={type}
//       id={id}
//       value={values}
//       onChange={onSearchChange}
//     />
//   </>
// );

// const Button = ({ type = "button", handleClick, children }) => {
//   // const handleClick = () => console.log('clicked btn 1');
//   return (
//     <button type={type} onClick={handleClick}>{children}</button>
//   );
// }

// // React component composition
// // const UsernameForm = ({ onSubmit, value }) => {
// //   return (
// //     <>
// //       <form
// //         onSubmit={event => {
// //           event.preventDefault();
// //         }}
// //       ></form>
// //       <label>
// //         Your Name: <input type="text" value={value} onChange={onSubmit} />
// //       </label>
// //       <button type="submit">submit</button>
// //       user  input:{value}
// //     </>

// //   );
// // }
// // below is specialized form element UsernameForm to capture user information from the user
// const UsernameForm = ({ onSubmit }) => {
//   const [username, setusername] = React.useState('');
//   return (
//     <>
//       <Form
//         onSubmit={event => {
//           onSubmit(username);
//           event.preventDefault();
//         }}
//       >

//         <InpuField value={username} onChange={setusername}>
//           Your Name
//         </InpuField>
//         {/* <label>
//           Your Name: <input
//             type="text"
//             value={username}
//             onChange={event => setusername(event.target.value)}
//           />
//         </label> */}
//         {/* <button type="submit">send</button> */}
//         {/* rendering our button as an element */}
//         <Buttons type="submit" color="crimson">submit</Buttons>
//       </Form>
//     </>
//   );
// }
// // react component composition
// //  we will first change our Form component to another name make it effortless
// //  creating form tht does not only capture username but has generic function
// // we will use what is called React prop(children prop)

// const Form = ({ onSubmit, children, }) => {
//   return (
//     <form onSubmit={onSubmit}>{children}</form>
//   );
// }

// const Buttons = ({ onClick, type = 'button', color = "white", children }) => (
//   <button type={type} style={{ backgroundColor: color }}>{children}</button>
// )
// // extracting input field and label element

// const InpuField = ({ value, onChange, children }) => {
//   return (
//     <label>
//       {children}
//       <input
//         value={value}
//         type="text"
//         onChange={event => onChange(event.target.value)}
//       />
//     </label>
//   );
// }

// // refs in React
// // example one

// const Counter = () => {
//   // the use of useRef
//   const hasClickedBtn = React.useRef(false);
//   const [count, setCount] = React.useState(0);
//   function onClick() {
//     const newCount = count + 1;
//     setCount(newCount)
//     hasClickedBtn.current = true;
//   }
//   // does only run for the first render
//   // component does not render again ,because no state  is set anymore
//   // only the ref current property is set. which does not trigger  a re-render
//   // console.log(`has been clicked ${hasClickedBtn.current}`);
//   return (
//     <div>
//       <p>{count}</p>
//       <button type="button" onClick={onClick}>click</button>
//     </div>
//   );
// }

// // ref as instance variable

// const ComponentWithRefInstanceVariable = () => {
//   const [count, setCount] = React.useState(0);
//   function onClick() {
//     setCount(count + 1);
//   }
//   // initializing the  the ref's current property to true (assuming tht the component starts its first render when it gets initialized for the first time)
//   const isFirstRender = React.useRef(true);
//   React.useEffect(() => {
//     if (isFirstRender.current) {
//       isFirstRender.current = false;
//       // changing the ref current value wont trigger a render
//     }
//   });
//   return (
//     <>
//       <p>{count}</p>
//       {/* will only work becoz  setCount triggers re-render */}
//       <button type="button" onClick={onClick}>Add</button>
//       <p>{isFirstRender ? "first render" : "re-render"}</p>
//     </>
//   );
// }


// // React List key
// // below react code will give the warning Each child should have a unique "key" prop.
// // index and React useState
// // below the code will run just well until we add another uncontrolled element
// // const ListWithoutKey = () => {
// //   const [list, setList] = React.useState(InitialLists);
// //   const handleClick = event => {
// //     setList(list.slice().reverse());
// //   }
// //   return (
// //     <>
// //       <ul>
// //         {list.map((items, index) => {
// //           return (
// //             <li key={index}>
// //               <label>
// //                 {/* the checkbox will only remain on the first element according to index */}
// //                 <input type="checkbox" />
// //                 {items}
// //               </label>
// //             </li>
// //           );
// //         })}
// //       </ul>
// //       <button type="button" onClick={handleClick}>Reverse List</button>
// //     </>
// //   );


// // }

// // solved index problem by using stable identifier
// const ListWithStableIndex = () => {
//   const [list, setList] = React.useState(InitialLists);
//   const handleClick = event => {
//     setList(list.slice().reverse());
//   }
//   return (
//     <>
//       <ul>
//         {list.map(items => {
//           return (
//             <li key={items.id}>
//               <label>
//                 {/* the checkbox will only remain on the first element according to index */}
//                 <input type="checkbox" />
//                 {items.name}
//               </label>
//             </li>
//           );
//         })}
//       </ul>
//       <button type="button" onClick={handleClick}>Reverse List</button>
//     </>
//   );


// }

// //  add item to your list

// const AddList = ({ name, onAdd, onChange }) => {
//   // // handler function
//   // const [list, setList] = React.useState(AlteredList);
//   // const [name, setName] = React.useState('');
//   // function handleChange(event) {
//   //   setName(event.target.value);
//   // }
//   // function handleAdd() {
//   //   // we will use the object property shorthand becoz the variable name is equal to the object property name
//   //   const newList = list.concat({ name, id: uuidv4() });
//   //   setList(newList);
//   //   setName('');
//   // }
//   return (
//     <>
//       <input type="text" value={name} onChange={onChange} />

//       {/* <ul>
//         {list.map((item) => {
//           return (
//             <li key={item.id}>{item.name}</li>
//           );
//         })}
//       </ul> */}
//       <button type="button" onClick={onAdd}>Add</button>
//     </>
//     // we want to add list to another component from the child component

//   );
// }

// const Lists = ({ list }) => {
//   return (
//     <ul>
//       {list.map((item) => {
//         return (
//           <li key={item.id}>{item.name}</li>
//         )
//       })}
//     </ul>
//   )
// }

// // updating list in React
// const UpdateList = () => {
//   // inorder to update the list we have to make it stateful
//   const [list, setList] = React.useState(updateList);
//   const handleToggleChange = (id) => {
//     const newList = list.map((item) => {
//       if (item.id === id) {
//         const updatedItem = {
//           ...item,
//           isComplete: !item.isComplete,
//         };
//         return updatedItem;
//       }
//       return item;
//     });
//     setList(newList);
//   }
//   return (
//     <>
//       <ul>
//         {list.map((item) => {
//           return (
//             <li key={item.id}>
//               <span
//                 style={{
//                   textDecoration: item.isComplete ? 'line-through' : 'none'
//                 }}
//               >
//               </span>
//               {item.task}
//               <button type="button" onClick={() => handleToggleChange(item.id)}>
//                 {item.isComplete ? 'Undo' : 'Done'}
//               </button>
//             </li>
//           )

//         })}
//       </ul>
//     </>
//   )
// }

// // removing an item from list

// const RemoveList = () => {
//   const [list, setList] = React.useState(removelist);
//   const handleRemove = (id) => {
//     const newList = list.filter((item) => item.id !== id);
//     setList(newList);
//   }

//   return (
//     <>
//       <ul>
//         {list.map((item) => {
//           return (
//             <li key={item.id}>
//               <span>{item.firstname}</span>
//               <span>{item.lastname}</span>
//               <span>{item.year}</span>
//               <button type="button" onClick={() => handleRemove(item.id)}>Remove</button>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// // asynchronous in React

// const AsyncData = () => {
//   const [data, setData] = React.useState([]);

//   React.useEffect(() => {
//     getAsyncData().then(result => {
//       setData(result.datas.data)
//     })
//   }, []);

//   const getAsyncData = () =>

//     new Promise((resolve) =>
//       setTimeout(() =>
//         resolve({ datas: { data: asyndata } }), 2000

//       ),
//     )

//   return (
//     <>
//       <ul>
//         {data.map((item) => {
//           return (
//             <li key={item.objectID}>
//               <span>{item.title}</span>
//               <span>{item.author}</span>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// // CONDITIONAL RENDERING
// // conditional rendering if
// // React rendering based on props


// const RenderIf = () => {
//   if (!renderList) {
//     return null
//   }
//   if (!renderList.length) {
//     return <p>The list is empty</p>;
//   }
//   return (
//     <>
//       <ul>
//         {renderList.map((item) => {
//           return (
//             <li key={item.id}>
//               <span>{item.firstName}</span>
//               <span>{item.lastName}</span>
//             </li>

//           );
//         })}
//       </ul>
//     </>
//   );
// }

// // conditional rendering with ternary operator

// const RenderTernary = ({ isEdit }) => {
//   return (
//     <>
//       {isEdit ? (<p>food</p>) : (<p>fish</p>)}
//     </>
//   );
// }

// // nested conditional rendering

// const NestedList = () => {
//   const isPresent = !nestedlist;
//   const isEmpty = !nestedlist.length;
//   return (
//     <>
//       {isPresent ? <p>sorry the list is not there</p> : (isEmpty ? <p>sorry the list is empty</p> : <div>{nestedlist.map((item) => {
//         return (
//           <li key={item.id}>
//             <span>{item.firstName}</span>
//             <span>{item.lastName}</span>
//           </li>
//         );
//       })}</div>)}
//     </>
//   );
// }

// // useReducer hook
// // function getItem() {
// //   new Promise((resolve) => {
// //     return resolve(users);
// //   })
// // }


// // const StoryRemove = ({dispatchStories,story}) => {
// //   let setIsLoading = true;
// //   React.useEffect(() => {
// //     setIsLoading(true);
// //     getItem()
// //       .then((result) => {
// //         dispatchStories({
// //           type: 'SET_STORIES',
// //           payload:result.firstName ,
// //         });
// //       })
// //   });

// // }

const App = () => {
    return (
        <>
            <ListReducer />
        </>
    );
}


export default App;
