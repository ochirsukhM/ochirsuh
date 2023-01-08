export default function News({ d }) {
    return (
        <div className="news00">
            {d.map((e) => {
                return (
                    <div className="aa">
                        <div className="news01">
                            <div className="ab">
                                <img className="icons" src={e.icon} alt="" />
                                <h1>{e.name}</h1>
                            </div>
                            <h1>{e.head}</h1>
                            <h4>{e.title}</h4>
                            <div className="ac">
                                <h6>{e.date} {e.read} {e.key}</h6>
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