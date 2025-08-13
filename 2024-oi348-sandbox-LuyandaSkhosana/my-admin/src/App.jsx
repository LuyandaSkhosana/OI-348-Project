import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import { PocketBaseProvider } from "../ra-pocketbase (2)";
import { StudentEdit, StudentList, StudentCreate, StudentShow} from "./students";


const pbProvider = PocketBaseProvider("https://probable-orbit-v6qqvj6gqqvcxvvp-8090.app.github.dev/");

const App = () => (
  <Admin dataProvider={pbProvider.dataProvider}>
    <Resource name="student" list={StudentList} edit={StudentEdit} show={StudentShow} create={StudentCreate} />
    <Resource name="users" list={ListGuesser} />
    
  </Admin>
);

export default App;