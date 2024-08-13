export default function ListaTarefas() {

    const tarefas = ["Comprar café", "Estudar react", "Fazer exercícios"];

    return (
        <ol>
            {tarefas.map((tarefa, index) => (
                <li key={index}>{tarefa}</li>
            ))}
        </ol>   
    );
}  