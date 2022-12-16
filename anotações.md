## Forma alternativa de formatar data:
    
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'full',
        timeStyle: 'short'
    }).format(publushedAt)  

## Biblioteca para formatar data:

    npm i date-fns