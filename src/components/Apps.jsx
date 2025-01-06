import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Createuser from './Createuser';
import Updateuser from './updateuser';
import User from  './user';

const Apps = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/create" element={<Createuser />} />
                <Route path="/update/:id" element={<Updateuser />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Apps;