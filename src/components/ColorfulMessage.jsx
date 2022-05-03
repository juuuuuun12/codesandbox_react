import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入(props何某を何度も書くのは手間)
  const { color, children } = props;
  const contentStyle = {
    // css要素とconst名が一致している場合は省略できる
    // color: color,
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
