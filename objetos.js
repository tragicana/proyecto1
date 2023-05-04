//hago una funcion creadora de objetos para usuario, curso, notas...
function usuarios(id, nombre, apellidos, usuario, contraseña, foto, direccion, telefono, tipo_usuario, activo){
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.foto = foto;
    this.direccion = direccion;
    this.telefono = telefono;
    this.tipo_usuario = tipo_usuario;
    this.activo = activo;
}

function asignaturas(id, nombre, id_profesor1, id_profesor2){
    this.id = id;
    this.nombre = nombre; 
    this.id_profesor1 = id_profesor1;
    this.id_profesor2 = id_profesor2;
}

function notas(id, id_alumno, id_asignatura, id_curso, nota){
    this.id = id;
    this.id_alumno = id_alumno;
    this.id_asignatura = id_asignatura;
    this.id_curso = id_curso;
    this.nota = nota;
}

function cursos(id, nombre, id_a1, id_a2, id_a3, id_a4){
    this.id = id;
    this.nombre = nombre;
    this.id_a1 = id_a1;
    this.id_a2 = id_a2;
    this.id_a3 = id_a3;
    this.id_a4 = id_a4;
}

function tiposUsuarios(id, nombre, funciones){
    this.id = id;
    this.nombre = nombre;
    this.funciones = funciones;
}

let alumno1 = new usuarios (
    1, 'Debora','Labios', 'Deborando','ninguna123', 'si');
let alumno2 = new usuarios (2, 'ninguna123', 'Mariano','Rajoy', 'Ciencias Politicas');
let profesor1 = new usuarios (3, 'ninguna123', 'Iker','Jimenez', 'Ciencias Paranormales');




let curso1 = new cursos (1,'2022-2023');
let curso2 = new cursos (2,'2023-2024');
let curso3 = new cursos (3,'2021-2022');



let nota1= new notas(1, "corregido", "apto");
let nota2= new notas(2, "corregido", "no apto");
let nota3= new notas(3, "pendiente de corregir", "");




