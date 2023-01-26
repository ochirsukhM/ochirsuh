import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDash(){
    const [data, setData] = useState([]);
    const navigate = useNavigate();
useEffect(() => {
    if (!localStorage.getItem("name")) {
        navigate("/login");
      }

    fetch("https://medium-api-psi.vercel.app/api/news")
        .then((response) => response.json())
        .then((dt) => {
            console.log(dt.result);
            setData(dt.result);
        })
}, [])

return (

    <div className="col-md-9">
    <div className="row my-4">
        <div className="col-md-4">
            <div className="card p-3">
                <div className="card-title">Users</div>
                <div className="d-flex justify-content-between align-items-center">
                    <i className="bi bi-people"
                        style={{ fontSize: "40px" }}></i>
                    <h3>4500</h3>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card p-3">
                <div className="card-title">News</div>
                <div className="d-flex justify-content-between align-items-center">
                    <i className="bi bi-newspaper"
                        style={{ fontSize: "40px" }}></i>
                    <h3>9000</h3>
                </div>
            </div>
        </div>

        <div className="col-md-4">
            <div className="card p-3">
                <div className="card-title">Category</div>
                <div className="d-flex justify-content-between align-items-center">
                    <i className="bi bi-list-nested"
                        style={{ fontSize: "40px" }}></i>
                    <h3>4500</h3>
                </div>
            </div>
        </div>
    </div>
    {/* <BarChart/>
    <PieChart/> */}
    <div className="row p-3">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <th># </th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Is Trending?</th>
                    </thead>
                    <tbody>
                        {
                            data.map(({ _id, title, isTrending, category }, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{title}</td>
                                        <td>{category}</td>
                                        <td>
                                            {isTrending ? (
                                                <span className="badge bg-success">yes</span>
                                            ) : (
                                                <span className="badge bg-danger">no</span>
                                            )}
                                        </td>

                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
</div>)
}