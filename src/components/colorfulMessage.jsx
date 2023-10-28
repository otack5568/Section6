import React from "react";

//引数で、呼び出し側のパラメータを受け取れる。
const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };
  //props.childrenで、タグの中にある要素（今回は文字列）を取得できる
  return <p style={contentStyle}>{props.children}</p>;
};
export default ColorfulMessage;
