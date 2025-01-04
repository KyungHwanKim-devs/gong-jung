export function Loading({
  width,
  color = "white",
  mainColor = "gray",
}: {
  width?: number;
  color?: "gray" | "white";
  mainColor?: string;
}) {
  const circleSize = width ? width * 0.66 : 200;

  const smallCircleColor = color === "white" ? "bg-white" : "bg-gray-300";
  const bigCircleColor = mainColor === "gray" ? "bg-shark-400" : "bg-shark-400";

  return (
    <div
      className="relative"
      style={{
        width: width
          ? width + circleSize * 0.5 * 0.34
          : 300 + circleSize * 0.5 * 0.34,
        height: width
          ? width + circleSize * 0.5 * 0.34
          : 300 + circleSize * 0.5 * 0.34,
      }}
    >
      <div
        style={{
          width: width ?? 300,
          height: width ?? 300,
          marginTop: circleSize * 0.5 * 0.34,
        }}
        className="aspect-square relative"
      >
        {/* 작은 원 */}
        <div
          className={`absolute inset-0 m-auto aspect-square rounded-full ${smallCircleColor} animate-smallCircle`}
          style={{
            width: circleSize,
            transformOrigin: "center",
          }}
        />

        {/* 큰 원 */}
        <div
          className={`absolute inset-0 m-auto aspect-square rounded-full ${bigCircleColor} animate-bigCircle`}
          style={{
            width: circleSize,
            transformOrigin: "center",
          }}
        />
      </div>
    </div>
  );
}
