const id = new Array("Abhiram",32);
document.querySelector('p').innerHTML = id;
console.log(id[0],typeof(id[0]));
id.shift();
console.info(id);
id.unshift("Abhiram2");
console.info(id);