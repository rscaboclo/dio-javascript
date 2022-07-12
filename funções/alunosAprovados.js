const alunos = [
	{
		nome: 'Ricardo',
		nota: 8,
		turma: '1B',
	},
	{
		nome: 'Cíntia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Jose',
		nota: 9,
		turma: '1B',
	},
    {
		nome: 'Maria',
		nota: 10,
		turma: '1B',
	},
    {
		nome: 'Thyago',
		nota: 5,
		turma: '1C',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 7));