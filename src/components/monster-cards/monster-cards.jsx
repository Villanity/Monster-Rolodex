import './monster-cards.css';

function countWords (name) {
    let count = 0;
    for (let i = 0; i < name.length-1; i++) {
        if (name[i] !== '') {
            count += 1
        }
    }
    return count;
}

const CardList = ({monsters}) =>  (
            <center>
            <div className="card-list">
                    {
                        monsters.map((monster) => {
                        
                        const { id, name, email } = monster;
                            
                                return((
                                    <div className="card-container" key={id}>
                                        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                                        <h2>{name}</h2>
                                        <h4>{countWords(name)}</h4>
                                        <p>{email}</p>
                                    </div>
                                ))
                            })
                    }
                </div>
                </center>
        );

export default CardList;