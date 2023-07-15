import CardMovie from "./CardMovie"
const ListMovie = ({moovie,setMoovie,search,rate,validRate}) =>{
    var x=moovie.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase())&&el.rating==rate)
    var y=moovie.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase()))
    return (
        <div className="Mov">
            {/* affichage de la liste card */}
            {
                // test sur state validrate
                validRate? 
                <>
                 {
                    x.length ==0 ? <h1>not found</h1> :x.map((el,i,t)=> <CardMovie key={el.id} el={el} moovie={moovie} setMoovie={setMoovie}/>)
                 }
                </>
                :
                <>
                    {
                        y.length==0?<h1>not found</h1>: y.map((el,i,t)=> <CardMovie key={el.id} el={el} moovie={moovie} setMoovie={setMoovie}/>)
            }
                </>
            }
            
            
        </div>
    )
}
export default ListMovie