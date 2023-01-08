export const changeCssVariables = theme => {
    const root = document.querySelector(':root');

    root.style.setProperty('--theme-default-main-color', `var(--theme-${theme}-main-color)`)
    root.style.setProperty('--theme-default-second-color', `var(--theme-${theme}-second-color)`)
    root.style.setProperty('--theme-default-text-color', `var(--theme-${theme}-text-color)`)
}