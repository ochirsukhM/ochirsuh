export default function News({ d }) {
    return (
        <div className="news00">
            {d.map((e) => {
                return (
                    <div className="aa">
                        <div className="news01">
                            <div className="ab">
                                <img className="icons" src={e.icon} alt="" />
                                <h4>{e.name}</h4>
                            </div>
                            <div>
                            <h2>{e.head}</h2>
                            <h5>{e.title}</h5>
                            </div>
                            
                            <div className="ac">
                                <h6>{e.date} · {e.read} </h6>
                                <a href="">{e.key}</a>
                                <img src={e.star} alt="" />
                            </div>
                        </div>
                        <div className="news02">
                            <img src={e.img} alt="" />
                        </div>

                    </div>


                )

            })
            }
        </div>
    )
}