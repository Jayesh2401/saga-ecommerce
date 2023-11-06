import { USERDATA ,FINALCARTVIEW, ADDITEMTOCART ,REMOVEITEMTOCART} from "./types"
// let totalItems= 0;
export const USERDATAS = (userDetail) => {
    // const data = totalItems+=1;
    // console.log(data)
    return {
        type : USERDATA ,
        payload: userDetail
        
    }
}

export const FINALCARTVIEWS = (finalProducts) => {
    return {
        type : FINALCARTVIEW,
        payload: finalProducts
    }
}

export const ADDITEMTOCARTS = (itemAdded) => {
    console.log(itemAdded)
    return {
        type : ADDITEMTOCART,
        payload: itemAdded
    }
}


export const REMOVEITEMTOCARTS = (itemAdded) => {
    return {
        type : REMOVEITEMTOCART,
        payload: itemAdded
    }
}
