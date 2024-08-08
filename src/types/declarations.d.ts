declare module '*.jpg';
declare module '*.png';// Додавай інші розширення файлів, які використовуєш
declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}
declare module '*.css';