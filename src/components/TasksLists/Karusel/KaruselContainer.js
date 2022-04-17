import { connect } from "react-redux";
import Karusel from "./Karusel";


const mapStateToProps = state => ({ tasksLists: state.tasksLists})

const KaruselContainer = connect(mapStateToProps)(Karusel)

export default KaruselContainer