import Button from "~/components/Atoms/Button.vue"; 

export default {
  component: Button,
  title: "Atoms/Buttons",
  argTypes: {
    size: { control: "text" },
    rounded: { control: "text" },
    bgColor: { control: "text" },
    hoverBgColor: { control: "text" },
    textColor: { control: "text" },
  },
};

export const Default = {
  args: {
    size: "11",
    rounded: "full",
    bgColor: "bg-primary",
    hoverBgColor: "bg-secondary",
    textColor: "text-white",
  },

};

export const Small = {
  args: {
    size: "11",
    rounded: "lg",
    bgColor: "bg-primary",
    hoverBgColor: "bg-blue-700",
    textColor: "text-white",
  },
  
};


