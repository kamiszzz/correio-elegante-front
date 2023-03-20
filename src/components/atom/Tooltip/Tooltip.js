import { Tooltip as TooltipMui } from "@mui/material";

export function Tooltip(props) {
  return <TooltipMui {...props}>{props.children}</TooltipMui>;
}
