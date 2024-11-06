export function cn(...inputs) {
  return inputs.join(" ");
}

export function ScrollToTop() {
  window.scrollTo(0, 0);
}

export function formatDate(date) {
  const [day, month, year] = new Date(date)
    .toLocaleDateString("en-UK")
    .split("/");
  return year + "-" + month + "-" + day;
}
