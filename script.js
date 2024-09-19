function updateClock() {
    const now = new Date();
    const timeOptions = { timeZone: 'Asia/Seoul', hour12: true, hour: '2-digit', minute: '2-digit' };
    const timeString = now.toLocaleTimeString('ko-KR', timeOptions);

    const year = now.getFullYear() + '년';
    const month = (now.getMonth() + 1) + '월';
    const day = now.getDate() + '일';
    const weekday = now.toLocaleDateString('ko-KR', { weekday: 'long', timeZone: 'Asia/Seoul' });

    document.getElementById('date').innerHTML = `${year} ${month} ${day}<br><span>${weekday}</span>`;
    document.getElementById('time').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();