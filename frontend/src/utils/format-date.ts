export function formatDate(dateText: string): string {
  const parts = dateText.split("-").map(Number);
  let date: Date;

  if (dateText.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const [year, month, day] = parts;
    date = new Date(year, month - 1, day);
  } else {
    const [day, month, year] = parts;
    date = new Date(year, month - 1, day);
  }

  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
