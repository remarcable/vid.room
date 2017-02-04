export default function formatSeconds(seconds) {
  const date = new Date(0, 0, 0, 0, 0, seconds);
  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();

  return hh ? `${hh}:${pad(mm)}:${pad(ss)}` : `${mm}:${pad(ss)}`;
}

function pad(string) {
  return (`0${string}`).slice(-2);
}
