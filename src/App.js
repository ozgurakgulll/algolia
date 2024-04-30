import './App.css';
import algoliasearch from "algoliasearch/lite";
import {Hits, InstantSearch, SearchBox} from "react-instantsearch";

const alApp = process.env.REACT_APP_ALGOLIA_APP_ID;
const allApiKey = process.env.REACT_APP_API_KEY;
const searchClient = algoliasearch(alApp, allApiKey);
function Hit({ hit }) {
    return (
        <div className="card">
            <img src={hit.image} alt={hit.name} />
            <div className="content">
                <p>111{hit.categories[0]}</p>
                <h1>111{hit.name}</h1>
                <p>12312312${hit.price}</p>
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
        <InstantSearch searchClient={searchClient} indexName="panates">
                <SearchBox className="container"/>
                <Hits hitComponent={Hit}/>
            </InstantSearch>
        </div>
    );
}

export default App;

const a=[
    {
        "name":"123123",
        "description":"Conn",
        "categories":["dasasfd","rqwer"],
        "price":12312,
        "image":"",
        "popularity":123,
        "objectId":"123",
    }
]
