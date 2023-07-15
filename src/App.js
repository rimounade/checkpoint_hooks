
import './App.css';
import { useState } from 'react';
import ListMovie from './Components/ListMovie';
import NavMovie from './Components/NavMovie';
import AddMovie from './Components/AddMovie';
import FilterMovie from './Components/FilterMovie';
function App() {
  
  const [moovie,setMoovie]=useState([
    { poster : "https://pictures.artify.tn/media/r9p6ux7liv6q4pxabgwi.jpg?width=200",
    title: "Dachra",
    desc:"Yasmine, étudiante en journalisme, et ses deux amis Walid et Bilel qui cherchent à élucider le mystère d’un vieux crime, commis il y a plus de 25 ans. Au milieu de nulle part, une femme avait été trouvée mutilée et presque morte. Une fois leur investigation terminée, ils vont se trouver dans une forêt où ils allaient découvrir un petit village isolé appelé “Dachra”. Coincé dans ce territoire inconnu, le trio va essayer de fuir l’horreur. Auront-ils réussi à s’échapper ?",
    rating:5,
    id:Math.random()
},
{
    poster : "https://pictures.artify.tn/media/ezxhsrwyexyglmoitxlh.jpg?width=200",
    title: "Rebelote",
    desc:"C’est l’histoire de trois tunisiens que rien ne les relie dans la vie quotidienne à part le fait qu’ils sont accros à la drague via Facebook. Un jour ils tombent dans le piège d’une femme qui leur donne rendez-vous dans un endroit retiré et les braque avec l’aide d’un gang. Et c’est là qu’un phénomène surnaturel se produit et nos trois personnages se retrouvent sans le savoir projetés dans le passé…",
    rating:2,
    id:Math.random()

},
{
    poster : "https://pictures.artify.tn/media/zhkfzolegpiij9rzf3ui.jpg?width=200",
    title: "Noce d'été",
    desc:"Hamid est journaliste, la trentaine passée et il vit son célibat avec sa famille petite bourgeoise comme un échappatoire pour ne pas ressembler aux siens. Sa famille veut le marier à tout prix avec sa voisine Rym (30 ans) pour mettre fin à ses hésitations, et aux mauvaises langues qui n’épargnent pas les célibataires endurcis. N’osant s’opposer à la décision de mariage de sa famille, Hamid préfère fuir l’atmosphère des préparatifs…",
    rating : 1,
    id:Math.random()
    

}
])
const [search,setSearch]=useState("")
const[rate,setRate]=useState(0)
const [validRate,setValidRate]=useState(false)
  return (
    <div>
      <NavMovie/>
      <FilterMovie  setSearch={setSearch} setRate={setRate} search={search} rate={rate} setValidRate={setValidRate}/>
      <AddMovie moovie={moovie} setMoovie={setMoovie}/>
      <ListMovie moovie={moovie} setMoovie={setMoovie} search={search} rate={rate} validRate={validRate}/>
      
      

    </div>
  )
}

export default App;
