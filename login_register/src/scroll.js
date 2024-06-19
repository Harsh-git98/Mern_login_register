// scrollEffects.js
export const addScrollEffect = () => {
    const handleScroll = () => {
        const value = window.scrollY;
        document.querySelector('.title').style.marginTop = `${value * 1.5}px`;
        document.querySelector('.leaf1').style.marginLeft = `-${value}px`;
        document.querySelector('.leaf2').style.marginLeft = `${value}px`;
        document.querySelector('.bush2').style.marginBottom = `-${value}px`;
        document.querySelector('.mount1').style.marginBottom = `-${value * 1.2}px`;
        document.querySelector('.mount2').style.marginBottom = `-${value * 1.5}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
};
