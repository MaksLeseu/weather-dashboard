import {Input} from "../../common/components/Input/Input.js";
import {Button} from "../../common/components/Button/Button.js";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {citySelector} from "./city-bar.selector";
import {cityThunk} from "./searchBar.slice";

export const SearchBar = () => {
    /*const city = useSelector(citySelector);*/
    const dispatch = useDispatch();

    const [ cityName, setCityName ] = useState('');

    const handleInputChange = (e) => setCityName(e.currentTarget.value);
    const handleClick = () => dispatch(cityThunk.fetchCity(cityName));

    return (
        <div>
            <Input value={cityName} onChange={handleInputChange} />
            <Button onClick={handleClick}>Send</Button>
        </div>
    );
};