const plugins = [
    // "SplitText",
    "ScrollSmoother",
    // "ScrambleText",
    // "PhysicsProps",
    // "Physics2D",
    // "MotionPathHelper",
    // "MorphSVG",
    // "Inertia",
    // "GSDevTools",
    // "DrawSVG",
    ///////////////////  GRATUTIOS
    "ScrollTrigger",
    // "Text",
    // "ScrollTo",
    // "Pixi",
    // "Observer",
    // "MotionPath",
    // "Flip",
    // "Easel",
    // "Draggable"
]

// Change this const to your URL or try: window.location.href
const url_rtt = "localhost"

//This const set the location for Loading the GSAP scripts
const head = document.head


//This function get the content for each plugin uncomented in the top (this is a auxiliar function)
function loadPluginContent(plugin) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open("GET", `./GSAP_Plugins/${plugin}.js`, true)
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

//This function Load for each plugin uncomented on top in the head for your page
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


//On Load plugins, this session of your code is loaded, this session is where you have to register plugins and others configs
loadScripts().then(() => {
    document.addEventListener("DOMContentLoaded", () => {
        //Register
        //setScrollSmother
        //pipipi
        //popopo

        //Example:
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        ScrollSmoother.create({
            wrapper: "#wrapper",
            content: "#content",
            smooth: 1,
            effects: true
        });
    })
})


