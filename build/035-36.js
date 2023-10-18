"use strict";
const obj = {
    nome1: 'Zachary Clarke',
    nome2: 'Josephine Lambert',
    nome3: 'Justin Matthews',
    nome4: 'Edith Hines',
    nome5: 'Susie Andrews',
};
let { nome1, nome2, nome3, nome4, nome5 } = obj;
let [nu1 = 0, nu2 = 0, ...nu3] = [10, 20, 30, 40, 50, 60, 70, 80, 90,];
const nomes2 = () => {
    return ['Sophia Ortega', 'Nathan Holloway', 'Joel Rose', 'Willie Atkins', 'Jesse Green', 'Sean Garrett', 'Edna Berry'];
};
let [nn1, nn2, nn3, ...nn4] = nomes2();
let texto = 'captain after cattle community cost syllable still private';
let [...t] = texto.split(' ');
console.log(t);
