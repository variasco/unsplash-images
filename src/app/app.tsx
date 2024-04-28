import { Stack } from "@mui/system";
import { Button, Input } from "@shared/ui";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ boxSizing: "border-box" }}
      >
        <Input
          style={{ flex: 1 }}
          placeholder="Телефоны, яблоки, груши..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button>I am button</Button>
      </Stack>
    </>
  );
}

export default App;
