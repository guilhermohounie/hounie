export function toBlurHash(rgb: [number, number, number]) {
  return (
    "data:image/svg+xml;base64, " +
    Buffer.from(
      `<svg width="640" height="400" viewBox="0 0 640 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="400" fill="rgb(${rgb[0]},${rgb[1]},${rgb[2]})"/>
    </svg>`
    ).toString("base64")
  );
}
