/* =========================
    콘솔창 차단 스크립트
    개발자도구 단축키 차단
========================= */
document.addEventListener('keydown', function(event) {
    if (
        event.keyCode === 123 || // F12
        (event.ctrlKey && event.shiftKey && event.keyCode === 73) || // Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.keyCode === 74) || // Ctrl+Shift+J
        (event.ctrlKey && event.keyCode === 85) // Ctrl+U
    ) {
        event.preventDefault();
        //alert("개발자 도구 사용이 금지되어 있습니다.");
    }
});

// 우클릭 차단
document.addEventListener('contextmenu', function(e){
    e.preventDefault();
    //alert("우클릭이 금지되어 있습니다.");
});
// 개발자도구 감지
const devToolsDetector = () => {

    const callback = () => {
        //alert("개발자 도구 사용이 감지되었습니다.");
    };

    const checkStatus = () => {

        const startTime = performance.now();
        debugger;
        const endTime = performance.now();

        if (endTime - startTime > 100) {
            callback();
        }
    };
    setInterval(checkStatus, 1000);
};
devToolsDetector();

