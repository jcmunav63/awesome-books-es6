export function updateDateTime() {
  const currentDateTime = new Date();
  const datetimeElement = document.getElementById('datetime');
  datetimeElement.textContent = currentDateTime.toLocaleString();
}