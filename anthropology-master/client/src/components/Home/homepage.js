
import TableView from './tableview';
import ButtonAppBar from '../AppBar/appbar';
const HomePage = (props) => {
    return (<div>
        <ButtonAppBar setUser={props.setUser} user={props.user}/>
        <TableView/>
    </div>)
}

export default HomePage;