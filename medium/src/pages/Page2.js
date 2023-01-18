import "../pages/Page2.css"
export default function Page2() {
    return (
        <div>
            <div className="navbar2">
                <div className="nav1">
                    <img src={require("../Page2 images/logo.png")} alt="" />
                    <div className="nav11">
                        <img src={require("../Page2 images/searchicon.png")} alt="" />
                        <input placeholder="Search Medium"></input>
                    </div>
                </div>
                <div className="nav2">
                    <img src={require("../Page2 images/pen.png")} alt="" />
                    <p>Write</p>
                    <button className="button">Sign up</button>
                    <a href="">Sign in</a>
                    <img src={require("../Page2 images/proicon.png")} alt="" />
                    <img src={require("../Page2 images/down.png")} alt="" />
                </div>
            </div>
            <div className="main">
                <div className="mainNav">
                    <div className="mainNav1">
                        <img src={require("../Page2 images/profile1.png")} alt="" />
                        <div>
                            <h4>Cassie Kozyrkov</h4>
                            <h6>Dec 27, 2022 · 9 min read</h6>
                        </div>

                    </div>
                    <div className="mainNav2">
                        <img src={require("../Page2 images/twitter1.png")} alt="" />
                        <img src={require("../Page2 images/facebook.png")} alt="" />
                        <img src={require("../Page2 images/linkedin.png")} alt="" />
                        <img src={require("../Page2 images/icon1.png")} alt="" />
                    </div>
                </div>
                <div className="mainMain">
                    <h1>The best New Year's resolutions you can make</h1>
                    <p>Resolutions that actually work, according to a decision scientist</p>
                    <br />
                    <p>Happy almost-2023! Chances are that you’re contemplating making some New Year’s resolutions, so let’s get you set up for success with a few resolutions that will unlock the best version of you.</p>
                    <img src={require("../Page2 images/bg.png")} alt="" />
                    <h6>All copyright belongs to the author.</h6>
                    <h4>#1 — Resolve to stop borrowing resolutions</h4>
                    <p>Different people are different, so what works for you might not be what works for anyone else.</p>
                    <br />
                    <p>Understanding this is the single biggest step you can take in the direction of success. That’s precisely why I’m not going to do the standard guru thing of suggesting you copy my exact wellness plan after proving to you that I have a stack of credentials (I do) and I’m in shape (I am). My plan fits me, but you need a plan that fits you.</p>
                    <h4>Quit borrowing other people resolutions</h4>
                    <p>Whenever you’re tempted to copy your favorite celeb’s latest health plan, take a moment to think about some potential reasons that person is able to stick with it (assuming they are) which you might not know about. Do they have a private chef who prevents them from making food decisions? Do they secretly loooove cabbage? Is their job less stressful than yours? And so on.</p>
                </div>
            </div>
        </div>
    )
}