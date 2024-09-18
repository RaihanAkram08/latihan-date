const currentTime = new Date();
currentTime.getTime()

console.log(currentTime.getTime());

for (let i = 0; i < 10000; i++) { console.log("Hello Santri") };

const timeAfterCounting = new Date();
timeAfterCounting.getTime()

console.log(timeAfterCounting.getTime());

const time = timeAfterCounting - currentTime;

console.log(time); // Output 1128


function createOnlineMeetingSchedule(timeString) {
  // Konversi string waktu ke objek Date
  const originalDate = new Date(timeString);

  // Dapatkan zona waktu WIB (asumsi UTC+7)
  const wibOffset = 7 * 60 * 60 * 1000; // dalam milidetik

  // Konversi ke UTC
  const utcDate = new Date(originalDate.getTime() - wibOffset);

  // Simpan dalam format DB (UTC) (contoh: simpan dalam variabel)
  const utcDateString = utcDate.toUTCString();
  console.log("Waktu dalam format DB (UTC):", utcDateString);

  // Konversi ke WIT (asumsi UTC+9)
  const witOffset = 9 * 60 * 60 * 1000;
  const witDate = new Date(utcDate.getTime() + witOffset);

  // Format output menjadi string yang mudah dibaca
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
  const formattedWitDate = witDate.toLocaleDateString('id-ID', options);

  return formattedWitDate;
}

// Contoh penggunaan
const timeInSolo = "2024-09-18T07:00:00";
const meetingScheduleInWit = createOnlineMeetingSchedule(timeInSolo);

console.log("Jadwal Meet Online di Papua:", meetingScheduleInWit); // Output Jadwal Meet Online di Papua: Rabu, 18 September 2024 pukul 09.00 WIB