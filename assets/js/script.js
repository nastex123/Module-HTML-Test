document.addEventListener('DOMContentLoaded', function () {

    const btnTickets = document.getElementById('btn-alert');
    if (btnTickets) {
        btnTickets.addEventListener('click', function (e) {
            e.preventDefault();
            alert("READY FOR ROCK AND ROLL!! Get ready for the most powerful experience!");
            btnTickets.innerText = "COMING SOON";
            btnTickets.style.backgroundColor = "#ffffff";
            btnTickets.style.color = "#e60000";
            btnTickets.style.border = "2px solid #e60000";
            btnTickets.disabled = true;
            btnTickets.style.opacity = "0.8";
            btnTickets.style.cursor = "not-allowed";
        });
    }


    const videoCard = document.getElementById('videoTrigger');
    if (videoCard) {
        videoCard.addEventListener('click', function () {
            alert("Watch the full concert on our YouTube channel.");
        });
    }


    const moreDatesBtn = document.getElementById('moreDatesBtn');
    if (moreDatesBtn) {
        moreDatesBtn.addEventListener('click', function () {
            alert("NEW CITIES COMING SOON: LIMA - PERU, SAO PAULO - BRAZIL, SYDNEY - AUSTRALIA, MEXICO CITY - MEXICO, TOKYO - JAPAN. Stay tuned!");
        });
    }


    const knowBandBtn = document.getElementById('knowBandBtn');
    if (knowBandBtn) {
        knowBandBtn.addEventListener('click', function () {
            alert("Rock Rebels was born in a garage in 2018. Today, we are rebellion made into music.");
        });
    }

    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }


    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(function (item) {
        item.addEventListener('click', function () {
            alert("Exclusive photo from our tour.");
        });
    });
});

