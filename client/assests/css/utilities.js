import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "i": {
        "fontStyle": "italic"
    },
    "fL": {
        "float": "left"
    },
    "fR": {
        "float": "right"
    },
    "ht20": {
        "height": 20
    },
    "ht40": {
        "height": 40
    },
    "ht85": {
        "height": 85
    },
    "ht500": {
        "height": 500
    },
    "w5PER": {
        "width": "5%"
    },
    "w10PER": {
        "width": "10%"
    },
    "w15PER": {
        "width": "15%"
    },
    "w25PER": {
        "width": "25%"
    },
    "w33PER": {
        "width": "33%"
    },
    "w35PER": {
        "width": "35%"
    },
    "w40PER": {
        "width": "40%"
    },
    "w45PER": {
        "width": "45%"
    },
    "w50PER": {
        "width": "50%"
    },
    "w60PER": {
        "width": "60%"
    },
    "w65PER": {
        "width": "65%"
    },
    "w85PER": {
        "width": "85%"
    },
    "w99PER": {
        "width": "99%"
    },
    "w100PER": {
        "width": "100%"
    },
    "w45": {
        "width": 45
    },
    "w60": {
        "width": 60
    },
    "w100": {
        "width": 100
    },
    "w150": {
        "width": 150
    },
    "w200": {
        "width": 200
    },
    "w270": {
        "width": 270
    },
    "w272": {
        "width": 272
    },
    "w284": {
        "width": 284
    },
    "w400": {
        "width": 400
    },
    "w412": {
        "width": 412
    },
    "w600": {
        "width": 600
    },
    "w850": {
        "width": 850
    },
    "w988": {
        "width": 988
    },
    "w1010": {
        "width": 1010
    },
    "p0": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "m0A": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "ml10": {
        "marginLeft": 10
    },
    "ml15": {
        "marginLeft": 15
    },
    "ml20": {
        "marginLeft": 20
    },
    "ml30": {
        "marginLeft": 30
    },
    "ml70": {
        "marginLeft": 70
    },
    "ml90": {
        "marginLeft": 90
    },
    "ml120": {
        "marginLeft": 120
    },
    "ml155": {
        "marginLeft": 155
    },
    "ml200": {
        "marginLeft": 200
    },
    "ml205": {
        "marginLeft": 205
    },
    "ml295": {
        "marginLeft": 295
    },
    "mb0": {
        "marginBottom": 0
    },
    "mb1": {
        "marginBottom": 1
    },
    "mb5": {
        "marginBottom": 5
    },
    "mb10": {
        "marginBottom": 10
    },
    "mb20": {
        "marginBottom": 20
    },
    "mb30": {
        "marginBottom": 30
    },
    "mb35": {
        "marginBottom": 35
    },
    "mb40": {
        "marginBottom": 40
    },
    "mb50": {
        "marginBottom": 50
    },
    "mb-6": {
        "marginBottom": -6
    },
    "mb32-5": {
        "marginBottom": 32.5
    },
    "mt-6": {
        "marginTop": -6
    },
    "mt-15": {
        "marginTop": -15
    },
    "mt-33": {
        "marginTop": -33
    },
    "mt-193": {
        "marginTop": -193
    },
    "mt20": {
        "marginTop": 20
    },
    "mt25": {
        "marginTop": 25
    },
    "mt6": {
        "marginTop": 6
    },
    "mt10": {
        "marginTop": 10
    },
    "mt15": {
        "marginTop": 15
    },
    "mt22-5": {
        "marginTop": 22.5
    },
    "mt30": {
        "marginTop": 30
    },
    "mt42": {
        "marginTop": 42
    },
    "mt43": {
        "marginTop": 43
    },
    "mt45": {
        "marginTop": 45
    },
    "mr10": {
        "marginRight": 10
    },
    "mr15": {
        "marginRight": 15
    },
    "mr20": {
        "marginRight": 20
    },
    "mr495": {
        "marginRight": 495
    },
    "mr470": {
        "marginRight": 470
    },
    "mt0": {
        "marginTop": 0
    },
    "mt-18": {
        "marginTop": -18
    },
    "mr-12": {
        "marginRight": -12
    },
    "mr-16": {
        "marginRight": -16
    },
    "mr-155": {
        "marginRight": -155
    },
    "mr-195": {
        "marginRight": -195
    },
    "mr75": {
        "marginRight": 75
    },
    "mr100": {
        "marginRight": 100
    },
    "grey": {
        "color": "#aaa"
    },
    "borderR999": {
        "borderRight": "1px solid #999"
    },
    "bbCCC": {
        "borderBottom": "1px solid #ccc"
    },
    "bb999-2": {
        "borderBottom": "2px solid #999"
    },
    "bbFFF": {
        "borderBottom": "1px solid #fff"
    },
    "fN100": {
        "fontWeight": "100"
    },
    "fN700": {
        "fontWeight": "700"
    },
    "fs13": {
        "fontSize": 13
    },
    "fs14": {
        "fontSize": 14
    },
    "c999": {
        "color": "#999"
    },
    "tAC": {
        "textAlign": "center"
    },
    "mH55": {
        "minHeight": 55
    },
    "mH65": {
        "minHeight": 65
    },
    "tDLT": {
        "textDecoration": "line-through"
    }
});