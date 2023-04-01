import React from "react";
import "./App.css";
// import catone from './componentpro4/cats/one.jfif';
// import cattwo from './componentpro4/cats/two.jfif';
// import catthree from './componentpro4/cats/three.jfif';
// import catfour from './componentpro4/cats/five.jfif';

// import Header from './componentspro1/Header';
// import Page from './componentspro1/Page';
// import Footer from './componentspro1/Footer';

// import Header from './componentpro2/Header';
// import MainContent from './componentpro2/MainContent';

// import Navbar from './componentpro3/Navbar';
// import Image from './componentpro3/Image';
// import Experience from './componentpro3/Experience';
// import Card from './componentpro3/Card';
// import image10 from './componentpro3/images/10.jpg';
// import image11 from './componentpro3/images/11.jpg';
// import data from './componentpro3/data';

// import Basics from './Reactbasics/Jsx1';
// import ComponentCard from './componentpro4/ComponentCard';
// import Joke from "./componentpro4/Joke";
// import Basics1 from './componentpro5/Basics1';
import Message from "./componentpro4/message";

// passing the number below which is none string as our props
// const bolean = 234;

const AppTwo = () => {
  // const element = data.map((item)=>{
  // return <Card
  // key={item.id}
  // item={item}
  // use of spread operator instead
  // {...item}
  //     title= {item.title}
  //     country = {item.location}
  //     price={item.price}
  //     rating = {item.stats.rating}
  //     reviewCount = {item.stats.reviewCount}
  // img ={item.carImg}
  //    isOpen= {item.openSpots?"INSTOCK":"SOLD OUT"}
  // />
  // })
  return (
    // <MainContent />
    // <Navbar/>
    <>
      {/* <div className="main_container">
                {/* <ProjectOne /> */}
      {/* <ChallengeOne /> */}
      {/* <Header /> */}
      {/* <Page /> */}
      {/* <Footer /> */}
      {/* <Header /> */}
      {/* <MainContent /> */}
      {/* </div> * /} */}
      {/* <div className="container_airnb"> */}
      {/* <Navbar /> */}
      {/* <main className='main_style3'> */}
      {/* <Image /> */}
      {/* <Experience /> */}
      {/* <div */}
      {/* // rating ={5.0}className="card-section3"> */}
      {/* <Card


                    img={image10}
                    isOpen="SOLD OUT"
                    reviewCount = {(6.0)}
                    country = "Kenya"
                    title= "Life lesson with Katie Nareforie"
                    price = {136}
                    /> */}
      {/* {element} */}
      {/* <Card
                    img={image11}
                    rating ={4.0}
                    reviewCount = {(6.0)}
                    country = "Tanzania"
                    title= "Life lesson with photography"
                    price = {150}
                    location = "SOLD OUT"
                    isOpen="INSTOCK"
                    /> */}
      {/* </div> */}
      {/* </main> */}
      {/* </div> */}
      {/* <Basics/> */}
      {/* <Basics2/> */}
      {/* <div className='container4'> */}
      {/* <main className='main_style4'> */}
      {/* <ComponentCard
  img={catone}
  name="Mr Whiskerson"
  phone="(222) 505 2344"
  email="whiskerson23@gmail.com"/> */}
      {/* <ComponentCard
img={cattwo}
name="Pumkin"
phone="(245) 787 2344"
email="pumkinerson23@gmail.com"
/> */}
      {/* <ComponentCard
img={catthree}
name="Fluffy"
phone="(245) 787 24677"
email="fluffynerson23@gmail.com"
/> */}
      {/* <ComponentCard
img={catfour}
name="Felix"
phone="(265) 755 2344"
email="felixinerson23@gmail.com"
/> */}
      {/* </main> */}
      {/* </div> */}
      {/* <Joke
        setup="I got my daughter a fridge for her birthday"
        punchline="I cant wait to see her face light up when she opens it"
      />

      <Joke
        setup="How did the hacker escape the police"
        punchline="He just ransomware"
      />
      <Joke
        setup="Why dont pirates travel on mountain roads"
        punchline="Scurvy"
        // bolean = {bolean}
      /> */}
      <Message />
      {/* <Basics1/> */}
    </>
  );
};

// const MainContent = () => {
//     return (
//         <>
//             <h1>I'm learning React</h1>
//         </>
//     );
// }

// task2

// const Navbar = ()=>{
//     return (
//         <nav>
//            <h1>Eurozone</h1>
//              <ul>
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//              </ul>
//         </nav>
//     );
// }

// project1
// const ProjectOne = () => {
//     return (
//         <div>
//             <img src="./logo192.png" alt="React logo" />
//             <h1>Fun fact about React</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100K stars on github</li>
//                 <li>Is mantained by facebook</li>
//                 <li>Powers thousands enterprise app including mobile app</li>
//             </ul>
//         </div>
//     );
// }

// challenge
// const ChallengeOne = () => {
//     return (
//         <>
//             <header>
//                 <nav>
//                     <img src="/logo192.png" alt="react logo" />
//                     <h1>Reasons why am excited to learn React.</h1>
//                 </nav>
//             </header>
//             <ol>
//                 <li>Easy framework to learn</li>
//                 <li>Enjoy the React community</li>
//                 <li>Become a good React developer</li>
//                 <li>It's my best JavaScript framework</li>
//             </ol>
//             <footer>&copy 2022 mbugua development.All rights reserved.</footer>
//         </>
//     );
// }

export default AppTwo;
