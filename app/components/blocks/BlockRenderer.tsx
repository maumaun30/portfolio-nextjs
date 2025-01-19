import Hero from "./Hero";

interface BlockProps {
  block: {
    type: string;
    data: {
      custom_id?: string;
      css_classes?: string;
      container_size?: string;
      background_image?: string;
      background_color?: string;
      background_repeat?: string;
      background_position?: string;
      background_attachment?: string;
      background_size?: string;
      title?: string;
      description?: string;
      button_text?: string;
      button_link?: string;
      "margin-top"?: string;
      "margin-right"?: string;
      "margin-bottom"?: string;
      "margin-left"?: string;
      "margin-unit"?: string;
      "padding-top"?: string;
      "padding-right"?: string;
      "padding-bottom"?: string;
      "padding-left"?: string;
      "padding-unit"?: string;
      clients?: number[];
    };
  };
}

const BlockRenderer = ({ block }: BlockProps) => {
  switch (block.type) {
    case "hero":
      return <Hero blockData={block.data} />;
    default:
      return <div>Unknown block type</div>;
  }
};

export default BlockRenderer;
