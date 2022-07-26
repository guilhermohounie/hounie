export function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    day: "numeric",
    weekday: "short",
  });
}
