// Importing various icons and styled components.
import SearchIcon from '@mui/icons-material/Search';
import { 
    TempSection,
    SearchBarParent,
    SearchBar,
    SearchBarInput
} from './SearchBarStyles'

// Exporting the file's so called "main" function.
export function Search() {
    return (
        <>
            {/* HTML skeleton parent element. */}
            <TempSection>
                {/* Search bar parent element. */}
                <SearchBarParent>
                    {/* Clean form that has a  single input area in it. */}
                    <SearchBar>
                        {/* Using a magnifying glass icon from MUI icons. */}
                        <SearchIcon style={{marginLeft: "1vw", color: "#DD7BD3", fontSize: 70 }} />
                        {/* Input area. */}
                        <SearchBarInput className="form-input" type="text" placeholder="Name a city, *place* is in your hands..." />
                    </SearchBar>
                </SearchBarParent>
            </TempSection>
        </>
    )
}