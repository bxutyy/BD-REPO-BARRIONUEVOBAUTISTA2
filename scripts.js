let filtro="todos";



const usuarios=[


{
nombre:"Bautista Perez",
rol:"participante",
categoria:"Principiante",
ranking:"#3",
torneos:8,
imagen:"img/perfil1.jpg"

},


{
nombre:"Lucas Fernandez",
rol:"participante",
categoria:"6ta",
ranking:"#5",
torneos:12,
imagen:"img/perfil2.jpg"

},



{
nombre:"Club The Bull",
rol:"organizador",
categoria:"-",
ranking:"-",
torneos:"25 creados",
imagen:"img/perfil3.jpg"

},



{
nombre:"Padel Center",
rol:"organizador",
categoria:"-",
ranking:"-",
torneos:"40 creados",
imagen:"img/perfil4.jpg"

}



];





function cambiarFiltro(tipo){

filtro=tipo;


}





function buscarUsuario(){


let texto=document
.getElementById("buscar")
.value
.toLowerCase();



let contenedor=document
.getElementById("resultados");



contenedor.innerHTML="";



usuarios.forEach(u=>{


if(

u.nombre.toLowerCase()
.includes(texto)

&& texto!=""

&&

(filtro=="todos" || u.rol==filtro)


){



contenedor.innerHTML+=`


<div class="card">


<img src="${u.imagen}">



<div class="info">


<h2>${u.nombre}</h2>



<p>

Rol:
<span>${u.rol}</span>

</p>



<p>

Categoría:
${u.categoria}

</p>



<p>

Ranking:
${u.ranking}

</p>


<p>

Torneos:
${u.torneos}

</p>



</div>





<div class="acciones">


<button class="editar">

<i class="fa-solid fa-pen"></i>

</button>



<button class="eliminar">

<i class="fa-solid fa-trash"></i>

</button>



</div>




</div>


`;



}



});


}