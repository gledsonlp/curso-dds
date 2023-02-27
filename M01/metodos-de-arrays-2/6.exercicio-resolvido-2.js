/**
 * Crie uma função que percorra um array com nomes de arquivos.
 * A função deve verificar se possui ao menos um arquivo com a
 * extensão .bat. Caso exista, deverá exibir a mensagem 
 * "vírus detectado", caso contrário, deverá exibir a mensagem
 * "nenhum vírus encontrado".
 */

const arquivos = ['teste.txt',
    'foto.png',
    'autoexec.bat',
    'contrato.doc',
    'instalador.exe'
];

const antiVirus = (arrayArquivos) => {
    const resultado = arrayArquivos.some((arquivo) => {
        const existeExtensao = arquivo.indexOf('.bat');
        return existeExtensao !== -1;
    });

    if (resultado) {
        console.log('vírus detectado');
    } else {
        console.log('nenhum vírus encontrado');
    }
}
antiVirus(arquivos);