window.onload = function () {
    const favicon = document.getElementById('favicon')
    const pageTitle = document.title
    const attentionMessage = 'Where are You ?'
    // const attentionMessage = 'Come back'

    document.addEventListener('visibilitychange', function (e) {
        const isPageActive = !document.hidden
        toggle(isPageActive)
    })

    function toggle(isPageActive) {
        if (isPageActive) {
            document.title = pageTitle
            favicon.href = 'resources/Favicon/favicon.ico'
        } else {
            document.title = attentionMessage
            favicon.href = 'resources/Favicon/eye-raised.ico'
        }
    }
}
