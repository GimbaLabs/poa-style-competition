import devs from '../../devs.json'

export const getServerSideProps = async pageContext => {
    const devID = pageContext.query.id // I used ".id" because the name of my file is [id].js

    return {
        props : {
            devID
        }
    }
}

function eachDev({devID}) {

    let currentDev = null   // currentDev is currently "false"

    // if something doesn't hold any data, it can be seen as "false"

    for(var i = 0; i < devs.team.length; i++){
        if(devs.team[i].username === devID){
            currentDev = devs.team[i]
        }
    }

    return (
        <div>
            { 
                currentDev ?   
                <>
                    <h1>{currentDev.username}'s Dev Page</h1>
                    <h3>Location: {currentDev.location}</h3>
                    <h2>Goals</h2>
                    <ul>
                        {currentDev.goals.map(goal => 
                            <li key={goal}>{goal}</li>
                        )}
                    </ul> 
                </> : <><h1>Developer not found</h1></> 
            }
            
        </div>
    )
}

export default eachDev
