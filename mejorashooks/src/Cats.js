import useFetch from './hooks';

export default function Cats({text, color}){
    const {data, error, loading} = useFetch(`https://cataas.com/cat/says/${text}?size=50&color=${color}`);

    console.log(data)
    if (loading) return(<h1>Loading...</h1>)
    if (error) return(<p>{"Error" + JSON.stringify(error)}</p>)
    if(!data) return (null)

    return (
        <div>
            <img src={data.url} alt="Random cat"></img>
        </div>
    )
}