import useFetch from './hooks';

export default function GitHubUser({user}){
    const {data, error, loading} = useFetch(`https://api.github.com/users/${user}`)

    if (loading) return(<h1>Loading...</h1>)
    if (error) return(<p>{"Error" + JSON.stringify(error)}</p>)
    if(!data) return (null)

    return (
        <div className="profile-body">
        <h1>{data.login}</h1>
        <img src={data.avatar_url} alt="User avatar" />
        <p>{data.bio}</p>
        <a href={data.html_url} target="_blank"  rel="noreferrer">Ir al perfil</a>
        </div>
    )
}