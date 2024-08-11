function twshowFullScreenPopup(popupId) {
    var fullscreenPopup = document.getElementById('twfullscreen-popup-' + popupId);
    var fullscreenOverlay = document.querySelector('[data-tw-popup="twfullscreenOverlay"]');
    var body = document.querySelector('body');

    // 禁止页面滚动
    body.style.overflow = 'hidden';

    // 显示遮罩层、弹窗和对应的关闭按钮
    fullscreenOverlay.style.display = 'block';
    fullscreenPopup.style.display = 'block';

    // 找到对应的关闭按钮，并显示
    var fullscreenCloseButton = document.querySelector('#twfullscreen-overlay-close[onclick="twcloseFullScreenPopup(' + popupId + ')"]');
    fullscreenCloseButton.style.display = 'block';
}

function twcloseFullScreenPopup(popupId) {
    var fullscreenPopup = document.getElementById('twfullscreen-popup-' + popupId);
    var fullscreenCloseButton = document.querySelector('#twfullscreen-overlay-close[onclick="twcloseFullScreenPopup(' + popupId + ')"]');
    var fullscreenOverlay = document.querySelector('[data-tw-popup="twfullscreenOverlay"]');
    var body = document.querySelector('body');

    // 恢复页面滚动
    body.style.overflow = 'auto';

    // 隐藏特定弹窗和关闭按钮
    fullscreenPopup.style.display = 'none';
    fullscreenCloseButton.style.display = 'none';

    // 检查是否还有其他弹窗在显示，如果没有，则隐藏遮罩层
    var anyPopupVisible = Array.from(document.querySelectorAll('[id^="twfullscreen-popup-"]')).some(function (popup) {
        return popup.style.display === 'block';
    });
    if (!anyPopupVisible) {
        fullscreenOverlay.style.display = 'none';
    }
}

// 监听点击遮罩层关闭所有弹窗的事件
document.querySelector('[data-tw-popup="twfullscreenOverlay"]').addEventListener('click', function (event) {
    var fullscreenPopups = document.querySelectorAll('[id^="twfullscreen-popup-"]');
    var fullscreenCloseButtons = document.querySelectorAll('[id^="twfullscreen-overlay-close"]');
    var fullscreenOverlay = document.querySelector('[data-tw-popup="twfullscreenOverlay"]');
    var body = document.querySelector('body');

    // 恢复页面滚动
    body.style.overflow = 'auto';

    // 隐藏所有弹窗和关闭按钮
    fullscreenPopups.forEach(function (popup) {
        popup.style.display = 'none';
    });
    fullscreenCloseButtons.forEach(function (button) {
        button.style.display = 'none';
    });

    // 隐藏遮罩层
    fullscreenOverlay.style.display = 'none';

    event.stopPropagation();
});
