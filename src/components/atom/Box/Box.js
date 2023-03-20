import { Box as BoxMui } from "@mui/material";

export function Box(props) {
  return <BoxMui {...props}>{props.children}</BoxMui>;
}
