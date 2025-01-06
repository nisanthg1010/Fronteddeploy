import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Createuser from './Createuser';
import Updateuser from './Updateuser';
import User from  './User';

const Apps = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/create"cd react
                 element={<Createuser />} />
                <Route path="/update/:id" element={<Updateuser />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Apps;