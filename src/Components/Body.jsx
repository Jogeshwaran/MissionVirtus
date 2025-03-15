import ResturantCard from "./RestaurantCard"
import resObject from "../utils/mockdata"
import { useState } from "react"

const Body = () => {

    const [filterObj, setFilterObject] = useState(resObject)

    const onClickHandler = () => {
        console.log('buttonclicked');     
        let newObj = resObject.filter((filteredRes) => filteredRes.info.avgRating > 4.4)
        console.log('newObj', newObj);   
        setFilterObject(newObj)
    }

    return (
        <div className="body">
            <div className="filter-btn">
                <button onClick={() => onClickHandler()}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* multiple resturantCards */}
                {filterObj.map((data) => 
                    <ResturantCard key = {data.info.id} resData = {data} />
                )}

            </div>

        </div>
    )
}

export default Body