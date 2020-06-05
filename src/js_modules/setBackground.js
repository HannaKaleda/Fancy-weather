import getImages from "./APIS/getImages";

export default async function setBackground() {
    await getImages();
    document.querySelector('.btn_update').addEventListener('click', async () => {
        await getImages();
    });
}