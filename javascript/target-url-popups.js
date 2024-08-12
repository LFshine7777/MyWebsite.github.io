function showFullScreenPopup(id) {
    var fullscreenPopup = document.getElementById('fullscreen-popup-' + id);
    var fullscreenOverlay = document.getElementById('fullscreenOverlay');
    var body = document.querySelector('body');

    body.style.overflow = 'hidden';

    // 显示对应的弹窗和关闭按钮
    fullscreenOverlay.style.display = 'block';
    fullscreenPopup.style.display = 'block';

    // 找到对应的关闭按钮，并显示
    var fullscreenCloseButton = document.querySelector('.fullscreen-overlay-close[data-popup-id="' + id + '"]');
    fullscreenCloseButton.style.display = 'block';
}

function closeFullScreenPopup(event) {
    var fullscreenPopups = document.querySelectorAll('.fullscreen-popup');
    var fullscreenCloseButtons = document.querySelectorAll('.fullscreen-overlay-close');
    var fullscreenOverlay = document.getElementById('fullscreenOverlay');
    var body = document.querySelector('body');

    body.style.overflow = 'auto';

    // 隐藏所有弹窗和关闭按钮
    fullscreenPopups.forEach(function (popup) {
        popup.style.display = 'none';
    });
    fullscreenCloseButtons.forEach(function (button) {
        button.style.display = 'none';
    });

    fullscreenOverlay.style.display = 'none';

    event.stopPropagation();
}

function closePopup(id) {
    var fullscreenPopup = document.getElementById('fullscreen-popup-' + id);
    var fullscreenCloseButton = document.querySelector('.fullscreen-overlay-close[data-popup-id="' + id + '"]');
    var fullscreenOverlay = document.getElementById('fullscreenOverlay');
    var body = document.querySelector('body');

    body.style.overflow = 'auto';

    // 隐藏特定弹窗和关闭按钮
    fullscreenPopup.style.display = 'none';
    fullscreenCloseButton.style.display = 'none';

    // 如果没有其他弹窗显示，则隐藏遮罩层
    var anyPopupVisible = Array.from(document.querySelectorAll('.fullscreen-popup')).some(function (popup) {
        return popup.style.display === 'block';
    });
    if (!anyPopupVisible) {
        fullscreenOverlay.style.display = 'none';
    }
}