

const LocationInfo = ( { location } ) => {
    return (
        
            <article className="principio">
                <h2>{location?.name}</h2>
                <ul className="list">
                    <li><span className="princi">Type:</span><span className="titulo">{location?.type}</span></li>
                    <li><span className="princi">Dimension:</span><span className="titulo">{location?.dimension || 'unknown'}</span></li>
                    <li><span className="princi">Population:</span><span className="titulo">{location?.residents.length}</span></li>
                </ul>
                
            </article>
      
    )
 
}

export default LocationInfo
