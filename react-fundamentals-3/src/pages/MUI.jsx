import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



function MUI() {

    const students = ["Abrish", "Nimra", "Adeen", "Mahika", "Anas", "Ahmed", "Faizan"]
    const students1 = [{
        name: "Saarh",
        age: 19
    },
    {
        name: "Ahmed",
        age: 19
    },
    {
        name: "Ali",
        age: 19
    },
    {
        name: "Maaz",
        age: 19
    },
    ]
    return (<>

        <Autocomplete
            disablePortal
            options={students1.map((std) => std.name)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Student" />}
        />

    </>);
}

export default MUI;