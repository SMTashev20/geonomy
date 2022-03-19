import SearchIcon from '@mui/icons-material/Search';
import { 
    TempSection,
    SearchBarParent,
    SearchBar,
    SearchBarInput
} from './SearchBarStyles'

export function Search() {
    return (
        <>
            <TempSection>
                <SearchBarParent>
                    <SearchBar>
                        <SearchIcon style={{marginLeft: "1vw", color: "#DD7BD3", fontSize: 70 }} />
                        <SearchBarInput className="form-input" type="text" placeholder="Name a city, *place* is in your hands..." />
                    </SearchBar>
                </SearchBarParent>
            </TempSection>
        </>
    )
}