import React from "react";
import ReactWordcloud from "react-wordcloud";

const words = [
  {
    text: "나나나",
    value: 89,
  },
  {
    text: "you",
    value: 66,
  },
  {
    text: "하지만",
    value: 52,
  },
  {
    text: "ola",
    value: 48,
  },
  {
    text: "사랑을",
    value: 43,
  },
  {
    text: "사랑해",
    value: 40,
  },
  {
    text: "영원히",
    value: 34,
  },
  {
    text: "그대를",
    value: 32,
  },
  {
    text: "baby",
    value: 32,
  },
  {
    text: "언제나",
    value: 30,
  },
  {
    text: "이렇게",
    value: 29,
  },
  {
    text: "나만의",
    value: 28,
  },
  {
    text: "있다면",
    value: 23,
  },
  {
    text: "love",
    value: 22,
  },
  {
    text: "마지막",
    value: 21,
  },
  {
    text: "그대의",
    value: 21,
  },
  {
    text: "리듬에",
    value: 20,
  },
  {
    text: "call",
    value: 20,
  },
  {
    text: "마음을",
    value: 19,
  },
  {
    text: "모든걸",
    value: 19,
  },
  {
    text: "하지마",
    value: 18,
  },
  {
    text: "괜찮아",
    value: 18,
  },
  {
    text: "그대여",
    value: 17,
  },
  {
    text: "그대와",
    value: 17,
  },
  {
    text: "the",
    value: 17,
  },
  {
    text: "없어요",
    value: 17,
  },
  {
    text: "너무나",
    value: 17,
  },
  {
    text: "시간이",
    value: 15,
  },
  {
    text: "down",
    value: 15,
  },
  {
    text: "않아도",
    value: 15,
  },
  {
    text: "get",
    value: 15,
  },
  {
    text: "Goodbye",
    value: 15,
  },
  {
    text: "Say",
    value: 15,
  },
  {
    text: "for",
    value: 14,
  },
  {
    text: "하늘을",
    value: 14,
  },
  {
    text: "이제는",
    value: 14,
  },
  {
    text: "세상이",
    value: 14,
  },
  {
    text: "돌아올",
    value: 14,
  },
  {
    text: "I'm",
    value: 14,
  },
  {
    text: "그렇게",
    value: 14,
  },
  {
    text: "미안해",
    value: 13,
  },
  {
    text: "come",
    value: 13,
  },
  {
    text: "어떻게",
    value: 13,
  },
  {
    text: "아름다운",
    value: 13,
  },
  {
    text: "사랑했던",
    value: 13,
  },
  {
    text: "눈물이",
    value: 13,
  },
  {
    text: "그리고",
    value: 13,
  },
  {
    text: "너에게",
    value: 12,
  },
  {
    text: "세상에",
    value: 12,
  },
  {
    text: "CRY",
    value: 12,
  },
  {
    text: "CAN'T",
    value: 12,
  },
  {
    text: "다시는",
    value: 11,
  },
  {
    text: "있도록",
    value: 11,
  },
  {
    text: "그대는",
    value: 11,
  },
  {
    text: "너무나도",
    value: 11,
  },
  {
    text: "즐거운",
    value: 11,
  },
  {
    text: "눈물을",
    value: 11,
  },
  {
    text: "need",
    value: 11,
  },
  {
    text: "버렸어",
    value: 10,
  },
  {
    text: "자꾸만",
    value: 10,
  },
  {
    text: "사랑은",
    value: 10,
  },
  {
    text: "싶었어",
    value: 10,
  },
  {
    text: "사랑이",
    value: 10,
  },
  {
    text: "없다고",
    value: 10,
  },
  {
    text: "언젠가",
    value: 10,
  },
  {
    text: "그대로",
    value: 10,
  },
  {
    text: "나에게",
    value: 10,
  },
  {
    text: "이대로",
    value: 10,
  },
  {
    text: "우리가",
    value: 10,
  },
  {
    text: "말아줘",
    value: 10,
  },
  {
    text: "하늘이",
    value: 10,
  },
  {
    text: "사랑하는",
    value: 10,
  },
  {
    text: "변하지",
    value: 10,
  },
  {
    text: "보이지",
    value: 10,
  },
  {
    text: "say",
    value: 10,
  },
  {
    text: "사람은",
    value: 10,
  },
  {
    text: "스뜹뜨르르듭듭듭",
    value: 10,
  },
  {
    text: "흥겨운",
    value: 10,
  },
  {
    text: "사랑에",
    value: 10,
  },
  {
    text: "아직도",
    value: 10,
  },
  {
    text: "가슴에",
    value: 10,
  },
  {
    text: "몰랐던",
    value: 10,
  },
];

interface options {
  rotations: number;
  rotationAngles: [number, number];
}

const options: options = {
  rotations: 2,
  rotationAngles: [0, 0],
};

function AnnualKeyword() {
  return <ReactWordcloud words={words} size={[336, 240]} options={options} />;
}

export default AnnualKeyword;
