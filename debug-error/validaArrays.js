function validaArray(arr, num) {
    try{
        if (!arr && !num) throw new ReferenceError('Não foram passados os parâmetros necessários!');
        
        if (typeof arr !== 'object') throw new TypeError('O array deve ser do tipo object!');
       
        if (typeof num !== 'number') throw new TypeError('O número deve ser do tipo number!');
       
        if (arr.length !== num) throw new RangeError('O número deve ser igual ao tamanho do array!');
        
        return arr;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log('Este erro é do tipo ReferenceError!');
            //throw e;
            //console.log(e.name);
            //console.log(e.stack);
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log('Este erro é do tipo TypeError!');
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log('Este erro é do tipo RangeError!');
            console.log(e.message);
        } else {
            console.log('Tivemos um erro desconhecido! ' + e);
        }
    }
}

//teste
console.log(validaArray([1, 2, 3, 4, 5], 5));