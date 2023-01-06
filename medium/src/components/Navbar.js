export default function Navbar({b}){
    return (
        <div className='navbar'>
        <div className='icon'>
          <img src={require("../images/Frame.png")} alt=""/>
        </div>
        <div className='menus'>
       {b.map((e)=>{
        return <a href="" >{e.title}</a>
       })}
          
          <button>Get started</button>
        </div>
    </div>
    )
}