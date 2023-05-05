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

let alumno1 = new usuarios (1, 'Debora','Labios', 'Deborando','ninguna123' );
let alumno2 = new usuarios (2, 'Mariano','Rajoy','El Rajoy','ninguna123');
let profesor1 = new usuarios (3,'Iker','Jimenez', 'LaNaveDelMisterio', 'ninguna123');

let a1 = new asignaturas(1,'Cosmología', 1, 2);
let a2 = new asignaturas(2,'Viticultivos', 1, 3);
let a3 = new asignaturas(3,'Licantropía', 2, 3);

let nota1= new notas(1, 1, 3, 1, 'Apto');
let nota2= new notas(2, 2, 4, 3, "No Apto");
let nota3= new notas(3, 2, 2, 2, 'Apto');

let curso1 = new cursos (1,'Estudios mágicos',1,3);
let curso2 = new cursos (2,'Permacultura',2);
let curso3 = new cursos (3,'Política funcional',4);

let alumno = new tiposUsuarios (1, 'Alumno', 'leer');
let profesor = new tiposUsuarios (2, 'Profesor', 'leer y editar');
let admin = new tiposUsuarios (3, 'admin', 'soporte técnico');

//ahora hago arrays de estos objetos

let alumnos = [alumno1, alumno2 ];
let profesores = [profesor1];
let asignatura = [a1, a2, a3];
let nota = [nota1, nota2, nota3];
let curso = [curso1,curso2,curso3];
let tiposUsuario = [alumno, profesor, admin];

//ahora convierto los arrays en Json
let jsonAlumnos = JSON.stringify(alumnos);
let jsonProfesores = JSON.stringify(profesores);
let jsonAsignatura = JSON.stringify(asignatura);
let jsonNota = JSON.stringify(nota);
let jsonCurso = JSON.stringify(curso);
let jsonTiposUsuario = JSON.stringify(tiposUsuario);
//compruebo que funciona en consola
// console.log(jsonAsignatura);

//ahora convierto los Json a arrays de nuevo
let newArrayAlumnos = JSON.parse(jsonAlumnos);
let newArrayProfesores = JSON.parse(jsonProfesores);
let newArrayAsignatura = JSON.parse(jsonAsignatura);
let newArrayNota = JSON.parse(jsonNota);
let newArrayCurso = JSON.parse(jsonCurso);

//compruebo que funciona en consola
// console.log(newArrayAlumnos[0]);
// console.log(newArrayAlumnos[1]);

//mejoro el codigo para que se vea más limpio (como el de Bruno)
let datos = {
    alumnos : alumnos,
    profesores : profesores,
    asignatura : asignatura,
    nota : nota,
    curso : curso, 
    tiposUsuario : tiposUsuario
};

let jsonDatos = JSON.stringify(datos);
let arrayDatos = JSON.parse(jsonDatos);
//compruebo que funciona en consola
// console.log(jsonDatos);
// console.log(arrayDatos);

//utilizo una funcion que obtenga todos los usuarios de forma periodica cada 5 segundos.
let intervalo;
function repite5seg(){
    intervalo = setInterval (mensaje,5000);
}

function mensaje(){
    console.log('Han pasado 5 segundos');
    console.log(alumnos);
}

function parar(){
    clearInterval(intervalo);
}
//para ejecutar se acciona la funcion repite5seg y para parar el intervalo se acciona funcion parar
// console.log(repite5seg());
console.log(clearInterval());












