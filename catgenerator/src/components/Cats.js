import useFetch from '../hooks/hooks';

export default function Cats({text, color}){
    const {data, error, loading} = useFetch(`https://cataas.com/cat/says/${text}?size=50&color=${color}`);

    
    if (loading) return(<h1>Loading...</h1>)
    if (error) return(<p>{"Error" + JSON.stringify(error)}</p>)
    if(!data)  return (null)
    console.log(data.url);
    
    
    return (
        <div>
            <img src={data.url} alt="Random cat"></img>
        </div>
    )
}