export default function currentCountdown(arrYYYYMMDDHHMMSS, setState) {
  const futureDate = new Date(...arrYYYYMMDDHHMMSS).getTime();

  const intervalKey = setInterval(function () {
    const nowDate = new Date().getTime();
    const timeLeft = futureDate - nowDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    setState({ days, hours, minutes, seconds });
  }, 1000);

  return intervalKey;
}
