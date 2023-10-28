import React from "react";
import ReactDom from "react-dom";
import App from "./App";

/**
 * JSファイル内にHTMLを書いていく
 * <React.Fragment>で囲むと、画面上に余計な要素を出力することなく、タグを囲むことができる
 * ※何もない<></>でもよい。
 */
/*
const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};
*/

//rootのdivにAppを反映する。
ReactDom.render(<App />, document.getElementById("root"));
