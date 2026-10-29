const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 웹사이트(GitHub Pages 등)에서 데이터를 가져갈 수 있도록 CORS 허용
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// 실시간 통계를 제공하는 API 경로
app.get('/api/stats', (req, res) => {
    // 나중에 디스코드 봇과 연동할 때 이 숫자를 실제 봇 데이터로 바꾸면 됩니다.
    const botStats = {
        servers: 3,       // 현재 봇이 활동 중인 서버 수
        members: 1250     // 보호 중인 멤버 수
    };
    
    res.json(botStats);
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`백엔드 서버가 ${PORT}번 포트에서 정상적으로 실행 중입니다.`);
});
