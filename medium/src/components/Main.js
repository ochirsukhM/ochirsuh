import { main1Items } from "./data"
import News from "./News"
import Footer from "./Footer"

export default function Main(){
    return (
        <div className='main1'>
        <div className='trend'>
        <img src={require("../images/svg 1.png")} alt=""/>
            <h6>Trending on medium</h6>
        </div>
          <div className="main2">
          {main1Items.map((e)=>{
                 return (
                    <div className="mainitems">
                 <div>
                    <h1 className="number">{e.id}</h1>
                </div>
                <div className="news">
                    <div>
                    <img src={e.img} alt=""/>
                    <p>{e.text1}</p>
                    </div>
                    
                    <h6>{e.text2}</h6>
                    <div>
                    <p>{e.date} · {e.read}</p>
                    <img src={e.icon} alt=""/>
                    </div>
                    
                </div>
                </div>)
            })}
          </div>
          <div className="aa">
            <div className="containeraa">
            <News/>
                <Footer/>
            </div>
         
          </div>
                

           </div>
        
    )
}