window.onload = function () {
    const favicon = document.getElementById('favicon')
    const pageTitle = document.title
    const attentionMessage = "Don't Wander!"
    // const attentionMessage = 'Where are You ?'
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

// * more messages to change in attentionMessage


// 1. "Back for More!"
// 2. "Explore Updates!"
// 3. "Don't Wander!"
// 4. "Dive Back In!"
// 5. "Just a Click Away!"
// 6. "Return for More!"
// 7. "Come Back Soon!"
// 8. "Break's Over!"
// 9. "Adventure Awaits!"
// 10. "Keep Exploring!"