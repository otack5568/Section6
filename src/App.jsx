import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/colorfulMessage";

/**
 * タグ内の{}：jsの処理を書く
 */
const App = () => {
  console.log("AAA");
  const [num, setNum] = useState(0);
  //初期値,変更用
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    //第二引数に配列をセットすると、配列内にある変数が変わったときだけ、内部の処理を実行する
    if (num > 0) {
      if (num % 3 === 0) {
        //faceShowFlagがすでにTrue→フラグ更新は実行しない
        //stateが変わると、Appの頭から再実行してしまう。何も考えないと無限ループ
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか? </ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^_^)</p>}
    </>
  );
};

//Appを外だし可能にする。
export default App;
