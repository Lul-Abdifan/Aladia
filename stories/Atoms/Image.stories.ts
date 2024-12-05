import Image from "~/components/Atoms/Image.vue"; 

export default {
  component: Image,
  title: "Atoms/Image",
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    customClass: { control: "text" },
  },
};

export const Default = {
  args: {
    src: "public/auth/aladia.png",
    alt: "Placeholder image",
    width: "150",
    height: "150",
    customClass: "rounded-lg",
  },
};



