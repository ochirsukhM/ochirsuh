import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import News from './components/News';
import { useState } from 'react';
const navbarItems = [
  {title:"Our story"},
  {title:"Membership"},
  {title:"Write"},
  {title:"Sign in"}
]

const main1Items= [
  {
    id:"01",
    img:require("./images/1.png"),
    text1:"Barack Obama",
    text2:"My 2022 End of Year Lists",
    date: "Dec 23, 2022",
    read:"3 min read"
  },
  {
    id:"02",
    img:require("./images/2.png"),
    text1:"Natasha Selvaraj in Towards Data Science",
    text2:"How to Make Money While Learning Data Science in 2023",
    date: "Dec 28, 2022",
    read:"7 min read",
    icon:require("./images/star.png")
  },
  {
    id:'03',
    img:require("./images/3.png"),
    text1:"Maria Milojkovic, MA in Lessons from History",
    text2:"He Used AI to See Today's Looks of The Famous People From the Past",
    date: "Dec 28, 2022",
    read:"10 min read",
    icon:require("./images/star.png")
  },
  {
    id:'04',
    img:require("./images/4.png"),
    text1:"Yang Zhou in TechToFreedom",
    text2:"9 Python Built-In Decorators That Optimize Your Code Significantly",
    date: "Jan 1, 2022",
    read:"7 min read",
    icon:require("./images/star.png")
  },
  {
    id:'05',
    img:require("./images/5.png"),
    text1:"Hanif Abdurraqib",
    text2:"100 Favorite Albums of 2022",
    date: "Dec 30, 2022",
    read:"9 min read"
  },
  {
    id:'06',
    img:require("./images/6.png"),
    text1:"Christopher Clemmons in Level Up Coding",
    text2:"Structure Your React Project Like a Senior Developer",
    date: "Dec 31, 2022",
    read:"3 min read"
  },
]

const newsItems =[
  {
  img:require('./images/pic1.png'), 
  head:"Understanding Long Covid",
  title:"We know more now than before, and it’s still alarming" ,
  key:"Long Covid",
  read:"9 min read",
  icon:require("./images/01.png"),
  name:"Dr. Tom Frieden",
  date:"Dec 19,2022",
  },
  {
    img:require('./images/pic2.png'), 
    head:"Braiding Past into Future",
    title:"Nican Huehcatlahtolli, a New Futurism" ,
    key:"Futurism",
    read:"11 min read",
    icon:require("./images/02.png"),
    name:"David Bowles",
    date:"Nov 25,2022",
    star:require("./images/star.png"),
    },
    {
      img:require('./images/pic3.png'), 
      head:`Learning to Cope with Estrangement: When Children "Cancel" Their Parents`,
      title:"An enstranged father reflects on the stigma and surprising prevelance of these family rifts." ,
      key:"Parental Alienation",
      read:"6 min read",
      icon:require("./images/03.png"),
      name:"Ed ergenzinger in Invisible Illness",
      date:"Aug 21,2022",
      star:require("./images/star.png"),
      },
      {
        img:require('./images/pic4.png'), 
        head:"ChatGPT Is Having a Thomas Edison Moment",
        title:"Why breakthrough technologies need to be accessible." ,
        key:"Gpt3",
        read:"4 min read",
        icon:require("./images/04.png"),
        name:"Thomas Smith",
        date:"Dec 8,2022",
        star:require("./images/star.png"),
        },
        {
          img:require('./images/pic5.png'), 
          head:"Spotify's Year-End Lists Are the Ultimate Personality Test",
          title:"Why the mass sharing of the music streaming service's year-end lists is uniquely telling" ,
          key:"Music",
          read:"3 min read",
          icon:require("./images/05.png"),
          name:"Allegra Hobbs",
          date:"Dec 6,2022",
          star:require("./images/star.png"),
          },
          {
            img:require('./images/pic6.png'), 
            head:"Why Your Team Needs a Weekly Metrics Review",
            title:"What is it, how you can start, and why it will make your product team much better builders and collaborators." ,
            key:"Data",
            read:"7 min read",
            icon:require("./images/06.png"),
            name:"Julie Zhuo",
            date:"Nov 30,2022",
        
            },
            {
              img:require('./images/pic7.png'), 
              head:"Tyrion Lannister and The 7 Habits of Highly Effective People",
              title:"A Game of Thrones-themed synopsis of The 7 Habits of Highly Effective People" ,
              key:"Game of Thrones",
              read:"14 min read",
              icon:require("./images/07.png"),
              name:"Elliot Graebert",
              date:"Dec 2,2022",
              
              },
              {
                img:require('./images/pic8.png'), 
                head:"Microdosing, Mastodon, and Jonah Hill",
                title:"Seeking peace, finding kindness." ,
                key:"Mental Health",
                read:"6 min read",
                icon:require("./images/08.png"),
                name:"Mindy Stern in Thoughts And Ideas",
                date:"Nov 30,2022",
                star:require("./images/star.png"),
                },
                {
                  img:require('./images/pic9.png'), 
                  head:"What if failure is the plan?",
                  title:"I've been thinking a lot about failure lately. Failure comes in many forms, but I'm especially interested in situations which people.." ,
                  key:"Twitter",
                  read:"14 min read",
                  icon:require("./images/09.png"),
                  name:"danah boyd",
                  date:"Dec 5,2022",
                 
                  },
                  {
                    img:require('./images/pic10.png'), 
                    head:"Why are there so many Web3 startups",
                    title:"This week, Pitchbook published their latest Emerging Tech Indicator (ETI) report which tracks early stage investment" ,
                    key:"Web 3",
                    read:"6 min read",
                    icon:require("./images/010.png"),
                    name:"Eric Feng",
                    date:"Dec 4,2022",
                   
                    },
                    {
                      img:require('./images/pic11.png'), 
                      head:"What Marriage Means to Me",
                      title:"After dropping the kids off, I came home and stopping in the kitchen to take in the aftermath of our chaotic morning." ,
                      key:"Parenting",
                      read:"3 min read",
                      icon:require("./images/011.png"),
                      name:"Chasten Buttigieg",
                      date:"Nov 29,2022",
                      
                      },
]


function App() {

  const [data, setData] = useState([]);
const [user, setUser] = useState("");
const [showModal, setShowModal] = useState(false);

const [bgColor, setBgColor] = useState(user ? "white" : "#ffc017");
const objStyle = {
  backgroundColor: bgColor,
};
const handleScroll = (event) => {
  if (user) {
    setBgColor("white");
  } else {
    if (event.currentTarget.scrollTop >= 600) {
      setBgColor("white");
    } else {
      setBgColor("#ffc017");
    }
  }
};
const openModal = () => {
  setShowModal(!showModal);
};

const onLogin = (username, password) => {
  if (username == "Bold" && password == "qweqwe") {
    setShowModal(false);
    setUser(username);
  } else {
    alert("Tanii ner eswel password buruu bnaa, zasna uu");
  }
};
  return (
    <div  style={{ width: "100vw", overflow: "scroll", height: "100vh" }}
    onScroll={handleScroll} className="App">
      <Navbar style={objStyle}
        onLogin={onLogin}
        user={user}
        setUser={setUser}
        showModal={showModal}
        openModal={openModal}/>
      <div className='container'>
       
      <Header/>
      
      </div>
      <Main c={main1Items}/>
       <News d={newsItems}/>
    </div>
  );
}

export default App;
