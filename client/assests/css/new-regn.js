import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontSize": 12
    },
    "contentStage a": {
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "color": "white",
        "fontSize": "xx-small",
        "textDecoration": "none"
    },
    "m-header": {
        "background": "#e61e50",
        "textAlign": "center"
    },
    "m-menu": {
        "listStyleType": "none",
        "float": "right",
        "position": "relative",
        "top": -7
    },
    "m-menu li": {
        "float": "left",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderRight": "1px solid #000",
        "paddingTop": 0,
        "paddingRight": 7,
        "paddingBottom": 0,
        "paddingLeft": 7
    },
    "m-menu li a": {
        "textTransform": "uppercase",
        "color": "#FFF",
        "fontSize": 12
    },
    "m-logo": {
        "float": "left",
        "width": "40%"
    },
    "m-menu lilast": {
        "border": "none"
    },
    "m-sub-menu lilast": {
        "border": "none"
    },
    "content-grad": {
        "background": "url(/content/dam/sigma-aldrich/head/marketplace/gradient.png) repeat-x",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "m-search": {
        "float": "left",
        "width": "50%"
    },
    "m-search-text": {
        "width": "87%",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "fontSize": 14,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": 20,
        "border": "1px solid #ccc"
    },
    "m-search-button": {
        "height": 33,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "fontSize": 20,
        "position": "relative",
        "top": 2,
        "left": -5,
        "border": "1px solid #ccc",
        "background": "#aaa"
    },
    "m-sub-menu": {
        "listStyleType": "none",
        "float": "right",
        "position": "relative"
    },
    "m-sub-menu li": {
        "float": "left",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderRight": "1px solid #f82e27",
        "paddingTop": 0,
        "paddingRight": 7,
        "paddingBottom": 0,
        "paddingLeft": 7,
        "color": "#000"
    },
    "m-buttons": {
        "marginTop": 10
    },
    "m-buttons button": {
        "paddingTop": 8,
        "paddingRight": 20,
        "paddingBottom": 8,
        "paddingLeft": 20,
        "background": "#787878",
        "color": "#fff",
        "border": "none",
        "marginRight": 10,
        "cursor": "pointer"
    },
    "grey1-button": {
        "paddingTop": 8,
        "paddingRight": 20,
        "paddingBottom": 8,
        "paddingLeft": 20,
        "background": "#787878",
        "color": "#fff",
        "border": "none",
        "marginRight": 10,
        "cursor": "pointer"
    },
    "fl-rt": {
        "float": "right"
    },
    "structure-search": {
        "float": "right",
        "color": "#1d5293",
        "position": "relative",
        "top": 10,
        "right": 10
    },
    "clear": {
        "clear": "both"
    },
    "grayArrowBullet": {
        "fontFamily": "FontAwesome",
        "content": "\\f095"
    },
    "marketPlace h1": {
        "color": "#F82C24",
        "marginTop": 20
    },
    "form-lt": {
        "float": "left"
    },
    "form-rt": {
        "float": "left"
    },
    "m-form": {
        "marginTop": 10
    },
    "m-form h2": {
        "background": "#787878",
        "color": "#fff",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "m-bottom2": {
        "marginBottom": 2
    },
    "qty": {
        "textAlign": "right",
        "minWidth": "50px !important",
        "width": 50
    },
    "browse-btn": {
        "opacity": 0,
        "position": "absolute",
        "left": 0,
        "height": 30,
        "width": 70
    },
    "m-submitButton": {
        "display": "inline-block"
    },
    "m-footer": {
        "background": "#eee",
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0,
        "clear": "both",
        "float": "left",
        "width": "100%",
        "marginTop": 20,
        "fontSize": 30,
        "textAlign": "center"
    },
    "m-footer-pfo": {
        "background": "#eee",
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0,
        "clear": "both",
        "float": "left",
        "width": "100%",
        "marginTop": 30,
        "fontSize": 30,
        "textAlign": "center"
    },
    "m-ft": {
        "borderTop": "1px solid #f82e27"
    },
    "blue": {
        "color": "#1d5293"
    },
    "popover": {
        "color": "#1d5293"
    },
    "fa-question-circle": {
        "cursor": "pointer"
    },
    "pop-over": {
        "display": "none",
        "border": "1px solid #787878",
        "width": 200,
        "position": "absolute",
        "left": 0,
        "top": 0,
        "zIndex": 100,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "background": "#eee",
        "boxShadow": "7px 4px 10px 0px #666",
        "MozBoxShadow": "7px 4px 10px 0px #666",
        "WebkitBoxShadow": "7px 4px 10px 0px #666"
    },
    "pop-over-content": {
        "fontSize": "smaller"
    },
    "pop-over:after": {
        "right": "100%",
        "top": "20%",
        "border": "solid transparent",
        "content": " ",
        "height": 0,
        "width": 0,
        "position": "absolute",
        "pointerEvents": "none",
        "borderColor": "#eee",
        "borderRightColor": "#787878",
        "borderWidth": 7,
        "marginTop": -7
    },
    "pop-over:before": {
        "right": "100%",
        "top": "20%",
        "border": "solid transparent",
        "content": " ",
        "height": 0,
        "width": 0,
        "position": "absolute",
        "pointerEvents": "none"
    },
    "hr": {
        "marginTop": 0,
        "marginBottom": 10,
        "border": 0,
        "borderTop": "1px solid #aaa"
    },
    "a": {
        "color": "#1d5293"
    },
    "request-details li": {
        "float": "left",
        "width": "40%",
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "request-details": {
        "listStyleType": "none",
        "width": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "acc-header": {
        "background": "#787878",
        "color": "#fff",
        "clear": "both",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "marginTop": 20,
        "float": "left",
        "width": "100%",
        "boxShadow": "0px 6px 10px -6px #333",
        "MozBoxShadow": "0px 6px 10px -6px #333",
        "WebkitBoxShadow": "0px 6px 10px -6px #333"
    },
    "acc-plus": {
        "color": "#fff",
        "fontSize": 14,
        "cursor": "pointer",
        "float": "right"
    },
    "acc-content": {
        "paddingTop": 10,
        "paddingRight": 3,
        "paddingBottom": 10,
        "paddingLeft": 3,
        "float": "left",
        "width": "100.4%",
        "clear": "both"
    },
    "req-details": {
        "float": "left",
        "width": "30%",
        "marginRight": 10
    },
    "req-details label": {
        "color": "#000",
        "fontWeight": "bold"
    },
    "req-details ul": {
        "listStyleType": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "req-details ul li": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "offer label": {
        "fontWeight": "bold"
    },
    "prod-details label": {
        "fontWeight": "bold"
    },
    "expireDate": {
        "color": "#f82e27",
        "fontWeight": "bold",
        "display": "block",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "offer span": {
        "display": "block",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "offer-details-head": {
        "background": "#aaa",
        "float": "left",
        "width": "100%"
    },
    "offer-details-head div": {
        "float": "left",
        "width": "28%",
        "color": "#fff",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "offer-details": {
        "float": "left",
        "width": "100%",
        "marginBottom": 10
    },
    "offer-details div": {
        "float": "left",
        "width": "28%",
        "color": "#000",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "offer-details div input[type=\"text\"]": {
        "width": 40
    },
    "spancost": {
        "float": "right",
        "display": "inline !important",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "addToCart": {
        "marginTop": 20,
        "textAlign": "right"
    },
    "addToCart button": {
        "marginRight": 0
    },
    "button i": {
        "fontSize": 14
    },
    "offer": {
        "float": "left",
        "width": "24%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 216
    },
    "offers-block": {
        "float": "left",
        "width": "100.6%",
        "height": 229,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 25,
        "marginLeft": -3,
        "borderTop": "1px solid #ddd"
    },
    "acc-subheader": {
        "background": "#aaa",
        "color": "#fff",
        "clear": "both",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "float": "left",
        "width": "99%"
    },
    "last": {
        "border": "none"
    },
    "offerInner": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "height": 220,
        "cursor": "pointer",
        "WebkitTransition": "0.4s ease-in-out",
        "MozTransition": "0.4s ease-in-out",
        "OTransition": "0.4s ease-in-out",
        "transition": "0.4s ease-in-out",
        "borderRight": "1px solid #aaa",
        "borderBottom": "1px solid #eee"
    },
    "offerInner:hover": {
        "background": "#eee"
    },
    "selected": {
        "background": "#eee"
    },
    "rt-none": {
        "borderRight": "none !important"
    },
    "prod-details td": {
        "borderBottom": "1px solid #aaa",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderRight": "1px solid #aaa"
    },
    "red-border td": {
        "borderBottom": "1px solid #f82e27"
    },
    "search-criteria": {
        "background": "#eee",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "marginTop": 10,
        "float": "left",
        "width": "98%",
        "clear": "both"
    },
    "rec-type": {
        "float": "left",
        "width": "59%",
        "height": 40,
        "borderRight": "1px solid #ccc"
    },
    "rec-type div": {
        "float": "left",
        "width": "25%"
    },
    "show-all": {
        "paddingTop": 10,
        "float": "left",
        "width": "9%",
        "height": 30,
        "paddingLeft": 8,
        "borderRight": "1px solid #ccc"
    },
    "sort-by": {
        "float": "left",
        "width": "30%",
        "paddingTop": 7,
        "paddingLeft": 8
    },
    "sort-by select": {
        "width": 120
    },
    "rec-type label": {
        "position": "relative",
        "top": -2
    },
    "show-all label": {
        "position": "relative",
        "top": -2
    },
    "results": {
        "clear": "both",
        "marginTop": 20,
        "float": "left",
        "width": "100%"
    },
    "results th": {
        "textAlign": "left",
        "color": "#aaa",
        "textTransform": "uppercase",
        "verticalAlign": "top",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "borderBottom": "2px solid #ccc",
        "borderTop": "1px solid #ccc",
        "fontSize": 11
    },
    "results td": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "borderBottom": "1px solid #ccc"
    },
    "text-center": {
        "textAlign": "center"
    },
    "del": {
        "cursor": "pointer"
    },
    "searchResultsPagination": {
        "float": "right",
        "marginTop": 12,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "searchResultsPagination ul": {
        "float": "right"
    },
    "searchResultsPagination li": {
        "display": "inline-block",
        "Display": "inline",
        "zoom": 1,
        "paddingTop": 0,
        "paddingRight": 2,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": "1px solid #cacaca",
        "width": 16,
        "height": 21
    },
    "searchResultsPagination li a": {
        "color": "#665e58",
        "display": "inline-block",
        "Display": "inline",
        "zoom": 1,
        "height": 15,
        "paddingTop": 3,
        "paddingRight": 5,
        "paddingBottom": 3,
        "paddingLeft": 5,
        "backgroundColor": "#f2f2f2",
        "verticalAlign": "middle"
    },
    "searchResultsPagination extremePage": {
        "paddingRight": 10
    },
    "searchResultsPagination currentPage": {
        "border": "1px solid #fb8782",
        "backgroundColor": "red"
    },
    "searchResultsPagination currentPage a": {
        "color": "#FFF !important",
        "backgroundColor": "red"
    },
    "searchResultsPagination disabledPage": {
        "opacity": 0.5
    },
    "productContainer pcontainerTitle": {
        "color": "#403c36",
        "fontSize": "18px !important",
        "lineHeight": "30px !important",
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "productContainer pdouble": {
        "float": "left",
        "height": 30,
        "lineHeight": "30px !important"
    },
    "productContainer pcontainerSubText": {
        "paddingTop": 15,
        "float": "right"
    },
    "bcED": {
        "background": "#EDEDED"
    },
    "bcFA": {
        "background": "#FAFAFA"
    },
    "fB": {
        "fontWeight": "bold"
    },
    "product-details-block": {
        "float": "left",
        "width": "104%",
        "height": 214
    },
    "product-details": {
        "float": "left",
        "width": "22%",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderRight": "1px solid #aaa",
        "minHeight": 216
    },
    "product-details-last": {
        "float": "left",
        "width": "22%",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "minHeight": 216
    },
    "product-details-box": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderBottom": "1px solid #aaa",
        "width": "100%",
        "float": "left",
        "marginLeft": -10,
        "height": 13
    },
    "request-charges-block": {
        "float": "left",
        "width": "104%"
    },
    "request-charges": {
        "float": "left",
        "width": "22%",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "borderRight": "1px solid #aaa",
        "minHeight": 120
    },
    "request-charges-last": {
        "float": "left",
        "width": "22%",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "minHeight": 120
    },
    "request-charges-box": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderBottom": "1px solid #aaa",
        "width": "100%",
        "float": "left",
        "marginLeft": -10,
        "height": 13
    },
    "request-charges-box-red": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderBottom": "1px solid red",
        "width": "100%",
        "float": "left",
        "marginLeft": -10,
        "height": 13
    },
    "cancelUpload": {
        "position": "relative",
        "top": 0,
        "right": 384,
        "backgroundColor": "red",
        "width": 16,
        "height": 16,
        "marginTop": 1,
        "marginRight": -8,
        "marginBottom": 1,
        "marginLeft": -8,
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "textAlign": "center",
        "color": "white",
        "cursor": "pointer",
        "display": "none",
        "float": "right"
    },
    "red-button-big": {
        "paddingTop": 7,
        "paddingRight": 10,
        "paddingBottom": 7,
        "paddingLeft": 10,
        "background": "#f82e27",
        "color": "#fff",
        "border": "none",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3,
        "marginRight": 10,
        "display": "none"
    },
    "arrow-left": {
        "background": "#aaa",
        "float": "left",
        "width": 19,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "minHeight": 216,
        "color": "#fff",
        "position": "relative"
    },
    "arrow-right": {
        "background": "#aaa",
        "float": "right",
        "width": 19,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "minHeight": 216,
        "color": "#fff",
        "position": "relative"
    },
    "arrow-left span": {
        "position": "absolute",
        "top": "49%",
        "width": "100%",
        "left": 5
    },
    "arrow-right span": {
        "position": "absolute",
        "top": "49%",
        "width": "100%",
        "left": 5
    },
    "scroll-container": {
        "width": "100%",
        "overflow": "auto",
        "position": "relative",
        "marginBottom": 20
    },
    "main-scroll-container table td": {
        "whiteSpace": "nowrap",
        "borderRight": "1px solid #aaa"
    },
    "main-scroll-container td div": {
        "paddingTop": 10,
        "paddingRight": 45,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderBottom": "1px solid #aaa",
        "width": 197
    },
    "main-scroll-container td label": {
        "fontWeight": "bold"
    },
    "heading-div": {
        "position": "absolute",
        "left": "0xp",
        "top": 0,
        "zIndex": 10,
        "background": "#fff"
    },
    "main-scroll-container table tdlast": {
        "borderRight": "none"
    },
    "main-scroll-container": {
        "position": "relative",
        "width": "100%",
        "clear": "both"
    },
    "bt-red": {
        "borderTop": "1px solid red !important"
    },
    "prod-details-container": {
        "width": "101%",
        "clear": "both",
        "position": "relative",
        "float": "left",
        "marginBottom": 20
    },
    "prod-details-head": {
        "float": "left",
        "width": 238
    },
    "prod-details-body": {
        "float": "left",
        "width": 771
    },
    "prod-details-head div": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontWeight": "bold",
        "borderBottom": "1px solid #aaa"
    },
    "prod-details-body arrow-left": {
        "minHeight": 184
    },
    "prod-details-body arrow-right": {
        "minHeight": 184
    },
    "prod-details": {
        "float": "left",
        "width": "100%",
        "height": 60,
        "backgroundColor": "#fff",
        "color": "black",
        "fontSize": "smaller",
        "border": "1px solid #ccc",
        "display": "none"
    },
    "prod": {
        "width": 243,
        "float": "left",
        "borderRight": "1px solid #aaa"
    },
    "prod div": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderBottom": "1px solid #aaa"
    },
    "prod-details last": {
        "borderRight": "none"
    },
    "request-charge-container arrow-left": {
        "minHeight": 117
    },
    "request-charge-container arrow-right": {
        "minHeight": 117
    },
    "prod-details-header": {
        "height": 26,
        "float": "right",
        "cursor": "pointer",
        "visibility": "hidden"
    },
    "prod-details-header img": {
        "marginTop": 3,
        "marginRight": 6,
        "marginBottom": 1,
        "marginLeft": 0,
        "height": 18
    },
    "prod-details-table": {
        "tableLayout": "fixed",
        "borderCollapse": "collapse"
    },
    "prod-details-table td": {
        "wordWrap": "break-word",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "border": "1px solid #ccc",
        "verticalAlign": "top"
    },
    "prod-details-table th": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "border": "1px solid #ccc",
        "verticalAlign": "top",
        "textAlign": "left",
        "background": "#aaa",
        "color": "#fff",
        "wordWrap": "normal"
    },
    "slick-prev": {
        "display": "inline-block",
        "position": "absolute",
        "backgroundColor": "#CCC",
        "color": "#FFF",
        "border": "none",
        "height": "92%",
        "width": 30,
        "top": 0,
        "cursor": "pointer",
        "outline": "none",
        "opacity": 0.2,
        "WebkitTransition": "0.2s ease-in-out",
        "MozTransition": "0.2s ease-in-out",
        "OTransition": "0.2s ease-in-out",
        "transition": "0.2s ease-in-out"
    },
    "slick-next": {
        "display": "inline-block",
        "position": "absolute",
        "backgroundColor": "#CCC",
        "color": "#FFF",
        "border": "none",
        "height": "92%",
        "width": 30,
        "top": 0,
        "right": 0,
        "cursor": "pointer",
        "outline": "none",
        "opacity": 0.2,
        "WebkitTransition": "0.2s ease-in-out",
        "MozTransition": "0.2s ease-in-out",
        "OTransition": "0.2s ease-in-out",
        "transition": "0.2s ease-in-out"
    },
    "slick-prev:hover": {
        "boxShadow": "-5px 5px 5px #666",
        "MozBoxShadow": "-5px 5px 5px #666",
        "WebkitBoxShadow": "-5px 5px 5px #666"
    },
    "slick-next:hover": {
        "boxShadow": "5px 5px 5px #666",
        "MozBoxShadow": "5px 5px 5px #666",
        "WebkitBoxShadow": "5px 5px 5px #666"
    },
    "slick-prev:focus:active": {
        "boxShadow": "none",
        "MozBoxShadow": "none",
        "WebkitBoxShadow": "none",
        "backgroundColor": "#666"
    },
    "slick-next:focus:active": {
        "boxShadow": "none",
        "MozBoxShadow": "none",
        "WebkitBoxShadow": "none",
        "backgroundColor": "#666"
    },
    "prod-details-title": {
        "float": "left",
        "width": "100%",
        "backgroundColor": "#aaa",
        "color": "white",
        "fontSize": "smaller",
        "borderTop": "1px solid #ccc",
        "borderRight": "1px solid #ccc",
        "borderLeft": "1px solid #ccc",
        "height": 40
    },
    "prod-details-title > mName": {
        "width": "17%",
        "height": 20,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "fontWeight": "bold",
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "borderBottom": "1px solid #ccc"
    },
    "prod-details-title > mPartNo": {
        "width": "8%",
        "height": 20,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "fontWeight": "bold",
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "borderBottom": "1px solid #ccc"
    },
    "prod-details-title > mNo": {
        "width": "9%",
        "height": 20,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "fontWeight": "bold",
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "borderBottom": "1px solid #ccc"
    },
    "prod-details-title > sDesc": {
        "width": "12%",
        "height": 20,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "fontWeight": "bold",
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "borderBottom": "1px solid #ccc"
    },
    "prod-details-title > lDesc": {
        "width": "18%",
        "height": 20,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "fontWeight": "bold",
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "borderBottom": "1px solid #ccc"
    },
    "prod-details-title > cNo": {
        "width": "7%",
        "height": 20,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "fontWeight": "bold",
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "borderBottom": "1px solid #ccc"
    },
    "prod-details-title > sFee": {
        "width": "7%",
        "height": 20,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "fontWeight": "bold",
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "borderBottom": "1px solid #ccc"
    },
    "prod-details-title > cust": {
        "width": "7%",
        "height": 20,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "fontWeight": "bold",
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "borderBottom": "1px solid #ccc"
    },
    "prod-details-title > snh": {
        "width": "7%",
        "height": 20,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "fontWeight": "bold",
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "borderBottom": "1px solid #ccc"
    },
    "prod-details-title > tCharge": {
        "width": "7%",
        "height": 20,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "fontWeight": "bold",
        "textAlign": "center",
        "float": "left",
        "borderBottom": "1px solid #ccc"
    },
    "prod-details > mName": {
        "width": "17%",
        "height": "69%",
        "overflowY": "auto",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "wordWrap": "break-word"
    },
    "prod-details > mPartNo": {
        "width": "8%",
        "height": "69%",
        "overflowY": "auto",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "wordWrap": "break-word"
    },
    "prod-details > mNo": {
        "width": "9%",
        "height": "69%",
        "overflowY": "auto",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "wordWrap": "break-word"
    },
    "prod-details > sDesc": {
        "width": "12%",
        "height": "69%",
        "overflowY": "auto",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "wordWrap": "break-word"
    },
    "prod-details > lDesc": {
        "width": "18%",
        "height": "69%",
        "overflowY": "auto",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "wordWrap": "break-word"
    },
    "prod-details > cNo": {
        "width": "7%",
        "height": "69%",
        "overflowY": "auto",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "wordWrap": "break-word"
    },
    "prod-details > sFee": {
        "width": "7%",
        "height": "69%",
        "overflowY": "auto",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "wordWrap": "break-word"
    },
    "prod-details > cust": {
        "width": "7%",
        "height": "69%",
        "overflowY": "auto",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "wordWrap": "break-word"
    },
    "prod-details > snh": {
        "width": "7%",
        "height": "69%",
        "overflowY": "auto",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "textAlign": "center",
        "float": "left",
        "borderRight": "1px solid #ccc",
        "wordWrap": "break-word"
    },
    "prod-details > tCharge": {
        "width": "7%",
        "height": "69%",
        "overflowY": "auto",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "textAlign": "center",
        "float": "left",
        "wordWrap": "break-word"
    },
    "statusMsg": {
        "border": "1px solid #ccc",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "boxShadow": "0px 0px 5px 0px #ededed",
        "MozBoxShadow": "0px 0px 5px 0px #ededed",
        "WebkitBoxShadow": "0px 0px 5px 0px #ededed",
        "marginBottom": 10,
        "display": "none"
    },
    "statusMsg > div:nth-child(1)": {
        "width": 40,
        "float": "left"
    },
    "statusMsg > div:nth-child(2)": {
        "height": 30,
        "marginTop": 7
    },
    "m-content": {
        "width": 1010,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "cqfooter": {
        "float": "left",
        "width": "100%"
    },
    "arrow-down": {
        "width": 0,
        "height": 0,
        "borderLeft": "20px solid transparent",
        "borderRight": "20px solid transparent",
        "borderTop": "20px solid #eee",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "rd-rows": {
        "float": "left",
        "width": "100%",
        "minHeight": 40
    },
    "rd-rows:nth-child(even)": {
        "background": "#fff"
    },
    "rd-rows:nth-child(odd)": {
        "background": "#f9f9f9"
    },
    "rd-rows-header": {
        "float": "left",
        "width": "100%",
        "minHeight": 20,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "fontWeight": "bold",
        "borderBottom": "1px solid #eee"
    },
    "rd-rows-header > div:nth-child(1)": {
        "marginTop": 2,
        "float": "left",
        "paddingRight": 6
    },
    "rd-rows-header > div:nth-child(2)": {
        "cursor": "pointer",
        "width": 16,
        "height": 16,
        "float": "left"
    },
    "istd": {
        "background": "url(/content/dam/sigma-aldrich/head/marketplace/idown.png) no-repeat"
    },
    "iright": {
        "WebkitTransform": "rotate(-90deg)",
        "MozTransform": "rotate(-90deg)",
        "MsTransform": "rotate(-90deg)",
        "OTransform": "rotate(-90deg)",
        "transform": "rotate(-90deg)",
        "WebkitTransition": "0.6s ease-in-out",
        "MozTransition": "0.6s ease-in-out",
        "OTransition": "0.6s ease-in-out",
        "transition": "0.6s ease-in-out"
    },
    "rd-rows-details": {
        "float": "left",
        "width": "100%"
    },
    "rd-col-1": {
        "float": "left",
        "width": "49%",
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 6
    },
    "rd-col-2": {
        "float": "right",
        "width": "50%",
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto"
    },
    "rd-col-key": {
        "float": "left",
        "width": "30%",
        "fontSize": 13
    },
    "rd-col-val": {
        "float": "right",
        "width": "70%",
        "color": "#999"
    },
    "longDiv": {
        "width": "90%",
        "height": 80,
        "overflowY": "scroll",
        "overflowX": "hidden",
        "border": "1px solid #eee"
    },
    "renew-block": {
        "width": 100,
        "marginTop": -11,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": "77%"
    },
    "renew-btn": {
        "paddingTop": 10,
        "paddingRight": 30,
        "paddingBottom": 10,
        "paddingLeft": 30,
        "borderLeft": "1px solid #aaa",
        "borderBottom": "1px solid #aaa",
        "borderRight": "1px solid #aaa",
        "borderTop": "none",
        "backgroundColor": "#fff",
        "color": "#E32316",
        "cursor": "pointer",
        "outline": "none",
        "fontWeight": "bold"
    },
    "renew-btn:hover": {
        "boxShadow": "0px 7px 10px 0px #ededed",
        "MozBoxShadow": "0px 7px 10px 0px #ededed",
        "WebkitBoxShadow": "0px 7px 10px 0px #ededed"
    },
    "renew-btn:active": {
        "boxShadow": "none",
        "MozBoxShadow": "none",
        "WebkitBoxShadow": "none"
    },
    "renew-btn:disabled": {
        "paddingTop": 10,
        "paddingRight": 30,
        "paddingBottom": 10,
        "paddingLeft": 30,
        "borderLeft": "1px solid #aaa",
        "borderBottom": "1px solid #aaa",
        "borderRight": "1px solid #aaa",
        "borderTop": "none",
        "backgroundColor": "#fff",
        "color": "#ededed",
        "outline": "none",
        "fontWeight": "bold"
    },
    "deep-down-cnt": {
        "width": 1000,
        "float": "left"
    },
    "deep-down-img": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 130,
        "height": 130,
        "backgroundImage": "url('../images/deep-down-img.png')"
    },
    "deep-down-msg": {
        "textAlign": "center",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontSize": 30,
        "color": "#666",
        "fontStretch": "condensed",
        "fontWeight": "bold",
        "fontStyle": "italic"
    }
});