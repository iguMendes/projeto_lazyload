const img = document.querySelectorAll("imgcontainer img");

const usuario = new IntersectionObserver((entries,usuario) =>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting) return

        const img = entry.target

        img.src = img.src.replace("&w=10&", "&w=1000&");

        usuario.unobserve(img);
    })
}, {})

img.forEach((img) =>{
    usuario.observe(img);
})
