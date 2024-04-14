// Hàm không trả về giá trị
function logMessage(message: string): void {
    console.log(message);
}
// Hàm không bao giờ hoàn thành
function throwError(message: string): never {
    throw new Error(message);
}
// Hàm vòng lặp vô hạn
function infiniteLoop(): never {
    while (true) {
        // Do something
    }
}