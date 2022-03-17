import { useEffect, useState } from "react"
import { RepositoryItem } from "./RepositoryItem"

interface Data {
    name: string,
    html_url: string,
    language: string
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/anajuliarauber/repos")
            .then(response => response.json())
            .then((data) => setRepositories(data))
    }, [repositories])

    return (
        <>
            <h1>Respository List</h1>
            <ul>
                {repositories.map((repository, index) =>{
                  return  <RepositoryItem key={index} repository= {repository}/>
                    }
                )}
                </ul>
        </>
    )
}