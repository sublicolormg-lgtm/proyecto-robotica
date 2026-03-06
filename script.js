function irAvion(){

document.querySelectorAll(".spot")[1].scrollIntoView({
behavior:"smooth"
})

}
function crearAvion(canvasID,texto){

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({
canvas:document.getElementById(canvasID),
alpha:true
})

renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z=80

const material=new THREE.MeshBasicMaterial({
color:0xff0000
})

const loader=new THREE.FontLoader()

loader.load(
'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',

function(font){

const grupo=new THREE.Group()

for(let i=0;i<2000;i++){

let geo=new THREE.TextGeometry(texto,{
font:font,
size:1,
height:0.1
})

let mesh=new THREE.Mesh(geo,material)

mesh.position.x=(Math.random()-0.5)*60
mesh.position.y=(Math.random()-0.5)*20
mesh.position.z=(Math.random()-0.5)*20

if(Math.abs(mesh.position.x)<10){
mesh.position.y*=0.3
}

grupo.add(mesh)

}

scene.add(grupo)

function animate(){

requestAnimationFrame(animate)

grupo.rotation.y+=0.002

renderer.render(scene,camera)

}

animate()

})

}

crearAvion("avion1","HELLO WORLD")

crearAvion("avion2","MUCHOOOOSSS GRACIAS")
