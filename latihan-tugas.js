const today = new Date();
const currentYear = today.getFullYear(); // Lengkapi untuk mendapatkan tahun
console.log(currentYear); // Output 2024

const now = new Date();
const isoDate = now.toISOString(); // Lengkapi untuk mendapatkan format ISO
console.log(isoDate); // Output 2024-09-18T03:22:50.022Z

const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = months[date.getMonth()];
console.log(monthName); // Output September

const startDate = new Date('2024-01-01');
const endDate = new Date('2024-12-31');
const difference = endDate.getTime() - startDate.getTime();
console.log(difference); // Output 31536000000

const dateOfWeek = new Date('2024-09-18');
const dayOfWeek = dateOfWeek.getDay();
console.log(dayOfWeek); // Output 3

const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();
console.log(`Current time: ${hours}:${minutes}:${seconds}`); // Output Current time: 10:47:20

const dateDDMMYY = new Date();
const day = String(dateDDMMYY.getDate()).padStart(2, '0'); 
const month = String(dateDDMMYY.getMonth() + 1).padStart(2, '0'); 
const year = dateDDMMYY.getFullYear(); 
console.log(`${day}/${month}/${year}`); // Output 18/09/2024

const start = new Date('2024-01-01');
const end = new Date('2024-12-31');
const differenceInTime = end.getTime() - start.getTime();
const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Konversi dari milidetik ke hari
console.log(differenceInDays); // Output 365

const getToday = new Date();
getToday.setDate(getToday.getDate() + 7);
console.log(getToday); // Output Wed Sep 25 2024 10:55:15 GMT+0700 (Waktu Indonesia Barat)

const localTime = new Date();
const utcTime = localTime.toUTCString();
console.log(utcTime); // Output Wed, 18 Sep 2024 03:55:25 GMT