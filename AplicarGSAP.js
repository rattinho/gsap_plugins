const plugins = [
    // "SplitText",
    // "ScrollSmoother",
    // "ScrambleText",
    // "PhysicsProps",
    // "Physics2D",
    // "MotionPathHelper",
    // "MorphSVG",
    // "Inertia",
    // "GSDevTools",
    // "DrawSVG",
    ///////////////////  GRATUTIOS
    // "ScrollTrigger",
    // "Text",
    // "ScrollTo",
    // "Pixi",
    // "Observer",
    // "MotionPath",
    // "Flip",
    // "Easel",
    // "Draggable"
]

const url_rtt = "localhost"

const head = document.head

function loadPluginContent(plugin) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open("GET", `./Plugins/${plugin}.js`, true)
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(`Error loading ${plugin}: ${xhr.statusText}`)
            }
        }
        xhr.onerror = () => reject(`Network error while loading ${plugin}`)
        xhr.send()
    })
}


function loadScripts() {
    return Promise.all(
        plugins.map(plugin => loadPluginContent(plugin).then(content => {
            const script = document.createElement("script")
            script.innerHTML = content
            document.head.appendChild(script)
        }).catch(error => {
            console.log(error)
        }))
    )
}


loadScripts().then(() => {
    document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
            smoothTouch: 0.1,
        });
    })
})

