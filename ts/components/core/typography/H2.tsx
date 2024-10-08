import * as React from "react";
import {
  IOColors,
  IOColorsStatusForeground,
  IOTheme
} from "@pagopa/io-app-design-system";
import { IOFontFamily, IOFontWeight } from "../fonts";
import { ExternalTypographyProps, TypographyProps } from "./common";
import { useTypographyFactory } from "./Factory";

type PartialAllowedColors = Extract<
  IOColors,
  "bluegreyDark" | "white" | "blue" | "bluegrey"
>;
type AllowedColors =
  | PartialAllowedColors
  | IOColorsStatusForeground
  | IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "Bold" | "Semibold">;

type OwnProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

const fontName: IOFontFamily = "TitilliumSansPro";
export const h2FontSize = 20;
export const h2LineHeight = 24;
export const h2DefaultColor: AllowedColors = "bluegreyDark";
export const h2DefaultWeight: AllowedWeight = "Bold";

/**
 * Typography component to render `H2` text with font size {@link fontSize} and fontFamily {@link fontName}.
 * default values(if not defined) are weight: `Bold`, color: `bluegreyDark`
 * @param props
 * @constructor
 * @deprecated Don't use local `H2`. Import it from `io-app-design-system` instead.
 */
export const H2: React.FunctionComponent<OwnProps> = props =>
  useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: h2DefaultWeight,
    defaultColor: h2DefaultColor,
    font: fontName,
    fontStyle: { fontSize: h2FontSize, lineHeight: h2LineHeight }
  });
