document.querySelectorAll('.truncate').forEach(function (content) {
    if (content.innerText.length > 10) {
        content.innerText = content.innerText.substring(0, 130) + '...';
    }
});

function toggleMenu() {
    var element = document.getElementById('list');
    var menu = document.getElementById("menu");
    var menu_icon_dashboard = document.getElementById("menu_icon_dashboard");
    var menu_icon = document.getElementById("menu_icon");
    if (menu_icon.style.display === "block") {
        menu_icon_dashboard.style.display = "block";
        menu.style.display = "block";
        element.classList.replace('col-12', 'col-10');
        menu_icon.style.display = "none";
    } else {
        menu_icon_dashboard.style.display = "none";
        menu.style.display = "none";
        element.classList.replace('col-10', 'col-12');
        menu_icon.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const promoCode = document.querySelector('.promo-code code');

    promoCode.addEventListener('click', function () {
        navigator.clipboard.writeText(promoCode.textContent).then(function () {
            alert('Mã khuyến mãi đã được sao chép!');
        }, function (err) {
            console.error('Không thể sao chép mã khuyến mãi: ', err);
        });
    });
});

function shareContent() {
    if (navigator.share) {
        navigator.share({
            title: 'Giảm Giá Đặc Biệt cho Du Khách Quốc Tế Mùa Hè Này!',
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        alert('Chia sẻ không được hỗ trợ trên trình duyệt này.');
    }
}
