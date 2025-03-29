// จำลองฐานข้อมูลผู้ใช้
const users = [
    { username: "admin", password: "1234" },
    { username: "user", password: "5678" }
];

// ฟังก์ชันเข้าสู่ระบบ
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", username); // บันทึกชื่อผู้ใช้
        window.location.href = "dashboard.html"; // เปลี่ยนหน้า
    } else {
        message.innerText = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!";
    }
}

// ตรวจสอบว่าผู้ใช้ล็อกอินหรือยัง
function checkLogin() {
    let user = localStorage.getItem("loggedInUser");
    if (!user) {
        window.location.href = "index.html"; // ถ้าไม่ได้ล็อกอินให้กลับไปหน้า Login
    } else {
        document.getElementById("user_display").innerText = user;
    }
}

// ออกจากระบบ
function logout() {
    localStorage.removeItem("loggedInUser"); // ลบข้อมูลผู้ใช้
    window.location.href = "index.html"; // กลับไปหน้า Login
}
