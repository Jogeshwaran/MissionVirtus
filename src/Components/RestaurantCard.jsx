import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {

    const { resData } = props
    console.log(resData.info.name);
    
    
    
    return (
            <div className="res-card"> 
            <img className="res-logo" alt="food-image" src={CDN_URL + resData.info.cloudinaryImageId}/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.avgRatingString}</h4>
            <h4>{resData.info.cuisines.join(",")}</h4> 
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.slaString}</h4>
            </div> 
    )
}

export default ResturantCard