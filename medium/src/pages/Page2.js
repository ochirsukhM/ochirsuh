import "../pages/Page2.css"
export default function Page2(){
    return (
        <div>
            <div className="navbar2">
                <div className="nav1">
                    <img src={require("../Page2 images/logo.png")} alt=""/>
                    <div className="nav11">
                        <img src={require("../Page2 images/searchicon.png")} alt=""/>
                        <input placeholder="Search Medium"></input>
                    </div>
                </div>
                <div className="nav2">
                    <img src={require("../Page2 images/pen.png")} alt=""/>
                    <p>Write</p>
                    <button className="button">Sign up</button>
                    <a href="">Sign in</a>
                    <img src={require("../Page2 images/proicon.png")} alt=""/>
                    <img src={require("../Page2 images/down.png")} alt=""/>
                </div>
            </div>
        </div>
    )  
}