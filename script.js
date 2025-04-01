document.addEventListener("DOMContentLoaded", function () {
    const class12A2 = [
        { stt: 1, name: "Trần Văn Vũ", class: "12A2", invite: "Lên chơi mọe đi cho vui ku ơi" },
        { stt: 2, name: "Nguyễn Công Thành", class: "12A2", invite: "Thân thì thân nhưng hơi đao đao tí:)) với lên chơi cho bạn vui" },
        { stt: 3, name: "Mai Đình Kiệt", class: "12A2", invite: "Ờ del có gì nói:))" },
        { stt: 4, name: "Nguyễn Phương Minh Quân", class: "12A2", invite: "Để lại mullet cho đẹp bạn ơi rồi CN lên chụp tới tôi" },
        { stt: 5, name: "Nguyễn Quý Thiên", class: "12A2", invite: "Lâu lâu ghéc ghéc :)), lên đây chụp với mấy đứa lớp t mong m ko lười đi:))" },
        { stt: 6, name: "Ngô Đào Phúc Quyên", class: "12A2", invite: "Lên chụp với t nhưng lần này là đổi nhân vật chính trong hình chụp:))" }
    ];

    const class12A3 = [
        { stt: 1, name: "Lương Thành Long", class: "12A3", invite: "Lên mọe m đi cho vui cu ơi" }
    ];

    function populateTable(tableId, data) {
        const table = document.getElementById(tableId);
        data.forEach(item => {
            let row = table.insertRow();
            row.innerHTML = `<td>${item.stt}</td><td>${item.name}</td><td><button onclick="showInvite('${item.name}', '${item.class}', '${item.invite}')">Xem Lời Mời</button></td>`;
        });
    }

    function toggleTable(id) {
        const table = document.getElementById(id);
        table.classList.toggle("hidden");
    }

    function showInvite(name, className, message) {
        const nameBox = document.getElementById("invite-name");
        nameBox.textContent = `${name} : ${className}`;
        nameBox.style.display = "inline-block";
        nameBox.style.padding = "5px 10px";
        nameBox.style.backgroundColor = "#baa9c3";
        nameBox.style.color = "#121212";
        nameBox.style.borderRadius = "5px";
        document.getElementById("invite-message").textContent = message;
        document.getElementById("invite-modal").classList.remove("hidden");
    }

    function closeInvite() {
        document.getElementById("invite-modal").classList.add("hidden");
    }

    function updateCountdown() {
        const targetDate = new Date("2025-04-06T09:30:00").getTime(); // Ngày & giờ đích
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft > 0) {
            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            document.getElementById("countdown-timer").innerText =
                `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            document.getElementById("countdown-timer").innerText = "Đã đến giờ chụp!";
        }
    }

    // Cập nhật mỗi giây
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Gọi ngay khi tải trang

    populateTable("table-12A2", class12A2);
    populateTable("table-12A3", class12A3);

    window.toggleTable = toggleTable;
    window.showInvite = showInvite;
    window.closeInvite = closeInvite;
});
