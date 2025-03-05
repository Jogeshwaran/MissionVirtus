import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement('h1',{id : "heading"}, "Hola Amigo")
// const jsxHeading = <h1 id='heading'>Hello From JSX</h1>
// //normal function
// const Heading2 = function(){
//     return <h2>HolaAmigo</h2>
// }
// const Title = () => {return(
//     <h1>Namaste React</h1>
// )}
// const HeadingComponent = () => {
// return (
//     <div id='container'>
//         {/* //component Composisition */}
//     <Title />
//     <h1>hello from headingComponent</h1>
//     <Heading2/>
//     </div>

// )}

//header
// --logo
// --location
// -- navItems
//     ->search
//     -> offers
//     -> help
//     -> sign In
//     -> Cart

// Body 
// -> search Bar
// -> restaurant Container
// -> restaurant Cards 

const resObject = [
                  {
                    "info": {
                      "id": "10575",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
                      "locality": "Richmond Town",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "721",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-05 01:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "1.9K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6ae29ec7-db00-46f6-bfd0-ffbff69bf65d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/pizza-hut-richmond-town-central-bangalore-rest10575",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "440151",
                      "name": "Home Plate by EatFit",
                      "cloudinaryImageId": "1d578bb732e03c6f591790eb7d2d88e2",
                      "locality": "VASANTHA NAGAR",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "Home Food",
                        "Healthy Food",
                        "Indian",
                        "Punjabi",
                        "South Indian",
                        "Rajasthani",
                        "Maharashtrian",
                        "Snacks",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "301197",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "698",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-05 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6ae29ec7-db00-46f6-bfd0-ffbff69bf65d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/home-plate-by-eatfit-vasantha-nagar-central-bangalore-rest440151",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "588619",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG",
                      "locality": "Brigade Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.5,
                      "parentId": "547",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "2.3K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-04 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "375"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6ae29ec7-db00-46f6-bfd0-ffbff69bf65d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/kfc-brigade-road-central-bangalore-rest588619",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "502957",
                      "name": "Andhra Gunpowder",
                      "cloudinaryImageId": "bs9qgsy25pn07pzn6xx1",
                      "locality": "Shivananda Circle",
                      "areaName": "Seshadripuram",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Andhra",
                        "Biryani",
                        "South Indian"
                      ],
                      "avgRating": 4.5,
                      "parentId": "10496",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "2.6K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-05 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Andhra.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Andhra.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6ae29ec7-db00-46f6-bfd0-ffbff69bf65d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/andhra-gunpowder-shivananda-circle-seshadripuram-rest502957",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "750396",
                      "name": "Daily Kitchen - Homely Meals",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750396.JPG",
                      "locality": "Lakshmi Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Home Food",
                        "Indian",
                        "North Indian",
                        "Thalis"
                      ],
                      "avgRating": 4.5,
                      "parentId": "444382",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "594",
                      "sla": {
                        "deliveryTime": 15,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-20 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-05 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6ae29ec7-db00-46f6-bfd0-ffbff69bf65d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/daily-kitchen-homely-meals-lakshmi-road-central-bangalore-rest750396",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "503002",
                      "name": "NH1 Bowls - Highway To North",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/aea607a6-5ce6-4fe6-b7d1-7ba2bacdc647_503002.jpg",
                      "locality": "Lakshmi Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "Punjabi",
                        "Home Food"
                      ],
                      "avgRating": 4.6,
                      "parentId": "22452",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "742",
                      "sla": {
                        "deliveryTime": 15,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-20 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-05 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6ae29ec7-db00-46f6-bfd0-ffbff69bf65d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/nh1-bowls-highway-to-north-lakshmi-road-central-bangalore-rest503002",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "667962",
                      "name": "Paris Panini - Gourmet Sandwiches & Wraps",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/db53f58f-bbcc-4aab-a16b-8c7c5d0b84a1_667962.jpg",
                      "locality": "Church Street",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Continental",
                        "Pastas",
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Fast Food",
                        "French"
                      ],
                      "avgRating": 4.6,
                      "parentId": "21019",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "3.7K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-04 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "850"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6ae29ec7-db00-46f6-bfd0-ffbff69bf65d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/paris-panini-gourmet-sandwiches-and-wraps-church-street-central-bangalore-rest667962",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "5938",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/44bf0296-f353-400a-9812-c4b92eeaf2ab_5938.jpg",
                      "locality": "Tasker Town",
                      "areaName": "Shivaji Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.4,
                      "parentId": "166",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "38K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-05 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6ae29ec7-db00-46f6-bfd0-ffbff69bf65d"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/burger-king-tasker-town-shivaji-nagar-rest5938",
                      "type": "WEBLINK"
                    }
                  }]
                  

const ResturantCard = (props) => {

    const { resData } = props
    console.log(resData.info.name);
    
    
    
    return (
            <div className="res-card"> 
            <img className="res-logo" alt="food-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.avgRatingString}</h4>
            <h4>{resData.info.cuisines.join(",")}</h4> 
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.slaString}</h4>
            </div> 
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="searchbar">
                <input type="text" />
                <button>search</button>
            </div>
            <div className="res-container">
                {/* multiple resturantCards */}
                {resObject.map((data) => 
                    <ResturantCard key = {data.info.id} resData = {data} />
                )}

            </div>

        </div>
    )
}
const NavItems = () => (
  <div className="nav-items">
    <ul>
      <li>search</li>
      <li>offers</li>
      <li>help</li>
      <li>Sign In</li>
      <li>Cart</li>
    </ul>
  </div>
);

const Header = () => (
  <>
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="swiggy-logo"
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
        />
        <div className="location">
          <p>Bengaluru</p>
        </div>
      </div>
      <div>
        <NavItems />`
      </div>
    </div>
  </>
);

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
