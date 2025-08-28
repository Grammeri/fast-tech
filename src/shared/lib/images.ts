const randomText = () => Math.random().toString(36).substring(2, 7);

const randomColor = () =>
    Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

export const makeImageUrl = () => {
    const host = import.meta.env.VITE_IMAGE_HOST;
    const text = randomText();
    const bg = randomColor();
    const fg = randomColor();
    return `${host}/600x400/${bg}/${fg}&text=${text}`;
};
