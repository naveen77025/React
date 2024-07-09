

export const ResCard = (props) =>{
    const {resData}=props;
    console.log(resData.info);
    const {name, rating,cuisine,distance,image,cft}=resData?.info;
    const {aggregate_rating}=rating;
    const cuisineList= cuisine.map(x=>x.name).join(", ");
    return (
        <div className="res-card">
            <img className="res-image" src={image.url}/>
            <h3>{name}</h3>
            <h4>{aggregate_rating} ⭐</h4>
            <h4>{cuisineList}</h4>
            <h4>{distance}</h4>
            <h4>{cft.text}</h4>
        </div>
    )
};