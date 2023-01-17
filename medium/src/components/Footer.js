export default function Footer({afooter,data,setData,filterItems}){
    return <div className="footer10">
        <h4>DISCOVER MORE OF WHAT MATTERS TO YOU</h4>
        <div className="footer21">
            {afooter.map((e)=>{
                return <a href="#">{e.key}</a> 
            })}
            
        </div>
        <div className="footer22">
            <a href="#">Help</a>
            <a href="#">Status</a>
            <a href="#">Writers</a>
            <a href="#">Blog</a>
            <a href="#">Career</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">About</a>
            <a href="#">Text to speech</a>
        </div>
    </div>
}