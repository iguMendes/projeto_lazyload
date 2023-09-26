const img = document.querySelectorAll("imgcontainer img");

const usuario = new IntersectionObserver((entries,usuario) =>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting) return

        const img = entry.target

        img.src = img.src.replace("height = 1000" && "width = 1000", "width = 10" && "height = 10");
    })
}, {})

img.forEach((img) =>{
    usuario.observe(img);
})
