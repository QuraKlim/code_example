export function dateToString(date: string) {
  return new Date(date).toLocaleString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
