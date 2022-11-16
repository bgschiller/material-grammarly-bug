import * as React from "react";
import { TextField } from "@mui/material";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

export default () => {
  const [body, setBody] = React.useState("Hey tis is a test message");
  return (
    <>
      <h1>Welcome to React Vite Micro App!</h1>
      <GrammarlyEditorPlugin clientId="client_VBR3WR84oUZfdjWxkEcyh5">
        <TextField
          label="Body"
          value={body}
          name="body"
          onChange={(e) => setBody(e.target.value)}
          multiline
          rows="3"
          variant="filled"
          placeholder="Compose email..."
          color="primary"
          sx={{
            width: "100%",
            fontSize: "12px",
          }}
        />
      </GrammarlyEditorPlugin>
    </>
  );
};
