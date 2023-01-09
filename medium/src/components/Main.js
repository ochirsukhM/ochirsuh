export default function Main({c}){
    return (
        <div className='main1'>
        <div className='trend'>
        <img src={require("../images/svg 1.png")} alt=""/>
            <h6>Trending on medium</h6>
        </div>
          <div className="main2">
          {c.map((e)=>{
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
   
            
           </div>
        
    )
}