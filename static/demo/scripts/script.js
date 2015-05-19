var greetings = ["welcome", "bienvenida", "willkommen", "स्वागत", "benvenuto", "ようこそ", "Sveiki atvykę", "환영합니다", "ברוך הבא", "Vítejte", "歡迎光臨", "Bine ai venit", "Добро пожаловать!", "Bem-vindo", "സ്വാഗതം", "Hoş geldiniz", "Hoan nghênh", "bienvenue", "ยินดีต้อนรับ", "సుస్వాగతం", "Witam Cię", "Fáilte", "ترحيب",] ;

var count = 0;
function changeText() {
    $("#welcome").text(greetings[count]);
    count < greetings.length ? count++ : count = 0;
};
setInterval(changeText, 1500);