document.addEventListener('DOMContentLoaded', function () {
    const postTimeElement = document.getElementById('postTime');
    const postTime = new Date(postTimeElement.getAttribute('data-post-time'));

    function timeAgo(date) {
        const now = new Date();
        const secondsPast = (now.getTime() - date.getTime()) / 1000;
        if (secondsPast < 60) {
            return `${Math.round(secondsPast)} seconds ago`;
        }
        if (secondsPast < 3600) {
            return `${Math.round(secondsPast / 60)} minutes ago`;
        }
        if (secondsPast <= 86400) {
            return `${Math.round(secondsPast / 3600)} hours ago`;
        }
        if (secondsPast > 86400) {
            const day = date.getDate();
            const month = date.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
            const year = date.getFullYear() === now.getFullYear() ? "" : " " + date.getFullYear();
            return day + " " + month + year;
        }
    }

    postTimeElement.textContent = timeAgo(postTime);


    // Copy link functionality
    const copyLinkButton = document.getElementById('copyLink');
    copyLinkButton.addEventListener('click', function () {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});
