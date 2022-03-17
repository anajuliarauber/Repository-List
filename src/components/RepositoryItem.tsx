interface RepositoryItemProps{
    repository: {
        name: string,
        html_url: string,
        language: string
    }
}

export function RepositoryItem(props:RepositoryItemProps){
    return (
        <div>
            <h2>{props.repository.name}</h2>
            <a href={props.repository.html_url}>Link to repository</a>
            <p>Most used technology: {props.repository.language}</p>
            
        </div>
    )
}