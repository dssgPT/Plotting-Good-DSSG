import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Dropdown(props) {
  const uniqueEstacao = [
    ...new Set(props.data.map((estacao) => estacao.nome_estacao)),
  ];
  uniqueEstacao.unshift("-");
  return (
    <Box sx={{ m: 1, minWidth: 80 }}>
      <FormControl>
        <InputLabel>Nome da estação</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.selectedEstacao}
          label="Nome da estação"
          onChange={props.handleChangeEstacao}
        >
          {uniqueEstacao.map((estacao) => (
            <MenuItem value={estacao}>{estacao}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
