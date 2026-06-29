const flakes = [
  { left: "3%", top: "4%", size: 42, opacity: 0.28, rotate: -14 },
  { left: "12%", top: "7%", size: 24, opacity: 0.24, rotate: 18 },
  { left: "24%", top: "4%", size: 36, opacity: 0.22, rotate: 8 },
  { left: "38%", top: "9%", size: 26, opacity: 0.25, rotate: -6 },
  { left: "55%", top: "5%", size: 54, opacity: 0.2, rotate: 12 },
  { left: "72%", top: "7%", size: 48, opacity: 0.26, rotate: 18 },
  { left: "91%", top: "11%", size: 34, opacity: 0.3, rotate: -20 },
  { left: "6%", top: "18%", size: 58, opacity: 0.2, rotate: 10 },
  { left: "17%", top: "22%", size: 28, opacity: 0.27, rotate: -9 },
  { left: "31%", top: "19%", size: 46, opacity: 0.21, rotate: 15 },
  { left: "47%", top: "23%", size: 30, opacity: 0.24, rotate: -18 },
  { left: "63%", top: "20%", size: 44, opacity: 0.24, rotate: 15 },
  { left: "84%", top: "25%", size: 64, opacity: 0.18, rotate: -10 },
  { left: "95%", top: "27%", size: 32, opacity: 0.24, rotate: 11 },
  { left: "7%", top: "34%", size: 33, opacity: 0.26, rotate: 5 },
  { left: "22%", top: "38%", size: 52, opacity: 0.18, rotate: -16 },
  { left: "40%", top: "36%", size: 26, opacity: 0.26, rotate: 9 },
  { left: "51%", top: "34%", size: 60, opacity: 0.18, rotate: 20 },
  { left: "69%", top: "40%", size: 31, opacity: 0.27, rotate: -18 },
  { left: "92%", top: "44%", size: 44, opacity: 0.22, rotate: 11 },
  { left: "2%", top: "48%", size: 38, opacity: 0.22, rotate: -7 },
  { left: "15%", top: "51%", size: 50, opacity: 0.25, rotate: -14 },
  { left: "35%", top: "54%", size: 29, opacity: 0.24, rotate: 4 },
  { left: "57%", top: "57%", size: 66, opacity: 0.16, rotate: -7 },
  { left: "74%", top: "55%", size: 39, opacity: 0.24, rotate: 22 },
  { left: "86%", top: "61%", size: 36, opacity: 0.27, rotate: 16 },
  { left: "6%", top: "67%", size: 58, opacity: 0.2, rotate: 8 },
  { left: "19%", top: "65%", size: 27, opacity: 0.24, rotate: -11 },
  { left: "28%", top: "70%", size: 34, opacity: 0.23, rotate: -20 },
  { left: "43%", top: "69%", size: 48, opacity: 0.18, rotate: 8 },
  { left: "66%", top: "72%", size: 52, opacity: 0.2, rotate: 13 },
  { left: "79%", top: "70%", size: 30, opacity: 0.27, rotate: -8 },
  { left: "92%", top: "77%", size: 31, opacity: 0.27, rotate: -8 },
  { left: "4%", top: "82%", size: 42, opacity: 0.17, rotate: -3 },
  { left: "17%", top: "83%", size: 39, opacity: 0.24, rotate: 19 },
  { left: "32%", top: "87%", size: 26, opacity: 0.26, rotate: 8 },
  { left: "43%", top: "85%", size: 68, opacity: 0.16, rotate: -12 },
  { left: "59%", top: "88%", size: 34, opacity: 0.24, rotate: 18 },
  { left: "76%", top: "88%", size: 36, opacity: 0.28, rotate: 6 },
  { left: "90%", top: "93%", size: 56, opacity: 0.18, rotate: 22 },
  { left: "9%", top: "95%", size: 28, opacity: 0.23, rotate: -3 },
  { left: "25%", top: "96%", size: 34, opacity: 0.2, rotate: 13 },
  { left: "54%", top: "96%", size: 46, opacity: 0.2, rotate: 17 },
  { left: "70%", top: "97%", size: 26, opacity: 0.26, rotate: -14 },
  { left: "48%", top: "13%", size: 72, opacity: 0.14, rotate: -20 },
  { left: "83%", top: "15%", size: 26, opacity: 0.3, rotate: 7 },
  { left: "10%", top: "28%", size: 76, opacity: 0.13, rotate: 21 },
  { left: "78%", top: "34%", size: 58, opacity: 0.17, rotate: -15 },
  { left: "25%", top: "46%", size: 24, opacity: 0.28, rotate: 19 },
  { left: "94%", top: "53%", size: 68, opacity: 0.14, rotate: -9 },
  { left: "12%", top: "58%", size: 32, opacity: 0.25, rotate: 10 },
  { left: "50%", top: "75%", size: 74, opacity: 0.14, rotate: 13 },
  { left: "84%", top: "84%", size: 26, opacity: 0.27, rotate: -11 },
  { left: "36%", top: "92%", size: 58, opacity: 0.15, rotate: 24 },
];

export function Snowflakes() {
  return (
    <div className="snow-layer" aria-hidden="true">
      {flakes.map((flake, index) => (
        <span
          key={index}
          style={{
            left: flake.left,
            top: flake.top,
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
            transform: `rotate(${flake.rotate}deg)`,
          }}
        >
          {index % 4 === 0 ? "✻" : index % 4 === 1 ? "❄" : index % 4 === 2 ? "✼" : "❅"}
        </span>
      ))}
    </div>
  );
}
