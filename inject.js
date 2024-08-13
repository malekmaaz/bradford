(function() {
    function openReviewModal() {
        var button = document.querySelector('button.btn.btn-alt-outline');
        if (button) {
            button.click();
        }
    }
    
    if (document.readyState === 'complete') {
        openReviewModal();
    } else {
        window.addEventListener('load', openReviewModal);
    }
})();
