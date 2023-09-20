"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
const d = new Date();
console.log(dias[d.getDay()]);
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["azul"] = "#00f";
    cores["verde"] = "#0f0";
})(cores || (cores = {}));
console.log(cores.preto);
console.log(cores['branco']);
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["USER"] = 10] = "USER";
    tipoUsuario[tipoUsuario["ADMIN"] = 100] = "ADMIN";
    tipoUsuario[tipoUsuario["SUPER"] = 1000] = "SUPER";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.ADMIN);
let tp = tipoUsuario.ADMIN;
console.log(tp);
