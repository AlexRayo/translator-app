import {useState} from 'react';

const ClientsData = () => {
    const [client, setClient] = useState({});//Single client object
    const [clients, setClients] = useState<any[]>([]);    
    const [clientData, setClientData] = useState([]);

    const fetchClients = async () => {
        await fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(response => response.json())
        .then(data => {
            setClients(data.results);
        });
    }

    return {
        clients,
        client, setClient,
        fetchClients,
        clientData, setClientData
    }
}
 
export default ClientsData;