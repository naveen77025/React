import { resList } from "../utils/constants";
import { ResCard } from "./ResCard";

const Body = () => {
    return (
        <div className="body-container">
            <h3 className="search">Search</h3>
            <div className="card-container">
            {
                resList.map(res => <ResCard key={res.info.resId} resData={res}/>)
            }
            </div>
        </div>
    )
};

export default Body;