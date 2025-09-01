runOnStartup(async runtime => 
{
    // Переопределяем метод один раз при старте
    C3.CanvasManager.prototype.GetDocumentFullscreenMode = () => "scale-outter";
    
    // Если нужно убедиться, что метод не перезаписывается движком, 
    // можно заменить его на геттер (более надежно)
    Object.defineProperty(C3.CanvasManager.prototype, "GetDocumentFullscreenMode", {
        value: () => "scale-outter",
        writable: false, // запретить перезапись
        configurable: false // запретить удаление или изменение дескриптора
    });
});