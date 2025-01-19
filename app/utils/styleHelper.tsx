interface StyleProps {
  [key: string]: any;
}

export const generateDynamicStyles = (blockData: StyleProps) => ({
  backgroundImage: blockData.background_image
    ? `url(${blockData.background_image})`
    : undefined,
  backgroundColor: blockData.background_color || "transparent",
  backgroundRepeat: blockData.background_repeat || "no-repeat",
  backgroundPosition: blockData.background_position || "center",
  backgroundAttachment: blockData.background_attachment || "scroll",
  backgroundSize: blockData.background_size || "cover",
  marginTop: blockData["margin-top"]
    ? `${blockData["margin-top"]}${blockData["margin-unit"] || "px"}`
    : "0px",
  marginRight: blockData["margin-right"]
    ? `${blockData["margin-right"]}${blockData["margin-unit"] || "px"}`
    : "0px",
  marginBottom: blockData["margin-bottom"]
    ? `${blockData["margin-bottom"]}${blockData["margin-unit"] || "px"}`
    : "0px",
  marginLeft: blockData["margin-left"]
    ? `${blockData["margin-left"]}${blockData["margin-unit"] || "px"}`
    : "0px",
  paddingTop: blockData["padding-top"]
    ? `${blockData["padding-top"]}${blockData["padding-unit"] || "px"}`
    : "0px",
  paddingRight: blockData["padding-right"]
    ? `${blockData["padding-right"]}${blockData["padding-unit"] || "px"}`
    : "0px",
  paddingBottom: blockData["padding-bottom"]
    ? `${blockData["padding-bottom"]}${blockData["padding-unit"] || "px"}`
    : "0px",
  paddingLeft: blockData["padding-left"]
    ? `${blockData["padding-left"]}${blockData["padding-unit"] || "px"}`
    : "0px",
});
