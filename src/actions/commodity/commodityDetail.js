import {HIDDEN_COMMODITY_DETAIL, GET_DETAIL_DATA} from "../../constants/constant"

export function hiddenCommodityDetail(displayDetail,detailData){
    //取消锁定滚动条
    $("body").attr("class","");
    return {
        type:HIDDEN_COMMODITY_DETAIL,
        displayDetail:displayDetail,
        detailData:detailData
    }
}

